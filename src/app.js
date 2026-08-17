import { addDays, formatDate, liturgicalLabel } from './calendar.js';
import { buildOffice } from './office.js';
import { fixed } from '../data/liturgy.js';
import { getMarginalia } from '../data/marginalia.js';
import { getYearLectionary, lessonSummary } from './year-calendar.js';
import { getYearCoverage } from './year-coverage.js';
import { readingPlans, getReadingPlan, normaliseReadingPlan } from '../data/reading-plans.js';

const savedTheme = localStorage.getItem('pray1662-theme');
const savedDyslexic = localStorage.getItem('pray1662-dyslexic') === 'true';
const savedMarginalia = localStorage.getItem('pray1662-marginalia') === 'true';
const savedReadingPlan = normaliseReadingPlan(localStorage.getItem('pray1662-reading-plan') || '1662');
const state = {
  date: new Date(),
  office: new Date().getHours() < 12 ? 'morning' : 'evening',
  mode: 'overview',
  focusIndex: 0,
  canticleChoice: 'teDeum',
  theme: savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'dark',
  menuOpen: false,
  language: 'traditional',
  dyslexic: savedDyslexic,
  marginalia: savedMarginalia,
  readingPlan: savedReadingPlan,
  view: 'office',
  calendarYear: new Date().getFullYear(),
  calendarReturn: 'office'
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

function marginaliaBlock(id) {
  if (!state.marginalia) return '';
  const refs = getMarginalia(id);
  if (!refs.length) return '';
  return `<aside class="marginalia" aria-label="Scriptural marginalia"><span>Scripture</span><div>${refs.map(ref => `<em>${esc(ref)}</em>`).join('')}</div></aside>`;
}

function fixedPanel(id, open=false) {
  const item = fixed[id];
  return `<details class="office-item" ${open ? 'open' : ''}>
    <summary><span>${esc(item.title)}</span>${item.subtitle ? `<small>${esc(item.subtitle)}</small>` : ''}</summary>
    <div class="office-text">
      ${marginaliaBlock(id)}
      ${item.rubric ? `<p class="rubric">${esc(item.rubric)}</p>` : ''}
      ${renderContent(item.content)}
    </div>
  </details>`;
}

function appointmentPanel(item, open=false) {
  const hasReading = Boolean(item.value);
  const help = hasReading ? 'Read from your Bible.' : (item.note || 'No reading is appointed.');
  return `<details class="office-item appointment" ${open ? 'open' : ''}>
    <summary><span>${esc(item.title)}</span><small>${esc(item.value || 'Not appointed')}</small></summary>
    <div class="office-text appointment-body">
      <div class="appointment-ref">${esc(item.value || 'Not appointed')}</div>
      <p class="rubric">${esc(help)}</p>
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
    body = `${marginaliaBlock(item.id)}${f.rubric ? `<p class="rubric">${esc(f.rubric)}</p>` : ''}${renderContent(f.content)}`;
  } else if (item.kind === 'lesson') {
    title=item.title; subtitle=item.value || 'Not appointed';
    body=`<div class="focus-reference">${esc(item.value || 'Not appointed')}</div><p class="rubric">${esc(item.value ? 'Read this lesson from your Bible, then continue.' : (item.note || 'No reading is appointed.'))}</p>`;
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
      <div class="segmented"><button class="active">1662</button><button disabled title="Contemporary language mode is planned">Contemporary</button></div>
      <p class="menu-note">Contemporary language will be added.</p>
    </div>
    <div class="menu-section"><div class="menu-label">Lectionary / reading plan</div>
      <div class="plan-options" role="radiogroup" aria-label="Lectionary or reading plan">
        ${Object.values(readingPlans).map(plan => `<button class="plan-option ${state.readingPlan===plan.id?'active':''}" data-reading-plan="${plan.id}" role="radio" aria-checked="${state.readingPlan===plan.id}" ${plan.available?'':'disabled'}><span><strong>${esc(plan.shortName)}</strong><small>${esc(plan.type === 'reading-plan' ? 'Bible reading plan' : 'Lectionary')}</small></span>${state.readingPlan===plan.id?'<em>✓</em>':''}</button>`).join('')}
      </div>
      <p class="menu-note">${esc(getReadingPlan(state.readingPlan).description)}</p>
      ${!readingPlans['common-worship'].available ? '<p class="menu-note plan-coming">Common Worship: awaiting complete authorised data import.</p>' : ''}
    </div>
    <div class="menu-section"><div class="menu-label">Reading</div>
      <label class="check-row"><input id="marginaliaToggle" type="checkbox" ${state.marginalia?'checked':''}><span><strong>Scriptural marginalia</strong><small>Show biblical references alongside the Prayer Book text</small></span></label>
    </div>
    <div class="menu-section"><div class="menu-label">Accessibility</div>
      <label class="check-row"><input id="dyslexicToggle" type="checkbox" ${state.dyslexic?'checked':''}><span><strong>Dyslexia-friendly text</strong><small>OpenDyslexic, larger type and wider line spacing</small></span></label>
    </div>
    <div class="menu-section"><button class="menu-today menu-link" id="openCalendarDirect">View full lectionary</button></div>
    <div class="menu-section install-menu-section" id="installMenuSection"><button class="menu-today" id="installApp">Add Pray1662 to Home Screen</button></div>
    <button class="menu-today" id="today">Return to today</button>
    <div class="menu-section"><button class="menu-today menu-link" id="openAbout">About Pray1662</button></div>
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


function shortDate(date) {
  return new Intl.DateTimeFormat('en-GB', { day:'numeric', month:'short' }).format(date);
}

function aboutView() {
  return `<section class="info-page">
    <button class="back-link" id="backToOffice">← Back to prayer</button>
    <div class="info-hero"><div class="eyebrow">About</div><h1>About Pray1662</h1></div>
    <div class="about-sections">
      <section><h2>What is the Book of Common Prayer?</h2><p>The Book of Common Prayer is the prayer book of the Church of England. Pray1662 follows its pattern of Morning and Evening Prayer, first authorised in its 1662 form.</p></section>
      <section><h2>What is the 30-day Psalter?</h2><p>The 1662 Prayer Book divides the Psalms between Morning and Evening Prayer so that the Psalter is prayed through each month.</p></section>
      <section><h2>Why don’t you have the full Bible readings?</h2><p>There are lots of Bible apps out there that you are free to use, but a physical Bible is strongly recommended.</p></section>
      <section><h2>Which Bible readings does Pray1662 use?</h2><p>You can choose the original 1662 Lectionary or the M’Cheyne Bible Reading Plan. Common Worship Daily Prayer is also built into the reading-plan architecture and will be enabled once its complete authorised dataset is imported. Changing this setting changes the Bible references only: the 1662 Office, 30-day Psalter and collects stay the same.</p></section>
      <section><h2>Scriptural marginalia</h2><p>Optional biblical references are drawn from the 1839 SPCK edition of <em>The Book of Common Prayer: with marginal references to texts in the Holy Scriptures</em>. Pray1662 shows a restrained selection so the prayer text remains uncluttered.</p></section>
      <section class="calendar-callout"><h2>What will I read if I follow this for a year?</h2><p>See every appointed Morning and Evening Prayer reading for the year.</p><button class="primary-link" id="openCalendar">View the annual lectionary →</button></section>
    </div>
  </section>`;
}

function calendarView() {
  const plan = getReadingPlan(state.readingPlan);
  const rows = getYearLectionary(state.calendarYear, state.readingPlan);
  const coverage = getYearCoverage(state.calendarYear, state.readingPlan);
  const body = rows.map(row => {
    const iso = isoLocal(row.date);
    return `<button class="calendar-row" data-calendar-date="${iso}" aria-label="Open ${esc(shortDate(row.date))}">
      <span class="calendar-date"><strong>${esc(shortDate(row.date))}</strong><small>${esc(row.label)}</small></span>
      <span class="calendar-reading"><em>Morning</em>${esc(lessonSummary(row.morning) || '—')}</span>
      <span class="calendar-reading"><em>Evening</em>${esc(lessonSummary(row.evening) || '—')}</span>
    </button>`;
  }).join('');
  return `<section class="calendar-page">
    <button class="back-link" id="calendarBack">← ${state.calendarReturn === 'about' ? 'About Pray1662' : 'Back to prayer'}</button>
    <div class="calendar-heading"><div><div class="eyebrow">Annual readings</div><h1>What will I read?</h1></div>
      <div class="year-nav"><button id="prevYear" aria-label="Previous year">←</button><strong>${state.calendarYear}</strong><button id="nextYear" aria-label="Next year">→</button></div>
    </div>
    <div class="calendar-plan-picker" role="radiogroup" aria-label="Lectionary or reading plan">${Object.values(readingPlans).map(p => `<button data-reading-plan="${p.id}" class="${state.readingPlan===p.id?'active':''}" ${p.available?'':'disabled'}>${esc(p.shortName)}</button>`).join('')}</div>
    <p class="calendar-plan-description"><strong>${esc(plan.name)}</strong> · ${esc(plan.description)}</p>
    <p class="coverage-summary">${state.readingPlan === 'mcheyne'
      ? `Following the M’Cheyne plan through ${state.calendarYear} covers <strong>${coverage.percent}% of the 66-book Bible’s chapters</strong>. The classic plan reads the Old Testament once and the New Testament and Psalms twice over the year.`
      : `Following Morning and Evening Prayer through ${state.calendarYear} will touch at least part of about <strong>${coverage.percent}% of the 66-book Bible’s chapters</strong> (${coverage.otPercent}% of Old Testament chapters and ${coverage.ntPercent}% of New Testament chapters)${coverage.includesApocrypha ? ', with additional readings from the Apocrypha where the 1662 lectionary appoints them' : ''}.`}</p>
    <div class="calendar-table-head" aria-hidden="true"><span>Date</span><span>Morning</span><span>Evening</span></div>
    <div class="calendar-list">${body}</div>
    <p class="calendar-note">Tap any date to open that day in Pray1662. Readings are generated from the same reading-plan data used by the daily Office.</p>
  </section>`;
}

function render() {
  applyTheme();
  const app = document.querySelector('#app');
  const office = buildOffice(state.date, state.office, state.readingPlan);
  const title = state.office === 'morning' ? 'Morning Prayer' : 'Evening Prayer';
  if (state.focusIndex >= office.items.length) state.focusIndex = 0;

  const main = state.mode === 'focus'
    ? focusCard(office.items[state.focusIndex], state.focusIndex, office.items.length)
    : `<section class="office-list">${overviewItems(office)}</section>`;

  if (state.view === 'about' || state.view === 'calendar') {
    app.innerHTML = `<div class="shell info-shell">
      <header class="topbar"><div class="brand">Pray 1662</div><div class="top-actions"><button class="menu-button" id="menuButton" aria-label="Open settings" aria-expanded="${state.menuOpen}">•••</button>${settingsMenu()}</div></header>
      ${state.view === 'about' ? aboutView() : calendarView()}
      <footer class="footer">1662 Daily Prayer · Scripture references only · Designed to be used with a physical Bible</footer>
    </div>`;
    return;
  }

  app.innerHTML = `<div class="shell ${state.mode==='focus'?'focus-shell':''}">
    <header class="topbar"><div class="brand">Pray 1662</div><div class="top-actions"><button class="menu-button" id="menuButton" aria-label="Open settings" aria-expanded="${state.menuOpen}">•••</button>${settingsMenu()}</div></header>
    <section class="hero compact">
      <div class="date-row">
        <button class="date-arrow" id="prevTop" aria-label="Previous day">←</button>
        <label class="date-centre"><span class="eyebrow">${formatDate(state.date)}</span><input class="datepick-top" id="datepick" type="date" value="${isoLocal(state.date)}" aria-label="Choose date" /></label>
        <button class="date-arrow" id="nextTop" aria-label="Next day">→</button>
      </div>
      <h1>${title}</h1><div class="sub">${liturgicalLabel(state.date)}</div><div class="reading-source">Readings · ${esc(getReadingPlan(state.readingPlan).shortName)}</div>
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

  if (btn.dataset.calendarDate) {
    const [y,m,d] = btn.dataset.calendarDate.split('-').map(Number);
    state.date = new Date(y, m - 1, d);
    state.calendarYear = y;
    state.view = 'office';
    state.mode = 'overview';
    state.focusIndex = 0;
    state.menuOpen = false;
    render();
    goTop();
    return;
  }

  if (btn.dataset.readingPlan) {
    const plan = getReadingPlan(btn.dataset.readingPlan);
    if (!plan.available) return;
    state.readingPlan = plan.id;
    state.focusIndex = 0;
    localStorage.setItem('pray1662-reading-plan', state.readingPlan);
    render();
    return;
  }

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
    case 'openAbout':
      state.view = 'about';
      state.menuOpen = false;
      render();
      goTop();
      break;
    case 'openCalendarDirect':
    case 'openCalendar':
      state.calendarReturn = btn.id === 'openCalendar' ? 'about' : state.view;
      state.calendarYear = state.date.getFullYear();
      state.view = 'calendar';
      state.menuOpen = false;
      render();
      goTop();
      break;
    case 'calendarBack':
      state.view = state.calendarReturn === 'about' ? 'about' : 'office';
      render();
      goTop();
      break;
    case 'backToOffice':
      state.view = 'office';
      render();
      goTop();
      break;
    case 'prevYear':
      state.calendarYear--;
      render();
      goTop();
      break;
    case 'nextYear':
      state.calendarYear++;
      render();
      goTop();
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
      state.calendarYear = state.date.getFullYear();
      state.view = 'office';
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
      const office = buildOffice(state.date, state.office, state.readingPlan);
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
  if (event.target.id === 'marginaliaToggle') {
    state.marginalia = event.target.checked;
    localStorage.setItem('pray1662-marginalia', String(state.marginalia));
    render();
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
