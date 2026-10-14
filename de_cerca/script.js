// Menú móvil: abre y cierra la navegación en pantallas chicas.
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
  }
})();

// Newsletter: valida el correo y confirma en pantalla (demo, sin envío real).
(function () {
  var form = document.getElementById('newsletter-form');
  if (!form) return;
  var email = document.getElementById('newsletter-email');
  var msg = document.getElementById('newsletter-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = (email.value || '').trim();
    var valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!valido) {
      msg.textContent = 'Ingresá un correo válido.';
      msg.classList.add('is-error');
      email.focus();
      return;
    }

    msg.textContent = '¡Listo! Te sumaste a De cerca.';
    msg.classList.remove('is-error');
    form.reset();
  });
})();