// ─────────────────────────────────────────
//  src/data/products.js
//  Semua data produk default & konstanta UI
// ─────────────────────────────────────────

export const INITIAL_PRODUCTS = [
  { id:"p1", name:"Nebula Bikini Set",  emoji:"🌸", bg:"linear-gradient(135deg,#0d0020,#3d0080,#ff2d78)", price:449000, oldPrice:599000, sold:"1.2rb", rating:5, badgeClass:"pcb-new",  badgeText:"NEW",  cat:"bikini",   desc:"Set bikini premium dengan motif nebula galaktik. Bahan nano-fabric UV SPF 50+, elastis, cepat kering, cocok untuk semua aktivitas pantai.", bonus:[], reviews:[], flash:true  },
  { id:"p2", name:"Ocean Byte Set",     emoji:"🌊", bg:"linear-gradient(135deg,#001530,#004060,#00f5ff)", price:529000, oldPrice:0,      sold:"2.4rb", rating:5, badgeClass:"pcb-hot",  badgeText:"HOT",  cat:"onepiece", desc:"One piece elegan dengan motif ombak laut digital. Anti-klorin dan anti-UV, dirancang untuk perenang profesional.", bonus:[], reviews:[], flash:true  },
  { id:"p3", name:"Thunder Pixel",      emoji:"⚡", bg:"linear-gradient(135deg,#0d0020,#5500aa,#ffe500)", price:239000, oldPrice:479000, sold:"3.1rb", rating:4, badgeClass:"pcb-sale", badgeText:"-50%", cat:"bottoms",  desc:"Bottoms edisi kilat dengan warna pixel art kuning-ungu. Tali adjustable, bahan stretch 4 arah.", bonus:[], reviews:[], flash:true  },
  { id:"p4", name:"Dark Matter Set",    emoji:"🌹", bg:"linear-gradient(135deg,#0a0000,#800020,#ff2d78)", price:399000, oldPrice:649000, sold:"892",   rating:5, badgeClass:"pcb-hot",  badgeText:"HOT",  cat:"bikini",   desc:"Set bikini misterius dengan gradasi merah tua ke neon pink. Tampil bold dan berani di pantai.", bonus:[], reviews:[], flash:false },
  { id:"p5", name:"Aurora Wave",        emoji:"🌿", bg:"linear-gradient(135deg,#002010,#007050,#00f5c8)", price:509000, oldPrice:0,      sold:"634",   rating:5, badgeClass:"pcb-new",  badgeText:"NEW",  cat:"onepiece", desc:"One piece inspired by aurora borealis. Warna hijau toska berkilau, bahan eco-friendly recycled nylon.", bonus:[], reviews:[], flash:false },
  { id:"p6", name:"Hologram Cyber",     emoji:"🦋", bg:"linear-gradient(135deg,#100020,#5500aa,#ff88ff)", price:569000, oldPrice:0,      sold:"412",   rating:4, badgeClass:"pcb-hot",  badgeText:"HOT",  cat:"bikini",   desc:"Koleksi hologram eksklusif dengan efek shimmer 3D. Tampil futuristik dengan pola kupu-kupu digital.", bonus:[], reviews:[], flash:false },
  { id:"p7", name:"Galaxy Portal",      emoji:"🔮", bg:"linear-gradient(135deg,#001030,#0066ff,#00f5ff)", price:314000, oldPrice:699000, sold:"1.8rb", rating:5, badgeClass:"pcb-sale", badgeText:"-55%", cat:"bundle",   desc:"Bundle lengkap Galaxy Portal: bikini top + bottom + cover-up. Warna biru galaksi yang memesona.", bonus:[], reviews:[], flash:true  },
  { id:"p8", name:"Pixel Storm",        emoji:"🎮", bg:"linear-gradient(135deg,#0a0020,#004080,#ff00aa)", price:389000, oldPrice:0,      sold:"756",   rating:4, badgeClass:"pcb-new",  badgeText:"NEW",  cat:"bottoms",  desc:"Bottoms edisi game pixel art dengan motif 8-bit storm. Perpaduan biru dan pink yang eye-catching.", bonus:[], reviews:[], flash:false },
];

