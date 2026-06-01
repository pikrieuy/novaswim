# OUTLINE PPT — NEXWEAR HCI AOL
## Human and Computer Interaction (COMP6846031)
### Assessment of Learning — Review II

---

## SLIDE 1 — COVER

**NEXWEAR**
*Cyberpunk Fashion E-Commerce*

Human and Computer Interaction
BINUS University Bandung — Genap 2025/2026

[Nama Kelompok]
[NIM]

---

## SLIDE 2 — DESKRIPSI APLIKASI

**Apa itu NEXWEAR?**

- Platform e-commerce fashion bertema **cyberpunk/futuristik**
- Dual-role: pengguna bisa **belanja sekaligus berjualan**
- Dibangun dengan React 19 + Supabase + Vercel
- Live di: nexwear-store.vercel.app

**Masalah yang diselesaikan:**
- Marketplace konvensional terlalu generik (Shopee, Tokopedia)
- Tidak ada platform khusus untuk komunitas streetwear/cyberpunk
- UMKM fashion kesulitan berjualan online

> 💡 *Gunakan screenshot homepage sebagai background slide*

---

## SLIDE 3 — TARGET USER

**2 User Persona**

| | Persona 1 | Persona 2 |
|---|---|---|
| **Nama** | Raka Aditya | Sinta Maharani |
| **Usia** | 21 tahun | 25 tahun |
| **Pekerjaan** | Mahasiswa DKV | Content Creator |
| **Goals** | Fashion unik & affordable | Berjualan + konten |
| **Frustrasi** | E-commerce generik | Platform seller rumit |

**Demografis:** Gen Z & Milenial, 17–30 tahun, urban Indonesia, mobile-first

---

## SLIDE 4 — FITUR UTAMA

**6 Kategori Fitur:**

1. 🔐 **Autentikasi** — Login/Register via Supabase Auth
2. 🔍 **Browsing** — 9 kategori, search autocomplete, filter & sort
3. 🛍️ **Detail Produk** — Gallery, size selector, color selector, review, share
4. 💳 **Checkout** — 4 langkah: Cart → Alamat → Bayar → Sukses
5. ❤️ **Wishlist** — Simpan produk favorit (sync Supabase)
6. 🏪 **Seller Center** — Dashboard, CRUD produk, upload gambar

> 💡 *Tampilkan screenshot product grid dan detail page*

---

## SLIDE 5 — INITIAL UI DESIGN

**Halaman-halaman Utama:**

| Halaman | Fungsi |
|---------|--------|
| Auth Page | Login & Register |
| Home Page | Hero carousel, kategori, product grid |
| Detail Page | Info produk lengkap |
| Cart → Checkout | Alur pembelian 4 langkah |
| Seller Center | Dashboard penjual |
| Wishlist | Produk favorit |

**Prinsip HCI yang diterapkan:**
- Nielsen's Heuristics #1, #3, #4, #7
- Norman's Affordance & Feedback
- Gestalt Proximity & Similarity
- Fitts' Law (bottom nav, CTA full-width)

> 💡 *Tampilkan grid screenshot semua halaman*

---

## SLIDE 6 — DATA GATHERING

**Kombinasi 2 Teknik:**

### Kuesioner SUS (System Usability Scale)
- 8 responden, 10 pertanyaan standar + 5 spesifik
- **Skor rata-rata: 76.6 / 100** (Acceptable)
- Tertinggi: R3 = 90 | Terendah: R7 = 50

### Wawancara Semi-Terstruktur
- 10 pertanyaan, 2 transkrip lengkap
- Responden: Dina (Mhs Bisnis) & Galih (Software Engineer)

**Mengapa kombinasi?**
- SUS → data kuantitatif (skor objektif)
- Wawancara → data kualitatif (alasan & konteks)

> 💡 *Tampilkan tabel skor SUS dan bar chart*

---

## SLIDE 7 — TEMUAN UTAMA

**7 Temuan dari Testing:**

