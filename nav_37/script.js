const navbar = document.getElementById('navbar');
const toggle = document.getElementById('menuButton');
const menu = document.getElementById('mobileMenu');
const feedback = document.getElementById('demo-feedback');
const mobile = window.matchMedia('(max-width: 900px)');
let open = false;

function render() {
  const expanded = mobile.matches && open;
  toggle.hidden = !mobile.matches;
  toggle.setAttribute('aria-expanded', String(expanded));
  toggle.setAttribute('aria-label', expanded ? 'Fermer le menu' : 'Ouvrir le menu');
  menu.hidden = mobile.matches && !expanded;
  menu.inert = menu.hidden;
}
function closeMenu({ restoreFocus = false } = {}) {
  open = false;
  render();
  if (restoreFocus && mobile.matches) toggle.focus();
}
navbar.classList.add('is-enhanced');
toggle.addEventListener('click', () => { open = !open; render(); });
navbar.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && open) {
    event.preventDefault();
    closeMenu({ restoreFocus: true });
  }
});
document.addEventListener('click', event => {
  if (mobile.matches && open && !navbar.contains(event.target)) closeMenu();
});
menu.addEventListener('click', event => {
  if (!(event.target instanceof Element)) return;
  const action = event.target.closest('[data-demo-action]');
  if (action) {
    feedback.textContent = action.dataset.demoAction === 'inscription'
      ? 'Démonstration : aucun compte n’a été créé.'
      : 'Démonstration : aucune connexion à un compte n’a été effectuée.';
    closeMenu({ restoreFocus: true });
    return;
  }
  const link = event.target.closest('a[href^="#"]');
  if (link) {
    closeMenu();
    if (mobile.matches) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll:true }); }
    }
  }
});
// Closing after keyboard focus leaves the navigation avoids an abandoned open panel.
navbar.addEventListener('focusout', () => {
  queueMicrotask(() => { if (mobile.matches && open && !navbar.contains(document.activeElement)) closeMenu(); });
});
mobile.addEventListener('change', () => {
  const active = document.activeElement;
  open = false;
  render();
  if (mobile.matches && menu.contains(active)) toggle.focus();
  else if (!mobile.matches && active === toggle) menu.querySelector('a')?.focus();
});
render();
