/* ==========================================================================
   VOLTERRA MAIN APPLICATION SCRIPT & 3D PARALLAX ENGINE
   Features:
   - 3D Interactive Card Tilt with Specular Glare Physics
   - Hero Multi-Layer Mouse Parallax
   - Scroll-Triggered Reveal Animations & Telemetry Counters
   - PDP 3D Viewport Orbit
   - Sticky Header, Modals & Cart Drawer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initSearchModal();
  initQuickViewModal();
  initNewsletter();
  init3DTilt();
  initHeroParallax();
  initScrollAnimations();
  initPdp3DView();
});

/* ==========================================================================
   1. 3D INTERACTIVE CARD TILT & SPECULAR GLARE
   ========================================================================== */
function init3DTilt() {
  const tiltElements = document.querySelectorAll('.product-card, .tech-spec-card, .hero-shoe-card, [data-tilt]');

  tiltElements.forEach(el => {
    // Inject dynamic glare overlay if not present
    let glare = el.querySelector('.card-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'card-glare';
      el.appendChild(glare);
    }

    const maxTilt = parseFloat(el.getAttribute('data-tilt-max')) || 12;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) - 0.5;
      const normY = (y / rect.height) - 0.5;

      const rotateY = normX * maxTilt;
      const rotateX = -normY * maxTilt;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Specular Glare calculation
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${(x / rect.width * 100).toFixed(1)}% ${(y / rect.height * 100).toFixed(1)}%, rgba(255, 255, 255, 0.16), transparent 60%)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      glare.style.opacity = '0';
      glare.style.transition = 'opacity 0.4s ease';

      setTimeout(() => {
        el.style.transition = '';
        glare.style.transition = '';
      }, 500);
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.1s ease-out';
    });
  });
}

/* ==========================================================================
   2. HERO MULTI-LAYER MOUSE PARALLAX
   ========================================================================== */
function initHeroParallax() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  const halo = heroSection.querySelector('.hero-halo');
  const shoeImg = heroSection.querySelector('.hero-shoe-img');
  const tagTop = heroSection.querySelector('.floating-tag-top');
  const tagBottom = heroSection.querySelector('.floating-tag-bottom');
  const heroContent = heroSection.querySelector('.hero-content');

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (halo) {
      halo.style.transform = `translate3d(${-x * 40}px, ${-y * 40}px, -50px) scale(1.1)`;
    }

    if (tagTop) {
      tagTop.style.transform = `translate3d(${x * 30}px, ${y * 30}px, 40px)`;
    }

    if (tagBottom) {
      tagBottom.style.transform = `translate3d(${-x * 35}px, ${-y * 35}px, 40px)`;
    }

    if (heroContent) {
      heroContent.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 20px)`;
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    if (halo) halo.style.transform = '';
    if (tagTop) tagTop.style.transform = '';
    if (tagBottom) tagBottom.style.transform = '';
    if (heroContent) heroContent.style.transform = '';
  });
}

/* ==========================================================================
   3. PDP 3D INTERACTIVE SHOE ORBIT VIEWPORT
   ========================================================================== */
function initPdp3DView() {
  const viewport = document.querySelector('.gallery-main-viewport');
  const mainImg = document.getElementById('pdpMainImg');
  if (!viewport || !mainImg) return;

  viewport.addEventListener('mousemove', (e) => {
    const rect = viewport.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotY = x * 22;
    const rotX = -y * 22;

    mainImg.style.transform = `translateZ(60px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.06)`;
    mainImg.style.filter = `drop-shadow(${-x * 30}px ${30 + y * 20}px 35px rgba(0, 0, 0, 0.85))`;
  });

  viewport.addEventListener('mouseleave', () => {
    mainImg.style.transform = 'translateZ(40px) rotateX(0deg) rotateY(0deg) scale(1)';
    mainImg.style.filter = 'drop-shadow(0 25px 30px rgba(0, 0, 0, 0.75))';
    mainImg.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease';
    setTimeout(() => {
      mainImg.style.transition = '';
    }, 500);
  });
}

/* ==========================================================================
   4. SCROLL REVEAL & TELEMETRY COUNTER ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  // Add reveal class to sections
  document.querySelectorAll('.section, .tech-spec-card, .product-card, .editorial-banner, .locker-hero').forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Animate counter values within
        entry.target.querySelectorAll('.counter-val').forEach(counter => {
          animateCounter(counter);
        });

        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.getAttribute('data-target'));
  const isPercent = el.getAttribute('data-is-pct') === 'true';
  const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
  const duration = 1600;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = (target * ease).toFixed(decimals);

    el.textContent = current + (isPercent ? '%' : '');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   5. STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   6. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.getElementById('mobileNavDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    toggleBtn.innerHTML = isOpen ? `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    ` : `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    `;
  });
}

/* ==========================================================================
   7. SEARCH MODAL WITH LIVE AUTOCOMPLETE
   ========================================================================== */
function initSearchModal() {
  const searchTriggers = document.querySelectorAll('.btn-search-trigger');
  const searchModal = document.getElementById('searchModalOverlay');
  const searchInput = document.getElementById('searchQueryInput');
  const searchResults = document.getElementById('searchResultsList');

  if (!searchModal) return;

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    });
  });

  const closeBtn = document.getElementById('searchModalClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      searchModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchResults.innerHTML = '<div style="color:var(--color-text-muted); font-size:0.875rem;">Type to search models, propulsion plates, or pace categories...</div>';
        return;
      }

      const matches = VOLTERRA_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<div style="color:var(--color-text-muted); font-size:0.875rem;">No performance models found for "${q}".</div>`;
      } else {
        searchResults.innerHTML = matches.map(p => `
          <a href="product.html?id=${p.id}" class="search-result-item" style="display:flex; align-items:center; gap:1rem; padding:0.75rem; border-bottom:1px solid var(--color-border); border-radius:var(--radius-sm); transition:background 0.2s;">
            <img src="${p.image}" alt="${p.name}" style="width:60px; height:45px; object-fit:contain; background:var(--bg-surface-2); border-radius:var(--radius-xs);">
            <div style="flex:1;">
              <div style="font-family:var(--font-display); font-weight:700; font-size:0.95rem;">${p.name}</div>
              <div style="font-size:0.75rem; color:var(--color-text-muted);">${p.category} • ${p.weight} • ${p.drop}</div>
            </div>
            <div style="font-family:var(--font-mono); font-weight:700; color:var(--color-primary);">$${p.price}</div>
          </a>
        `).join('');
      }
    });
  }
}

