// ============================================================
// MAIN.JS — Core interactions
// ============================================================

// ── Render Projects from data.js ──
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !projects) return;

  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <div class="project-icon">${p.icon}</div>
      <div>
        <div class="project-title">${p.title}</div>
        <div style="font-size:0.8rem;color:var(--text-muted);font-family:var(--font-mono);margin-top:2px;">${p.subtitle}</div>
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
        ${p.live   ? `<a href="${p.live}" target="_blank"><i class="fa fa-external-link-alt"></i> Live Demo</a>` : ''}
      </div>
    </div>
  `).join('');

  // Re-observe new cards
  observeReveal();
}

// ── Scroll-reveal ──
function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ── Sticky nav shadow ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Contact form (replace ACTION_URL with your Formspree URL) ──
// To enable: go to https://formspree.io, create a free form, copy the URL below
const FORMSPREE_URL = 'https://formspree.io/f/xgoqdoyq'; // e.g. https://formspree.io/f/abcdefgh

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');

    if (!FORMSPREE_URL) {
      btn.textContent = '⚠ Set FORMSPREE_URL in main.js';
      setTimeout(() => btn.textContent = 'Send Message', 2500);
      return;
    }

    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const data = new FormData(contactForm);
      const res  = await fetch(FORMSPREE_URL, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) {
        btn.textContent = '✓ Message Sent!';
        contactForm.reset();
      } else {
        btn.textContent = 'Error — try again';
      }
    } catch {
      btn.textContent = 'Error — try again';
    } finally {
      btn.disabled = false;
      setTimeout(() => btn.textContent = 'Send Message', 3000);
    }
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  observeReveal();

  // Add reveal class to static sections
  document.querySelectorAll('.about-text, .about-stats, .skill-group, .timeline-item, .stat-card').forEach(el => {
    el.classList.add('reveal');
  });
  observeReveal();
});
