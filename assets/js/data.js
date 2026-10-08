/* ==========================================================================
   VOLTERRA DATA STORE & PRODUCT CATALOG
   ========================================================================== */

const VOLTERRA_PRODUCTS = [
  {
    id: "aero-x1",
    name: "VOLTERRA AERO X1",
    tagline: "Bred for the fastest 42.195km on asphalt",
    category: "Road Racing",
    gender: "Men",
    price: 195,
    drop: "DROP 004",
    weight: "195g",
    stackHeight: "39.5mm / 31.5mm (8mm drop)",
    rebound: "88.4%",
    badge: "FLAGSHIP",
    badgeType: "volt",
    image: "assets/images/aero-x1.jpg",
    gallery: [
      "assets/images/aero-x1.jpg",
      "assets/images/aero-x1.jpg",
      "assets/images/stratos-pro.jpg",
      "assets/images/kinetic-vectr.jpg"
    ],
    colors: [
      { name: "Volt / Onyx", hex: "#b8ff00", bg: "#121418" },
      { name: "Stealth Void", hex: "#1a1b20", bg: "#0b0c10" },
      { name: "Optic Titanium", hex: "#e1e2e4", bg: "#f7f8fa" }
    ],
    sizes: [
      { us: "7.0", stock: true },
      { us: "7.5", stock: true },
      { us: "8.0", stock: true },
      { us: "8.5", stock: true },
      { us: "9.0", stock: true },
      { us: "9.5", stock: true },
      { us: "10.0", stock: true },
      { us: "10.5", stock: true },
      { us: "11.0", stock: true },
      { us: "11.5", stock: false },
      { us: "12.0", stock: true },
      { us: "13.0", stock: false }
    ],
    specs: {
      chassis: "Full-Length S-Curved 3K Carbon Fiber Plate with Forked Forefoot",
      foam: "V-NITRO Dual-Density Supercritical PEBA Foam",
      upper: "AeroWeave Monofilament Micro-Mesh with Bio-Lock Lateral Ribs",
      outsole: "Laser-Siped Hydro-Traction Rubber (1.2mm ultralight gauge)",
      certified: "World Athletics Approved for Competition Road Racing"
    },
    description: "The VOLTERRA AERO X1 is engineered in the wind tunnel and validated across sub-2:05 marathon paces. Featuring our proprietary S-Curved 3K carbon plate flanked by ultra-responsive V-NITRO supercritical foam, it provides explosive energy return without sacrificing rotational stability on tight course turns.",
    rating: 4.9,
    reviewsCount: 128
  },
  {
    id: "stratos-pro",
    name: "VOLTERRA STRATOS PRO",
    tagline: "High-mileage propulsion with frictionless cushioning",
    category: "Daily Trainer",
    gender: "Men",
    price: 220,
    drop: "DROP 003",
    weight: "240g",
    stackHeight: "41.0mm / 33.0mm (8mm drop)",
    rebound: "84.2%",
    badge: "MAX CUSHION",
    badgeType: "default",
    image: "assets/images/stratos-pro.jpg",
    gallery: [
      "assets/images/stratos-pro.jpg",
      "assets/images/aero-x1.jpg",
      "assets/images/kinetic-vectr.jpg"
    ],
    colors: [
      { name: "Optic White / Volt", hex: "#ffffff", bg: "#f0f2f5" },
      { name: "Titanium Slate", hex: "#8a909e", bg: "#181a20" }
    ],
    sizes: [
      { us: "7.5", stock: true },
      { us: "8.0", stock: true },
      { us: "8.5", stock: true },
      { us: "9.0", stock: true },
      { us: "9.5", stock: true },
      { us: "10.0", stock: true },
      { us: "10.5", stock: true },
      { us: "11.0", stock: true },
      { us: "11.5", stock: true },
      { us: "12.0", stock: true }
    ],
    specs: {
      chassis: "Kinetic Composite Midfoot Torsion Shank",
      foam: "Cloud-Nitro Nitrogen-Infused TPU Core",
      upper: "Engineered Jacquard Knit with Adaptive Gusseted Tongue",
      outsole: "DuraGrip High-Abrasion Rubber"
    },
    description: "Designed for high-mileage blocks and threshold long runs, the STRATOS PRO isolates repetitive impact shock while channeling mechanical energy forward through a progressive rocker geometry.",
    rating: 4.8,
    reviewsCount: 94
  },
  {
    id: "kinetic-vectr",
    name: "VOLTERRA KINETIC VECTR",
    tagline: "Sharp, aggressive transition for interval & tempo sessions",
    category: "Tempo & Track",
    gender: "Men",
    price: 180,
    drop: "DROP 004",
    weight: "210g",
    stackHeight: "35.0mm / 29.0mm (6mm drop)",
    rebound: "86.7%",
    badge: "SPEED DAY",
    badgeType: "volt",
    image: "assets/images/kinetic-vectr.jpg",
    gallery: [
      "assets/images/kinetic-vectr.jpg",
      "assets/images/aero-x1.jpg",
      "assets/images/stratos-pro.jpg"
    ],
    colors: [
      { name: "Triple Stealth / Volt", hex: "#121418", bg: "#000000" },
      { name: "Cyan Spark", hex: "#00f0ff", bg: "#0b1f3a" }
    ],
    sizes: [
      { us: "7.0", stock: true },
      { us: "8.0", stock: true },
      { us: "8.5", stock: true },
      { us: "9.0", stock: true },
      { us: "9.5", stock: true },
      { us: "10.0", stock: true },
      { us: "10.5", stock: true },
      { us: "11.0", stock: true },
      { us: "12.0", stock: false }
    ],
    specs: {
      chassis: "Twin Carbon Propulsion Rods",
      foam: "V-NITRO Sprint Formulation",
      upper: "Featherweight Micro-Ripstop",
      outsole: "Segmented Kinetic Traction Pods"
    },
    description: "The weapon of choice for 5K to half-marathon race efforts and track repeats. Features decoupled propulsion pods that grip asphalt instantly with zero toe-off lag.",
    rating: 4.9,
    reviewsCount: 76
  },
  {
    id: "apex-proto",
    name: "VOLTERRA APEX PROTO-01",
    tagline: "Experimental 3D-lattice carbon skeleton laboratory prototype",
    category: "Experimental Lab",
    gender: "Unisex",
    price: 260,
    drop: "LIMITED (250 PRS)",
    weight: "172g",
    stackHeight: "38.0mm / 30.0mm (8mm drop)",
    rebound: "91.2%",
    badge: "FACTORY LAB",
    badgeType: "volt",
    image: "assets/images/aero-x1.jpg",
    gallery: [
      "assets/images/aero-x1.jpg",
      "assets/images/kinetic-vectr.jpg"
    ],
    colors: [
      { name: "Raw Forged Carbon / Lime", hex: "#b8ff00", bg: "#16181d" }
    ],
    sizes: [
      { us: "8.0", stock: true },
      { us: "9.0", stock: true },
      { us: "9.5", stock: true },
      { us: "10.0", stock: false },
      { us: "11.0", stock: true }
    ],
    specs: {
      chassis: "Generative 3D-Printed Titanium & Carbon Truss Chassis",
      foam: "Experimental High-Recovery Aerogel Matrix",
      upper: "Seamless Monofilament Bio-Mesh",
      outsole: "Electro-Deposited Liquid Traction Film"
    },
    description: "Handcrafted in the VOLTERRA Bio-Dynamics Laboratory in Bologna. A limited conceptual production run testing extreme structural lightness and unconstrained kinetic return.",
    rating: 5.0,
    reviewsCount: 22
  }
];