/* ==========================================================================
   8. QUICK VIEW MODAL
   ========================================================================== */
function initQuickViewModal() {
  window.openQuickView = function(productId) {
    const product = VOLTERRA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickViewModal');
    if (!modal) return;

    modal.querySelector('.qv-img').src = product.image;
    modal.querySelector('.qv-name').textContent = product.name;
    modal.querySelector('.qv-category').textContent = `${product.category} • ${product.weight}`;
    modal.querySelector('.qv-price').textContent = `$${product.price}`;
    modal.querySelector('.qv-desc').textContent = product.description;
    
    // Render sizes
    const sizesContainer = modal.querySelector('.qv-sizes');
    sizesContainer.innerHTML = product.sizes.map((s, idx) => `
      <button class="size-tile ${!s.stock ? 'out-of-stock' : ''} ${s.stock && idx === 0 ? 'selected' : ''}" 
              data-size="${s.us}" 
              ${!s.stock ? 'disabled' : ''}
              onclick="selectModalSize(this)">
        US ${s.us}
      </button>
    `).join('');

    // Setup Add to bag button
    const addBtn = modal.querySelector('.qv-add-btn');
    addBtn.onclick = () => {
      const selectedSizeEl = modal.querySelector('.size-tile.selected');
      const size = selectedSizeEl ? selectedSizeEl.getAttribute('data-size') : 'US 9.5';
      VOLTERRA_CART.addItem(product.id, `US ${size}`, product.colors[0].name, 1);
      closeQuickView();
    };

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.selectModalSize = function(btn) {
    if (btn.classList.contains('out-of-stock')) return;
    document.querySelectorAll('#quickViewModal .size-tile').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  };

  window.closeQuickView = function() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
}

/* ==========================================================================
   9. NEWSLETTER SUBSCRIPTION
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      VOLTERRA_CART.showToast(`Telemetry Drop alert registered for ${input.value}`);
      input.value = '';
    }
  });
}
