const STORAGE_KEY = 'pray1662-lite';

function liteEnabled() {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

function installLiteControls() {
  const modeSwitch = document.querySelector('.mode-switch');
  if (!modeSwitch) return;

  if (!modeSwitch.querySelector('[data-lite-toggle]')) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.liteToggle = 'true';
    button.textContent = 'Lite';
    button.classList.toggle('active', liteEnabled());
    button.setAttribute('aria-pressed', String(liteEnabled()));
    button.setAttribute('aria-label', 'Toggle Lite Office');
    modeSwitch.append(button);
  }

  const readingSource = document.querySelector('.reading-source');
  if (!readingSource) return;

  document.querySelector('.lite-description')?.remove();
  if (liteEnabled()) {
    const note = document.createElement('div');
    note.className = 'reading-source lite-description';
    note.textContent = 'Lite · shortened devotional form';
    readingSource.insertAdjacentElement('afterend', note);
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
  button.classList.toggle('active', next);
  button.setAttribute('aria-pressed', String(next));
  rerenderCurrentMode();
});

const observer = new MutationObserver(installLiteControls);
observer.observe(document.querySelector('#app'), { childList:true, subtree:true });
installLiteControls();
