# VOLTERRA — Sports Footwear E-Commerce Platform

> **High-Performance Kinetic Athletic Footwear & Marathon Telemetry Lab**  
> Direct implementation of **Stitch Project:** `projects/14893524336409495643`

---

## ⚡ Project Overview

**VOLTERRA** is an avant-garde sports footwear brand engineered for marathon speed and bio-mechanical precision. Built with a dark brutalist aesthetic, wind-tunnel laboratory telemetry, and vibrant electric volt (`#B8FF00`) accents.

This project is implemented as a **100% database-free static web application** using **HTML5, CSS3, JavaScript (ES6+), and PHP wrappers**, making it immediately ready for:
1. **GitHub Pages Deployment** (zero-configuration static hosting to share with clients for feedback)
2. **Local Apache / XAMPP Testing** (`http://localhost/FIR2/`)

---

## 📁 Architecture & File Structure

```
FIR2/
├── index.html            # Flagship Homepage ("Move Without Limits")
├── shop.html             # Men's Running Shoes Collection & Filter Grid
├── product.html          # Aero X1 Flagship PDP with Interactive Configurator
├── checkout.html         # 3-Step Expedited Checkout & Promo Validation
├── lookbook.html         # 2026 Editorial Wind Tunnel Archives & Speed Philosophy
├── locker.html           # Athlete Daniel Reynolds Hub, Rotation & Mileage Tracker
│
├── index.php             # PHP bridge for XAMPP
├── shop.php              # PHP bridge for XAMPP
├── product.php           # PHP bridge for XAMPP
├── checkout.php          # PHP bridge for XAMPP
├── lookbook.php          # PHP bridge for XAMPP
├── locker.php            # PHP bridge for XAMPP
│
├── assets/
│   ├── css/
│   │   └── style.css     # Core Design Tokens (Syne, Space Grotesk, Micro-radii)
│   ├── js/
│   │   ├── data.js       # Product catalog, tech telemetry, athlete profile
│   │   ├── cart.js       # LocalStorage shopping bag & drawer manager
│   │   └── main.js       # Header scroll, search modal, quick view, mobile nav
│   └── images/
│       ├── aero-x1.jpg       # Volterra Aero X1 Studio Product Photo
│       ├── stratos-pro.jpg   # Volterra Stratos Pro Studio Product Photo
│       └── kinetic-vectr.jpg # Volterra Kinetic Vectr Studio Product Photo
└── README.md
```

---

## 🌟 Key Interactive Features

1. **Slide-Out Shopping Bag Drawer**:
   - Stored in browser `localStorage` — items persist across all page views with zero backend/database.
   - Live quantity controls (`+` / `-`), instant item removal, and auto-calculating subtotals.
   - Dynamic **Free Express Telemetry Delivery** progress bar (threshold: $150).

2. **Rapid Size Selector on Hover**:
   - Hovering over any shoe card in the collection or homepage immediately reveals quick US size buttons (`US 7.0` to `US 12.0`) for one-tap bag addition.

3. **Multi-Angle PDP Gallery**:
   - Full product inspection for the **VOLTERRA AERO X1** ($195) with interactive angle switching, live colorway toggles, in-stock/sold-out sizing matrix, and accordion engineering specs.

4. **Interactive 3-Step Checkout Flow**:
   - Information ➔ Shipping Courier selection ➔ Biometric / Card payment.
   - Promo code validation (Enter `KINETIC10` for an instant 10% discount).
   - Generates an interactive order confirmation modal with simulated courier GPS tracking.

5. **Connected Athlete Locker**:
   - Daniel Reynolds (`#8841-OR`) profile with weekly mileage tracking (`82.4 KM`).
   - Active shoe rotation degradation monitor with a functional `+ 10 KM` workout logger that live-updates foam health.

---

## 🚀 How to Deploy to GitHub Pages (For Client Sharing)

1. Open your terminal in this directory (`c:\xampp\htdocs\FIR2`).
2. Initialize and push to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial release: VOLTERRA Sports Footwear E-Commerce"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/volterra-footwear.git
   git push -u origin main
   ```
3. On GitHub, go to your repository:
   - Click **Settings** ➔ **Pages** (under Code and automation).
   - Under **Build and deployment** ➔ **Branch**, select `main` and `/ (root)`.
   - Click **Save**.
4. Within 1 minute, GitHub Pages provides a live shareable URL:  
   `https://YOUR_USERNAME.github.io/volterra-footwear/`

---

## 💻 Local Testing via XAMPP

1. Ensure the Apache module in the **XAMPP Control Panel** is started.
2. Open your web browser and navigate to:
   ```
   http://localhost/FIR2/
   ```
3. You can access both `.html` or `.php` extensions seamlessly!
