const STORAGE_KEY = 'pray1662-lite';

function liteEnabled() {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

function installLiteControls() {
  const modeSwitch = document.querySelector('.mode-switch');
  if (!modeSwitch) return;

  const enabled = liteEnabled();
  let button = modeSwitch.querySelector('[data-lite-toggle]');
  if (!button) {
    button = document.createElement('button');
    button.type = 'button';
    button.dataset.liteToggle = 'true';
    button.textContent = 'Lite';
    button.setAttribute('aria-label', 'Toggle Lite Office');
    modeSwitch.append(button);
  }
  button.classList.toggle('active', enabled);
  button.setAttribute('aria-pressed', String(enabled));

  const readingSource = document.querySelector('.reading-source');
  if (!readingSource) return;

  const note = document.querySelector('.lite-description');
  if (enabled && !note) {
    const newNote = document.createElement('div');
    newNote.className = 'reading-source lite-description';
    newNote.textContent = 'Lite · shortened devotional form';
    readingSource.insertAdjacentElement('afterend', newNote);
  } else if (!enabled && note) {
    note.remove();
  }
}

function rerenderCurrentMode() {
  const activeMode = document.querySelector('.mode-switch [data-mode].active');
  activeMode?.click();
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-lite-toggle]');
  if (!button) return;

  const next = !liteEnabled();
  localStorage.setItem(STORAGE_KEY, String(next));
  rerenderCurrentMode();
});

const observer = new MutationObserver(installLiteControls);
observer.observe(document.querySelector('#app'), { childList:true, subtree:true });
installLiteControls();