export const CATEGORY_MAP = {
  galaxy:      { title:"KOLEKSI",  span:"GALAXY SET",   cat:"bundle"   },
  bikini:      { title:"KOLEKSI",  span:"BIKINI",        cat:"bikini"   },
  onepiece:    { title:"KOLEKSI",  span:"ONE PIECE",     cat:"onepiece" },
  bottoms:     { title:"KOLEKSI",  span:"BOTTOMS",       cat:"bottoms"  },
  bundle:      { title:"KOLEKSI",  span:"BUNDLE",        cat:"bundle"   },
  newarrivals: { title:"",         span:"NEW ARRIVALS",  cat:"all"      },
  sale:        { title:"",         span:"SALE & PROMO",  cat:"all"      },
};

export const NAV_TABS = [
  { page:"home",        label:"🏠 BERANDA"      },
  { page:"flash",       label:"⚡ FLASH SALE"   },
  { page:"galaxy",      label:"🌌 GALAXY SET"   },
  { page:"bikini",      label:"👙 BIKINI"       },
  { page:"onepiece",    label:"🩱 ONE PIECE"    },
  { page:"bottoms",     label:"🌊 BOTTOMS"      },
  { page:"bundle",      label:"🎁 BUNDLE"       },
  { page:"newarrivals", label:"🆕 NEW ARRIVALS" },
  { page:"sale",        label:"🏷️ SALE"         },
  { page:"seller",      label:"📦 JUAL"         },
];

export const CAT_ITEMS = [
  { icon:"👙", label:"BIKINI SET",  page:"bikini"   },
  { icon:"🩱", label:"ONE PIECE",   page:"onepiece" },
  { icon:"🩲", label:"BOTTOMS",     page:"bottoms"  },
  { icon:"🌊", label:"SURF WEAR",   page:null       },
  { icon:"🧴", label:"AKSESORIS",   page:null       },
  { icon:"🕶️", label:"KACAMATA",    page:null       },
  { icon:"🌂", label:"COVER UP",    page:null       },
  { icon:"💄", label:"BEAUTY SET",  page:null       },
  { icon:"📦", label:"BUNDLE",      page:"bundle"   },
  { icon:"🎀", label:"GIFT BOX",    page:null       },
];

export const BG_OPTIONS = [
  { value:"linear-gradient(135deg,#0d0020,#3d0080,#ff2d78)", label:"🌸 Neon Pink"      },
  { value:"linear-gradient(135deg,#001530,#004060,#00f5ff)", label:"🌊 Ocean Cyan"     },
  { value:"linear-gradient(135deg,#100020,#5500aa,#ff88ff)", label:"🦋 Cyber Purple"   },
  { value:"linear-gradient(135deg,#0d0020,#5500aa,#ffe500)", label:"⚡ Thunder Yellow" },
  { value:"linear-gradient(135deg,#002010,#007050,#00f5c8)", label:"🌿 Aurora Green"   },
  { value:"linear-gradient(135deg,#0a0000,#800020,#ff2d78)", label:"🌹 Dark Rose"      },
];

export const BADGE_OPTIONS = [
  { value:"pcb-new|NEW",   label:"🆕 NEW"  },
  { value:"pcb-hot|HOT",   label:"🔥 HOT"  },
  { value:"pcb-sale|SALE", label:"🏷️ SALE" },
];

export const PROVINCES = [
  "DKI Jakarta","Jawa Barat","Jawa Tengah","Jawa Timur",
  "Bali","Sumatera Utara","Sulawesi Selatan","Kalimantan Timur",
];

export const COUPONS = {
  NOVA20:  0.20,
  PIXEL50: 0.10,
  CYBER15: 0.15,
};

export const DEFAULT_ADDRESSES = [
  { id:"a1", name:"Nova User",   phone:"+62 812-3456-7890", street:"Jl. Galaxy No. 77",         city:"Bandung", postal:"40132", prov:"Jawa Barat"  },
  { id:"a2", name:"Nova User 2", phone:"+62 813-9876-5432", street:"Jl. Pixel Blok C No. 12",   city:"Jakarta", postal:"12345", prov:"DKI Jakarta" },
];
