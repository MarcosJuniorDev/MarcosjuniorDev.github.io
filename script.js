/**
 * Portfólio & Currículo Interativo - Marcos Junior Oliveira
 * Scripts de interação, filtros de perfil, clipboard e navegação
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProfileFilter();
  initClipboardButtons();
  initScrollSpy();
  initDynamicYear();
});

/* --- Navbar & Mobile Menu --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-links a');

  // Adiciona sombra e blur mais denso ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle mobile menu
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fecha menu ao clicar em qualquer item
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --- Filtro Interativo de Perfil (Todos / Java / Infra) --- */
function initProfileFilter() {
  const filterButtons = document.querySelectorAll('.switcher-btn');
  const categorizableItems = document.querySelectorAll('[data-category]');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Atualiza botões
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Atualiza elementos na tela
      categorizableItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filter === 'all') {
          item.classList.remove('filtered-out');
          item.classList.remove('filtered-dimmed');
        } else if (itemCategory === 'all' || itemCategory === filter) {
          item.classList.remove('filtered-out');
          item.classList.remove('filtered-dimmed');
        } else {
          // Itens de outra categoria ficam suavemente ocultos ou destacados
          // Para visual limpo no portfólio, adicionamos transição suave
          item.classList.add('filtered-out');
        }
      });
    });
  });
}

/* --- Botão Copiar com Toast Feedback --- */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback para navegadores legados ou contexto local
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        // Feedback no botão e no toast
        const originalText = btn.querySelector('span') ? btn.querySelector('span').textContent : '';
        if (btn.querySelector('span')) {
          btn.querySelector('span').textContent = 'Copiado!';
        }
        btn.style.borderColor = 'var(--accent-emerald)';

        showToast(`"${textToCopy}" copiado para a área de transferência!`);

        setTimeout(() => {
          if (btn.querySelector('span')) {
            btn.querySelector('span').textContent = originalText;
          }
          btn.style.borderColor = '';
        }, 2200);

      } catch (err) {
        showToast('Não foi possível copiar. Selecione o texto manualmente.');
      }
    });
  });
}

/* --- ScrollSpy (Ativa link da navbar conforme scroll) --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
}

/* --- Ano Dinâmico no Rodapé --- */
function initDynamicYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
