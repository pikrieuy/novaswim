# Sistem Ikon — Migrasi dari Emoji ke Lucide React

---

## Alasan Perubahan

Pada initial design, NEXWEAR menggunakan emoji (🧥👜⌚🛒🏠) sebagai ikon di seluruh aplikasi. Berdasarkan evaluasi, ini menimbulkan beberapa masalah:

1. **Inkonsistensi visual** — emoji tampil berbeda di setiap OS/browser (Apple vs Android vs Windows)
2. **Kesan tidak profesional** — emoji diasosiasikan dengan chat/messaging, bukan e-commerce profesional
3. **Tidak scalable** — emoji tidak bisa di-style (warna, ukuran, stroke width)
4. **Accessibility** — screen reader membaca emoji secara literal ("pile of poo" bukan "review")

## Solusi: Lucide React

**Lucide** (https://lucide.dev) dipilih karena:
- Open-source, community-maintained fork dari Feather Icons
- 1600+ ikon SVG yang konsisten secara visual
- Tree-shakeable — hanya ikon yang diimport yang masuk bundle
- Customizable: size, color, strokeWidth via props
- Accessible: proper SVG semantics

## Mapping Ikon

### Bottom Navigation
| Sebelum (Emoji) | Sesudah (Lucide) | Komponen |
|-----------------|------------------|----------|
| 🏠 | `<Home />` | Home |
| 🔍 | `<Search />` | Cari |
| 🛒 | `<ShoppingCart />` | Cart |
| 📋 | `<ClipboardList />` | Pesanan |
| 🏪 | `<Store />` | Jual |

### Header
| Sebelum | Sesudah | Fungsi |
|---------|---------|--------|
| 🛒 | `<ShoppingCart />` | Cart icon |
| ❤️ | `<Heart />` | Wishlist |
| 👤 | `<User />` | Profile |
| ★ | `<Star />` | Free Ongkir badge |

### Category Strip
| Sebelum | Sesudah | Kategori |
|---------|---------|----------|
| 🧥 | `<Shirt />` | Out Wear |
| 👜 | `<Gem />` | Accessory |
| ⌚ | `<Watch />` | Device |
| 🧣 | `<Scissors />` | Utility |
| 👗 | `<Shirt />` | Clothing |
| 👠 | `<Footprints />` | Shoes |
| 🛍️ | `<Package />` | Set |
| 🆕 | `<Sparkles />` | New Arrivals |
| 🏷️ | `<Tag />` | Sale |

### Mini Banners (Promo)
| Sebelum | Sesudah | Promo |
|---------|---------|-------|
| 🎯 | `<Target />` | Cashback 25% |
| 🚀 | `<Truck />` | Free Ongkir |
| 🏷️ | `<Zap />` | Flash Sale |
| 🏆 | `<Trophy />` | Top Brand |

## Justifikasi HCI

- **Gestalt Principle of Similarity** — semua ikon sekarang memiliki style yang konsisten (stroke-based, same weight), memperkuat persepsi bahwa mereka adalah satu sistem visual
- **Nielsen's Heuristic #4 (Consistency and Standards)** — ikon SVG konsisten di semua platform dan browser
- **Color Theory** — ikon bisa diberi warna brand (cyan untuk navigasi, putih untuk aksi) yang tidak mungkin dengan emoji
- **Norman's Signifier** — ikon SVG yang clean lebih jelas sebagai signifier interaktif dibanding emoji yang bisa terlihat dekoratif

## Impact pada Bundle Size

| Metrik | Sebelum | Sesudah |
|--------|---------|---------|
| Bundle JS | 490 KB | 501 KB |
| Tambahan | — | +11 KB (Lucide icons) |
| Visual consistency | ❌ Beda per OS | ✅ Identik semua platform |
| Customizability | ❌ Fixed | ✅ Size, color, stroke |

Penambahan 11KB sangat worth it untuk konsistensi visual dan profesionalisme.
