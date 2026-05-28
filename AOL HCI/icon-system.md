# Sistem Ikon — Migrasi dari Emoji ke Google Material Design Icons

---

## Alasan Perubahan

Pada initial design, NEXWEAR menggunakan emoji (🧥👜⌚🛒🏠) sebagai ikon di seluruh aplikasi. Berdasarkan evaluasi, ini menimbulkan beberapa masalah:

1. **Inkonsistensi visual** — emoji tampil berbeda di setiap OS/browser (Apple vs Android vs Windows)
2. **Kesan tidak profesional** — emoji diasosiasikan dengan chat/messaging, bukan e-commerce profesional
3. **Tidak scalable** — emoji tidak bisa di-style (warna, ukuran, stroke width)
4. **Accessibility** — screen reader membaca emoji secara literal

## Solusi: Google Material Design Icons

**Google Material Design Icons** (via `react-icons/md`) dipilih karena:
- Dibuat oleh Google — standar industri untuk UI/UX
- 2100+ ikon yang konsisten secara visual
- Familiar bagi pengguna Android (2+ miliar device)
- Tree-shakeable — hanya ikon yang diimport yang masuk bundle
- Filled style yang bold dan mudah dikenali di ukuran kecil
- Sumber: https://github.com/google/material-design-icons

## Mapping Ikon

### Bottom Navigation
| Sebelum (Emoji) | Sesudah (Material) | Komponen |
|-----------------|-------------------|----------|
| 🏠 | `MdHome` | Home |
| 🔍 | `MdSearch` | Cari |
| 🛒 | `MdShoppingCart` | Cart |
| 📋 | `MdReceipt` | Pesanan |
| 🏪 | `MdStorefront` | Jual |

### Header
| Sebelum | Sesudah | Fungsi |
|---------|---------|--------|
| 🛒 | `MdShoppingCart` | Cart icon |
| ❤️ | `MdFavoriteBorder` | Wishlist |
| 👤 | `MdPerson` | Profile |
| ★ | `MdStar` | Free Ongkir badge |

### Category Strip
| Sebelum | Sesudah | Kategori |
|---------|---------|----------|
| 🧥 | `MdCheckroom` | Out Wear |
| 👜 | `MdDiamond` | Accessory |
| ⌚ | `MdWatch` | Device |
| 🧣 | `MdContentCut` | Utility |
| 👗 | `MdCheckroom` | Clothing |
| 👠 | `MdDirectionsRun` | Shoes |
| 🛍️ | `MdInventory2` | Set |
| 🆕 | `MdAutoAwesome` | New Arrivals |
| 🏷️ | `MdLocalOffer` | Sale |

### Mini Banners (Promo)
| Sebelum | Sesudah | Promo |
|---------|---------|-------|
| 🎯 | `MdGpsFixed` | Cashback 25% |
| 🚀 | `MdLocalShipping` | Free Ongkir |
| 🏷️ | `MdFlashOn` | Flash Sale |
| 🏆 | `MdEmojiEvents` | Top Brand |

## Justifikasi HCI

- **Gestalt Principle of Similarity** — semua ikon memiliki style filled yang konsisten, memperkuat persepsi satu sistem visual
- **Nielsen's Heuristic #4 (Consistency and Standards)** — Material Design adalah standar yang dikenali 2+ miliar pengguna Android
- **Mental Model** — pengguna sudah familiar dengan ikon Material dari Google apps (Gmail, Maps, Play Store)
- **Norman's Signifier** — ikon filled yang bold lebih jelas sebagai signifier interaktif dibanding emoji
- **Color Theory** — ikon bisa diberi warna brand (cyan untuk navigasi, putih untuk aksi)

## Impact pada Bundle Size

| Metrik | Emoji (awal) | Material Design Icons (sekarang) |
|--------|-------|----------------------|
| Bundle JS (main) | 490 KB | 410 KB (code-split) |
| Total chunks | 1 file | 13 files |
| Initial gzip | ~134 KB | 120 KB |
| Visual consistency | ❌ Beda per OS | ✅ Identik semua platform |
| Customizability | ❌ Fixed | ✅ Size, color via props |
| Profesionalisme | ❌ Casual | ✅ Industry standard |
