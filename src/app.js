import { addDays, formatDate, liturgicalLabel } from './calendar.js';
import { buildOffice } from './office.js';
import { fixed } from '../data/liturgy.js';

const savedTheme = localStorage.getItem('pray1662-theme');
const savedDyslexic = localStorage.getItem('pray1662-dyslexic') === 'true';
const state = {
  date: new Date(),
  office: new Date().getHours() < 12 ? 'morning' : 'evening',
  mode: 'overview',
  focusIndex: 0,
  canticleChoice: 'teDeum',
  theme: savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'dark',
  menuOpen: false,
  language: 'traditional',
  dyslexic: savedDyslexic
};

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.dataset.language = state.language;
  document.documentElement.dataset.dyslexic = state.dyslexic ? 'true' : 'false';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', state.theme === 'dark' ? '#2F4654' : '#EFEAE2');
}

function isoLocal(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function esc(value='') {
  return String(value).replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
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
  const label = 'Read from your Bible';
  return `<details class="office-item appointment" ${open ? 'open' : ''}>
    <summary><span>${esc(item.title)}</span><small>${esc(item.value || '')}</small></summary>
    <div class="office-text appointment-body">
      <div class="appointment-ref">${esc(item.value || 'Not appointed')}</div>
      <p class="rubric">${label}.</p>
    </div>
  </details>`;
}

function collectPanel(item, open=false) {
  const list = item.collects || [];
  const subtitle = list.length ? list.map(c => c.title).join(' · ') : 'No collect resolved';
  const copy = list.length
    ? list.map((c, i) => `<section class="collect-copy"><div class="collect-name">${esc(c.title)}</div><p>${esc(c.text)}</p>${i < list.length - 1 ? '<div class="collect-divider"></div>' : ''}</section>`).join('')
    : '<p class="rubric">No collect has been resolved for this date.</p>';
  return `<details class="office-item collect-item" ${open ? 'open' : ''}>
    <summary><span>${esc(item.title)}</span><small>${esc(subtitle)}</small></summary>
    <div class="office-text">${copy}</div>
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
    if (item.kind === 'collect') return collectPanel(item, open);
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
    body=`<div class="focus-reference">${esc(item.value)}</div><p class="rubric">Read from your Bible.</p>`;
  } else if (item.kind === 'collect') {
    const list = item.collects || [];
    title='The Collect of the Day'; subtitle=list.map(c=>c.title).join(' · ');
    body=list.map(c=>`<div class="focus-collect"><div class="collect-name">${esc(c.title)}</div><p>${esc(c.text)}</p></div>`).join('');
  }
  return `<section class="focus-card" aria-live="polite">
    <div class="focus-count">${index+1} / ${total}</div>
    <div class="focus-heading"><div class="eyebrow">${esc(subtitle)}</div><h2>${esc(title)}</h2></div>
    <div class="focus-copy">${body}</div>
    <div class="focus-nav"><button id="focusPrev" ${index===0?'disabled':''}>← Previous</button><button id="focusNext">${index===total-1?'Finish':'Continue →'}</button></div>
  </section>`;
}

function settingsMenu() {
  if (!state.menuOpen) return '';
  return `<div class="menu-card" id="menuCard" role="dialog" aria-label="Settings">
    <div class="menu-section"><div class="menu-label">Appearance</div>
      <div class="segmented"><button data-theme="light" class="${state.theme==='light'?'active':''}">Day</button><button data-theme="dark" class="${state.theme==='dark'?'active':''}">Night</button></div>
    </div>
    <div class="menu-section"><div class="menu-label">Language</div>
      <div class="segmented"><button class="active">1662</button><button disabled title="Contemporary language mode is planned for the next release">Contemporary</button></div>
<p class="menu-note">Contemporary language will be added.</p>    </div>
    <div class="menu-section"><div class="menu-label">Accessibility</div>
      <label class="check-row"><input id="dyslexicToggle" type="checkbox" ${state.dyslexic?'checked':''}><span><strong>Dyslexia-friendly text</strong><small>OpenDyslexic, larger type and wider line spacing</small></span></label>
    </div>
    <div class="menu-section install-menu-section" id="installMenuSection"><button class="menu-today" id="installApp">Add Pray1662 to Home Screen</button></div>
    <button class="menu-today" id="today">Return to today</button>
  </div>`;
}

let deferredInstallPrompt = null;

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia('(max-width: 760px)').matches;
}

function isIOS() { return /iPhone|iPad|iPod/i.test(navigator.userAgent); }

function shouldShowInstallNudge() {
  return isMobile() && !isStandalone() && localStorage.getItem('pray1662-install-dismissed') !== 'true';
}

function installNudge() {
  if (!shouldShowInstallNudge()) return '';
  const copy = isIOS()
    ? 'Tap the Share button in Safari, then choose “Add to Home Screen”.'
    : 'Add Pray1662 to your Home Screen so it opens like an app.';
  return `<aside class="install-nudge" id="installNudge" aria-label="Add Pray1662 to Home Screen">
    <button class="nudge-close" id="dismissInstall" aria-label="Dismiss">×</button>
    <div class="install-icon">${isIOS() ? '↥' : '+'}</div>
    <div><strong>Add Pray1662 to your Home Screen</strong><p>${esc(copy)}</p></div>
    <button class="nudge-action" id="installNudgeAction">${isIOS() ? 'Got it' : 'Add'}</button>
  </aside>`;
}

function render() {
  applyTheme();
  const app = document.querySelector('#app');
  const office = buildOffice(state.date, state.office);
  const title = state.office === 'morning' ? 'Morning Prayer' : 'Evening Prayer';
  if (state.focusIndex >= office.items.length) state.focusIndex = 0;

  const main = state.mode === 'focus'
    ? focusCard(office.items[state.focusIndex], state.focusIndex, office.items.length)
    : `<section class="office-list">${overviewItems(office)}</section>`;

  app.innerHTML = `<div class="shell ${state.mode==='focus'?'focus-shell':''}">
    <header class="topbar"><div class="brand">Pray 1662</div><div class="top-actions"><button class="menu-button" id="menuButton" aria-label="Open settings" aria-expanded="${state.menuOpen}">•••</button>${settingsMenu()}</div></header>
    <section class="hero compact">
      <div class="date-row">
        <button class="date-arrow" id="prevTop" aria-label="Previous day">←</button>
        <label class="date-centre"><span class="eyebrow">${formatDate(state.date)}</span><input class="datepick-top" id="datepick" type="date" value="${isoLocal(state.date)}" aria-label="Choose date" /></label>
        <button class="date-arrow" id="nextTop" aria-label="Next day">→</button>
      </div>
      <h1>${title}</h1><div class="sub">${liturgicalLabel(state.date)}</div>
      <div class="office-switch"><button data-office="morning" class="${state.office==='morning'?'active':''}">Morning</button><button data-office="evening" class="${state.office==='evening'?'active':''}">Evening</button></div>
      <div class="mode-switch" role="group" aria-label="Reading mode">
        <button data-mode="overview" class="${state.mode==='overview'?'active':''}">Overview</button>
        <button data-mode="continuous" class="${state.mode==='continuous'?'active':''}">Continuous</button>
        <button data-mode="focus" class="${state.mode==='focus'?'active':''}">Focus</button>
      </div>
    </section>
    ${main}
    ${installNudge()}
    <footer class="footer">1662 Daily Prayer · Scripture references only · Designed to be used with a physical Bible</footer>
  </div>`;

}

const appRoot = document.querySelector('#app');

function goTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

appRoot.addEventListener('click', event => {
  const btn = event.target.closest('button');
  if (!btn || !appRoot.contains(btn)) return;

  if (btn.dataset.office) {
    state.office = btn.dataset.office;
    state.focusIndex = 0;
    state.menuOpen = false;
    render();
    return;
  }

  if (btn.dataset.mode) {
    state.mode = btn.dataset.mode;
    state.focusIndex = 0;
    state.menuOpen = false;
    render();
    return;
  }

  if (btn.dataset.canticle) {
    event.preventDefault();
    state.canticleChoice = btn.dataset.canticle;
    render();
    return;
  }

  if (btn.dataset.theme) {
    state.theme = btn.dataset.theme;
    localStorage.setItem('pray1662-theme', state.theme);
    applyTheme();
    appRoot.querySelectorAll('[data-theme]').forEach(themeBtn => {
      themeBtn.classList.toggle('active', themeBtn.dataset.theme === state.theme);
    });
    return;
  }

  switch (btn.id) {
    case 'menuButton':
      state.menuOpen = !state.menuOpen;
      render();
      break;
    case 'dismissInstall':
      localStorage.setItem('pray1662-install-dismissed','true');
      render();
      break;
    case 'installNudgeAction':
      if (isIOS() && !deferredInstallPrompt) {
        localStorage.setItem('pray1662-install-dismissed','true');
        render();
      } else {
        handleInstallRequest();
      }
      break;
    case 'installApp':
      handleInstallRequest();
      break;
    case 'today':
      state.date = new Date();
      state.focusIndex = 0;
      state.menuOpen = false;
      render();
      break;
    case 'prevTop':
      state.date = addDays(state.date, -1);
      state.focusIndex = 0;
      render();
      break;
    case 'nextTop':
      state.date = addDays(state.date, 1);
      state.focusIndex = 0;
      render();
      break;
    case 'focusPrev':
      if (state.focusIndex > 0) {
        state.focusIndex--;
        render();
        goTop();
      }
      break;
    case 'focusNext': {
      const office = buildOffice(state.date, state.office);
      if (state.focusIndex < office.items.length - 1) {
        state.focusIndex++;
        render();
        goTop();
      } else {
        state.mode = 'overview';
        state.focusIndex = 0;
        render();
        goTop();
      }
      break;
    }
  }
});

appRoot.addEventListener('change', event => {
  if (event.target.id === 'dyslexicToggle') {
    state.dyslexic = event.target.checked;
    localStorage.setItem('pray1662-dyslexic', String(state.dyslexic));
    applyTheme();
    return;
  }
  if (event.target.id !== 'datepick') return;
  const [y,m,d] = event.target.value.split('-').map(Number);
  if (!y || !m || !d) return;
  state.date = new Date(y, m - 1, d);
  state.focusIndex = 0;
  render();
});

document.addEventListener('pointerdown', event => {
  if (!state.menuOpen) return;
  if (event.target.closest('#menuCard') || event.target.closest('#menuButton')) return;
  state.menuOpen = false;
  render();
});

async function handleInstallRequest() {
  if (isStandalone()) return;
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    localStorage.setItem('pray1662-install-dismissed','true');
    render();
    return;
  }
  if (isIOS()) {
    localStorage.removeItem('pray1662-install-dismissed');
    state.menuOpen = false;
    render();
    return;
  }
  localStorage.removeItem('pray1662-install-dismissed');
  state.menuOpen = false;
  render();
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  localStorage.setItem('pray1662-install-dismissed','true');
  render();
});

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