const ATHLETE_PROFILE = {
  name: "Daniel Reynolds",
  id: "#8841-OR",
  tier: "Tier 2 Pro Runner",
  score: 840,
  maxScore: 1000,
  avatar: "assets/images/daniel.jpg",
  metrics: {
    weeklyMileage: "82.4 km",
    paceAverage: "3:34 /km",
    elevationGain: "1,240 m"
  },
  rotation: [
    {
      shoeId: "aero-x1",
      name: "Volterra Aero X1 (Volt/Onyx)",
      currentKm: 312,
      maxKm: 600,
      status: "Active - Race Primed",
      health: 52
    },
    {
      shoeId: "stratos-pro",
      name: "Volterra Stratos Pro (Optic White)",
      currentKm: 145,
      maxKm: 800,
      status: "Peak Cushion Condition",
      health: 82
    },
    {
      shoeId: "kinetic-vectr",
      name: "Volterra Kinetic Vectr (Stealth)",
      currentKm: 468,
      maxKm: 500,
      status: "Replace Soon (Track Only)",
      health: 22
    }
  ],
  orders: [
    {
      orderId: "VOLT-89421-VX",
      date: "October 6, 2026",
      items: "Volterra Aero X1 (US 9.5) + Aero Crew Sock 3PK",
      total: "$217.74",
      status: "In Transit - Priority Biometric Courier",
      eta: "Tomorrow, 14:00"
    },
    {
      orderId: "VOLT-74190-KL",
      date: "August 18, 2026",
      items: "Volterra Stratos Pro (US 9.5)",
      total: "$220.00",
      status: "Delivered",
      eta: "Completed"
    }
  ]
};
