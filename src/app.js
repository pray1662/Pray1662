import './styles.css';
import { addDays, formatDate, liturgicalLabel } from './calendar.js';
import { buildOffice } from './office.js';

const state = { date: new Date(), office: new Date().getHours() < 12 ? 'morning' : 'evening' };

function isoLocal(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function render() {
  const app = document.querySelector('#app');
  const office = buildOffice(state.date, state.office);
  const title = state.office === 'morning' ? 'Morning Prayer' : 'Evening Prayer';
  app.innerHTML = `
    <div class="shell">
      <header class="topbar"><div class="brand">1662 Daily Prayer</div><button class="iconbtn" id="today">Today</button></header>
      <section class="hero">
        <div class="eyebrow">${formatDate(state.date)}</div><h1>${title}</h1><div class="sub">${liturgicalLabel(state.date)}</div>
        <div class="office-switch"><button data-office="morning" class="${state.office==='morning'?'active':''}">Morning</button><button data-office="evening" class="${state.office==='evening'?'active':''}">Evening</button></div>
      </section>
      <section class="card"><h2>Appointed Psalms</h2><p class="psalms">${office.psalms.join('<br>')}</p></section>
      <section class="card"><h2>Lessons</h2>
        <div class="lesson"><span>First Lesson</span><strong>${office.lessons.first ?? 'Not appointed'}</strong></div>
        <div class="lesson"><span>Second Lesson</span><strong>${office.lessons.second ?? 'Not appointed'}</strong></div>
        <p class="source-note">${office.lessons.source === 'calendar' ? 'From the 1662 Calendar with the Table of Lessons.' : `Using the 1662 ${office.lessons.source}.`}</p>
        ${office.lessons.collision ? '<div class="notice">This date contains both a Sunday and Holy-Day proper. V0.2 currently gives the Holy-Day table priority; this rare occurrence rule is marked for further historical verification.</div>' : ''}
      </section>
      <section class="card"><h2>Order of the Office</h2><ol class="sequence">${office.sections.map(s=>`<li>${s}</li>`).join('')}</ol></section>
      <nav class="nav" aria-label="Date navigation"><button class="iconbtn" id="prev">←</button><input class="datepick" id="datepick" type="date" value="${isoLocal(state.date)}" aria-label="Choose date" /><button class="iconbtn" id="next">→</button></nav>
    </div>`;
  document.querySelectorAll('[data-office]').forEach(btn => btn.addEventListener('click', () => { state.office = btn.dataset.office; render(); }));
  document.querySelector('#today').addEventListener('click',()=>{ state.date=new Date(); render(); });
  document.querySelector('#prev').addEventListener('click',()=>{ state.date=addDays(state.date,-1); render(); });
  document.querySelector('#next').addEventListener('click',()=>{ state.date=addDays(state.date,1); render(); });
  document.querySelector('#datepick').addEventListener('change',e=>{ const [y,m,d]=e.target.value.split('-').map(Number); state.date=new Date(y,m-1,d); render(); });
}
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
render();
