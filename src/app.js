import { addDays, formatDate, liturgicalLabel } from './calendar.js';
import { buildOffice } from './office.js';
import { fixed } from '../data/liturgy.js';

const state = {
  date: new Date(),
  office: new Date().getHours() < 12 ? 'morning' : 'evening',
  mode: 'overview',
  focusIndex: 0,
  canticleChoice: 'teDeum'
};

function isoLocal(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function esc(value='') {
  return String(value).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

function renderContent(content=[]) {
  return content.map(block => {
    if (block.type === 'line') {
      return `<div class="response-line"><span>${esc(block.speaker)}</span><p>${esc(block.text)}</p></div>`;
    }
    return `<p>${esc(block.text)}</p>`;
  }).join('');
}

function fixedPanel(id, open=false) {
  const item = fixed[id];
  return `<details class="office-item" ${open ? 'open' : ''}>
    <summary><span>${esc(item.title)}</span>${item.subtitle ? `<small>${esc(item.subtitle)}</small>` : ''}</summary>
    <div class="office-text">
      ${item.rubric ? `<p class="rubric">${esc(item.rubric)}</p>` : ''}
      ${renderContent(item.content)}
    </div>
  </details>`;
}

function appointmentPanel(item, open=false) {
  const label = item.kind === 'lesson' ? 'Read from your Bible' : 'Appointed for this office';
  return `<details class="office-item appointment" ${open ? 'open' : ''}>
    <summary><span>${esc(item.title)}</span><small>${esc(item.value || '')}</small></summary>
    <div class="office-text appointment-body">
      <div class="appointment-ref">${esc(item.value || 'Not appointed')}</div>
      <p class="rubric">${label}.</p>
    </div>
  </details>`;
}

function collectPanel(open=false) {
  return `<details class="office-item muted-item" ${open ? 'open' : ''}>
    <summary><span>The Collect of the Day</span><small>Calendar text coming next</small></summary>
    <div class="office-text"><p class="rubric">The proper Collect is calendar-driven. V0.3 keeps this visible in the sequence while the full Collect dataset is prepared and verified.</p></div>
  </details>`;
}

function choicePanel(item, open=false) {
  const selected = state.canticleChoice;
  const first = fixed[item.options[0]], second = fixed[item.options[1]];
  return `<details class="office-item" ${open ? 'open' : ''}>
    <summary><span>${esc(item.title)}</span><small>${esc(fixed[selected]?.title || first.title)}</small></summary>
    <div class="office-text">
      <div class="choice-row" role="group" aria-label="Canticle choice">
        <button class="pill ${selected===item.options[0]?'active':''}" data-canticle="${item.options[0]}">${esc(first.title)}</button>
        <button class="pill ${selected===item.options[1]?'active':''}" data-canticle="${item.options[1]}">${esc(second.title)}</button>
      </div>
      <div class="canticle-copy">${renderContent(fixed[selected]?.content || first.content)}</div>
    </div>
  </details>`;
}

function overviewItems(office) {
  const open = state.mode === 'continuous';
  return office.items.map(item => {
    if (item.kind === 'fixed') return fixedPanel(item.id, open);
    if (item.kind === 'lesson' || item.kind === 'psalms') return appointmentPanel(item, open);
    if (item.kind === 'collect') return collectPanel(open);
    if (item.kind === 'choice') return choicePanel(item, open);
    return '';
  }).join('');
}

function focusResolvedItem(item) {
  if (item.kind === 'choice') return { kind:'fixed', id:state.canticleChoice };
  return item;
}

function focusCard(item, index, total) {
  item = focusResolvedItem(item);
  let title='', subtitle='', body='';
  if (item.kind === 'fixed') {
    const f = fixed[item.id];
    title=f.title; subtitle=f.subtitle || '';
    body = `${f.rubric ? `<p class="rubric">${esc(f.rubric)}</p>` : ''}${renderContent(f.content)}`;
  } else if (item.kind === 'lesson') {
    title=item.title; subtitle=item.value || 'Not appointed';
    body=`<div class="focus-reference">${esc(item.value || 'Not appointed')}</div><p class="rubric">Read this lesson from your Bible, then continue.</p>`;
  } else if (item.kind === 'psalms') {
    title=item.title; subtitle=item.value;
    body=`<div class="focus-reference">${esc(item.value)}</div><p class="rubric">Read or sing the appointed Psalms from your Prayer Book or Psalter.</p>`;
  } else if (item.kind === 'collect') {
    title=item.title; subtitle='Proper Collect';
    body=`<p class="rubric">The full calendar-driven Collect text will be added in the next data pass.</p>`;
  }
  return `<section class="focus-card" aria-live="polite">
    <div class="focus-count">${index+1} / ${total}</div>
    <div class="focus-heading"><div class="eyebrow">${esc(subtitle)}</div><h2>${esc(title)}</h2></div>
    <div class="focus-copy">${body}</div>
    <div class="focus-nav"><button id="focusPrev" ${index===0?'disabled':''}>← Previous</button><button id="focusNext">${index===total-1?'Finish':'Continue →'}</button></div>
  </section>`;
}

function render() {
  const app = document.querySelector('#app');
  const office = buildOffice(state.date, state.office);
  const title = state.office === 'morning' ? 'Morning Prayer' : 'Evening Prayer';
  if (state.focusIndex >= office.items.length) state.focusIndex = 0;

  const main = state.mode === 'focus'
    ? focusCard(office.items[state.focusIndex], state.focusIndex, office.items.length)
    : `<section class="office-list">${overviewItems(office)}</section>`;

  app.innerHTML = `<div class="shell ${state.mode==='focus'?'focus-shell':''}">
    <header class="topbar"><div class="brand">Pray 1662</div><button class="iconbtn" id="today">Today</button></header>
    <section class="hero compact">
      <div class="eyebrow">${formatDate(state.date)}</div><h1>${title}</h1><div class="sub">${liturgicalLabel(state.date)}</div>
      <div class="office-switch"><button data-office="morning" class="${state.office==='morning'?'active':''}">Morning</button><button data-office="evening" class="${state.office==='evening'?'active':''}">Evening</button></div>
      <div class="mode-switch" role="group" aria-label="Reading mode">
        <button data-mode="overview" class="${state.mode==='overview'?'active':''}">Overview</button>
        <button data-mode="continuous" class="${state.mode==='continuous'?'active':''}">Continuous</button>
        <button data-mode="focus" class="${state.mode==='focus'?'active':''}">Focus</button>
      </div>
    </section>
    ${main}
    ${state.mode !== 'focus' ? `<nav class="nav" aria-label="Date navigation"><button class="iconbtn" id="prev">←</button><input class="datepick" id="datepick" type="date" value="${isoLocal(state.date)}" aria-label="Choose date" /><button class="iconbtn" id="next">→</button></nav>` : ''}
    <footer class="footer">1662 Daily Prayer · Scripture references only · Designed to be used with a physical Bible</footer>
  </div>`;

  document.querySelectorAll('[data-office]').forEach(btn => btn.addEventListener('click', () => { state.office = btn.dataset.office; state.focusIndex=0; render(); }));
  document.querySelectorAll('[data-mode]').forEach(btn => btn.addEventListener('click', () => { state.mode = btn.dataset.mode; state.focusIndex=0; render(); }));
  document.querySelectorAll('[data-canticle]').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); state.canticleChoice = btn.dataset.canticle; render(); }));
  document.querySelector('#today')?.addEventListener('click',()=>{ state.date=new Date(); state.focusIndex=0; render(); });
  document.querySelector('#prev')?.addEventListener('click',()=>{ state.date=addDays(state.date,-1); render(); });
  document.querySelector('#next')?.addEventListener('click',()=>{ state.date=addDays(state.date,1); render(); });
  document.querySelector('#datepick')?.addEventListener('change',e=>{ const [y,m,d]=e.target.value.split('-').map(Number); state.date=new Date(y,m-1,d); state.focusIndex=0; render(); });
  document.querySelector('#focusPrev')?.addEventListener('click',()=>{ if(state.focusIndex>0){state.focusIndex--;render();window.scrollTo(0,0);} });
  document.querySelector('#focusNext')?.addEventListener('click',()=>{
    if(state.focusIndex < office.items.length-1){state.focusIndex++;render();window.scrollTo(0,0);} else { state.mode='overview'; state.focusIndex=0; render(); window.scrollTo(0,0); }
  });
}

window.addEventListener('keydown', e => {
  if (state.mode !== 'focus') return;
  if (['ArrowRight','Enter',' '].includes(e.key)) { e.preventDefault(); document.querySelector('#focusNext')?.click(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); document.querySelector('#focusPrev')?.click(); }
});

let touchX = null;
window.addEventListener('touchstart', e => { if(state.mode==='focus') touchX=e.changedTouches[0].clientX; }, {passive:true});
window.addEventListener('touchend', e => {
  if(state.mode!=='focus' || touchX===null) return;
  const dx=e.changedTouches[0].clientX-touchX; touchX=null;
  if(Math.abs(dx)>60) document.querySelector(dx<0?'#focusNext':'#focusPrev')?.click();
}, {passive:true});

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
render();