| # | Temuan | Severity | Status |
|---|--------|----------|--------|
| 1 | Tidak ada URL routing | Tinggi | Planning |
| 2 | Navigasi 4 level | Sedang | ✅ Diperbaiki |
| 3 | Tidak ada color selector | Sedang | ✅ Diperbaiki |
| 4 | Seller Center kurang panduan | Sedang | ✅ Diperbaiki |
| 5 | Font/kontras kurang | Tinggi | ✅ Diperbaiki |
| 6 | Seller Center skor terendah (Q15=3.5) | Sedang | ✅ Diperbaiki |
| 7 | Nama kategori ambigu | Rendah | Planning |

---

## SLIDE 8 — PERUBAHAN DESAIN

**Sebelum vs Sesudah Testing:**

| Komponen | Sebelum | Sesudah |
|----------|---------|---------|
| Font pixel | 7–8px | 9–10px |
| Opacity teks | 0.3–0.4 | 0.55+ |
| Ikon navigasi | Emoji 🏠🛒 | Material Design Icons |
| Detail produk | Tidak ada size/color | Size S/M/L/XL + Color swatch |
| Seller Center | Teks kosong | Panduan 4 langkah |
| Cart mobile | Side drawer | Full-screen overlay |
| Bundle size | 505 KB | 410 KB (code splitting) |

> 💡 *Tampilkan before/after screenshot*

---

## SLIDE 9 — JUSTIFIKASI HOMESCREEN

**Homescreen = Versi Final setelah Testing**

**6 Teori HCI yang Digunakan:**

1. **Gestalt Proximity** → Grouping elemen terkait
2. **Gestalt Similarity** → Product card identik
3. **Fitts' Law** → Search bar lebar penuh, bottom nav di thumb zone
4. **Norman's Feedback** → Toast, cart bounce, loading state
5. **Nielsen's Heuristic #1** → Dot indicator carousel, badge count
6. **Color Theory** → Pink=CTA, Cyan=info, Yellow=harga

**Data pendukung:**
- 7/8 responden: visual menarik
- Q12=3.9, Q13=4.1 — search & checkout sudah baik

> 💡 *Tampilkan annotated screenshot homepage dengan panah ke setiap elemen*

---

## SLIDE 10 — PLANNING KE DEPAN

**9 Requirements untuk Iterasi Berikutnya:**

**Sprint 1 (Prioritas Tinggi):**
- URL-Based Routing (React Router)
- Navigasi simplifikasi (max 2 level)
- Mobile UX polish

**Sprint 2 (Prioritas Sedang):**
- WCAG AA full compliance
- Size Guide modal ✅ *sudah done*
- Color Selector ✅ *sudah done*
- Error & Empty States

**Sprint 3 (Prioritas Rendah):**
- Code Splitting ✅ *sudah done*
- Internationalization (i18n)

**Target:** SUS Score > 80 (Grade A)

---

## SLIDE 11 — DEMO / LIVE WEBSITE

**nexwear-store.vercel.app**

*[QR Code ke website]*

**Tech Stack:**
- React 19 + Vite 7
- Supabase (Auth, DB, Storage, Realtime)
- Google Material Design Icons
- Deployed on Vercel

---

## SLIDE 12 — PENUTUP

**Kesimpulan:**

- NEXWEAR berhasil dibangun sebagai platform e-commerce fashion cyberpunk
- SUS Score 76.6 = Acceptable, dengan roadmap menuju Grade A
- 30+ perubahan desain berdasarkan data testing
- Semua fitur utama berfungsi dan sudah di-deploy

**Terima Kasih**

*[Nama Kelompok]*
*Human and Computer Interaction — BINUS University Bandung*

---

## TIPS DESAIN SLIDE

- **Warna tema:** Background hitam (#05020f), aksen pink (#ff2d78) dan cyan (#00f5ff)
- **Font:** Orbitron untuk heading, monospace untuk body
- **Screenshot:** Gunakan folder `AOL HCI/screenshots/` untuk semua gambar
- **Total slide:** 12 slide (~15-20 menit presentasi)
- **Setiap slide:** Max 5-6 poin, jangan terlalu padat
