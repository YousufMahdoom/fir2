/* ==========================================================================
   VOLTERRA CART SYSTEM (LOCALSTORAGE BACKED)
   ========================================================================== */

const VOLTERRA_CART = {
  storageKey: 'volterra_cart_v1',
  freeShippingThreshold: 150,

  getItems() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        // Initial sample items for immediate rich interactive client demonstration
        const initial = [
          {
            id: 'aero-x1',
            name: 'VOLTERRA AERO X1',
            price: 195,
            size: 'US 9.5',
            color: 'Volt / Onyx',
            image: 'assets/images/aero-x1.jpg',
            quantity: 1
          }
        ];
        this.saveItems(initial);
        return initial;
      }
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.updateCartUI();
  },

  addItem(productId, size = 'US 9.5', colorName = 'Volt / Onyx', qty = 1) {
    const product = VOLTERRA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const items = this.getItems();
    const existingIndex = items.findIndex(
      i => i.id === productId && i.size === size && i.color === colorName
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += qty;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        size: size,
        color: colorName,
        image: product.image,
        quantity: qty
      });
    }

    this.saveItems(items);
    this.showToast(`Added ${product.name} (${size}) to Shopping Bag`);
    this.openDrawer();
  },

  removeItem(index) {
    const items = this.getItems();
    if (index >= 0 && index < items.length) {
      const removed = items.splice(index, 1);
      this.saveItems(items);
      if (removed[0]) {
        this.showToast(`Removed ${removed[0].name} from bag`);
      }
    }
  },

  updateQty(index, delta) {
    const items = this.getItems();
    if (items[index]) {
      items[index].quantity += delta;
      if (items[index].quantity <= 0) {
        items.splice(index, 1);
      }
      this.saveItems(items);
    }
  },

  getSubtotal() {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  openDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      this.renderDrawer();
    }
  },

  closeDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  },

  renderDrawer() {
    const container = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotalVal');
    const totalEl = document.getElementById('cartTotalVal');
    const shippingBarEl = document.getElementById('freeShippingBar');
    const shippingTextEl = document.getElementById('freeShippingText');

    if (!container) return;

    const items = this.getItems();
    const subtotal = this.getSubtotal();
    const count = this.getCount();

    // Update header count
    const headerTitle = document.getElementById('cartDrawerTitle');
    if (headerTitle) {
      headerTitle.textContent = `SHOPPING BAG (${count})`;
    }

    // Shipping progress
    if (shippingBarEl && shippingTextEl) {
      const remaining = Math.max(0, this.freeShippingThreshold - subtotal);
      if (remaining === 0) {
        shippingBarEl.style.width = '100%';
        shippingTextEl.innerHTML = `<span style="color:var(--color-primary); font-weight:700;">✓ UNLOCKED:</span> Complimentary Express Priority Delivery`;
      } else {
        const pct = Math.min(100, Math.round((subtotal / this.freeShippingThreshold) * 100));
        shippingBarEl.style.width = `${pct}%`;
        shippingTextEl.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> for Free Express Telemetry Shipping`;
      }
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <div class="headline-sm">YOUR BAG IS EMPTY</div>
          <p class="body-sm">Explore our race-primed speed collection.</p>
          <a href="shop.html" class="btn btn-primary btn-sm" onclick="VOLTERRA_CART.closeDrawer()">EXPLORE COLLECTION</a>
        </div>
      `;
    } else {
      container.innerHTML = items.map((item, idx) => `
        <div class="cart-item">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-meta">${item.color} • ${item.size}</div>
            <div class="qty-control">
              <button class="qty-btn" onclick="VOLTERRA_CART.updateQty(${idx}, -1)" title="Decrease">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="VOLTERRA_CART.updateQty(${idx}, 1)" title="Increase">+</button>
            </div>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
            <div style="font-family: var(--font-mono); font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="cart-item-remove" onclick="VOLTERRA_CART.removeItem(${idx})" title="Remove item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      `).join('');
    }

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
  },

  updateCartUI() {
    const count = this.getCount();
    document.querySelectorAll('.cart-count-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
    this.renderDrawer();
  },

  showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="badge-dot"></span>
      <span style="font-family: var(--font-mono); font-size: 0.8125rem;">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  VOLTERRA_CART.updateCartUI();

  // Close drawer when clicking backdrop or X
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        VOLTERRA_CART.closeDrawer();
      }
    });
  }

  const closeBtn = document.getElementById('cartDrawerClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      VOLTERRA_CART.closeDrawer();
    });
  }

  // Trigger buttons
  document.querySelectorAll('.btn-cart-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      VOLTERRA_CART.openDrawer();
    });
  });
});
