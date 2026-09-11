import { fixed } from '../data/liturgy.js';
import { contemporaryFixed } from '../data/contemporary-liturgy.js';

const STORAGE_KEY = 'pray1662-language';
const traditionalFixed = Object.fromEntries(
  Object.keys(contemporaryFixed).map(id => [id, JSON.parse(JSON.stringify(fixed[id]))])
);

function selectedLanguage() {
  return localStorage.getItem(STORAGE_KEY) === 'contemporary' ? 'contemporary' : 'traditional';
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function applyLanguage(language) {
  const contemporary = language === 'contemporary';
  for (const id of Object.keys(contemporaryFixed)) {
    fixed[id] = clone(contemporary ? contemporaryFixed[id] : traditionalFixed[id]);
  }
  document.documentElement.dataset.language = language;
}

function installLanguageControls() {
  const language = selectedLanguage();
  document.documentElement.dataset.language = language;

  const section = [...document.querySelectorAll('.menu-section')].find(item =>
    item.querySelector('.menu-label')?.textContent.trim() === 'Language'
  );
  if (!section) return;

  const segmented = section.querySelector('.segmented');
  if (segmented) {
    segmented.innerHTML = `
      <button type="button" data-language-toggle="traditional" class="${language === 'traditional' ? 'active' : ''}" aria-pressed="${language === 'traditional'}">1662</button>
      <button type="button" data-language-toggle="contemporary" class="${language === 'contemporary' ? 'active' : ''}" aria-pressed="${language === 'contemporary'}">Contemporary</button>`;
  }

  const note = section.querySelector('.menu-note');
  if (note) {
    note.textContent = language === 'contemporary'
      ? 'Contemporary Office text from An English Prayer Book (1994). Canticles and collects remain in 1662 wording where no supplied contemporary source is available.'
      : 'Original 1662 Prayer Book language.';
  }
}

function rerenderCurrentMode() {
  const activeMode = document.querySelector('.mode-switch [data-mode].active');
  if (activeMode) activeMode.click();
  else window.location.reload();
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-language-toggle]');
  if (!button) return;
  const language = button.dataset.languageToggle === 'contemporary' ? 'contemporary' : 'traditional';
  if (language === selectedLanguage()) return;
  localStorage.setItem(STORAGE_KEY, language);
  applyLanguage(language);
  rerenderCurrentMode();
});

const app = document.querySelector('#app');
if (app) {
  const observer = new MutationObserver(installLanguageControls);
  observer.observe(app, { childList:true });
}

const initialLanguage = selectedLanguage();
applyLanguage(initialLanguage);
if (initialLanguage === 'contemporary') rerenderCurrentMode();
else installLanguageControls();
