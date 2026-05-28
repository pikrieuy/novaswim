# Dokumentasi Fitur Baru — Update Iterasi Kedua

Dokumen ini mencatat fitur-fitur baru yang ditambahkan setelah evaluasi usability testing (Bab 3 & 4 AOL HCI).

---

## 1. Animasi Add-to-Cart (Cart Bounce)

**Deskripsi:** Saat pengguna menambahkan produk ke keranjang, ikon cart di header melakukan animasi bounce (membesar lalu kembali normal) sebagai feedback visual.

**Justifikasi HCI:**
- Norman's Feedback Principle — memberikan respons visual yang jelas bahwa aksi berhasil
- Micro-interaction meningkatkan perceived responsiveness (Toptal, 2025)
- Mendukung Nielsen's Heuristic #1 (Visibility of System Status)

**Implementasi:** CSS keyframe `cartBounce` + trigger via JavaScript saat `addToCart` dipanggil.

---

## 2. Share Produk (Copy Link & WhatsApp)

**Deskripsi:** Dua tombol share di halaman detail produk:
- 📋 Copy Link — menyalin URL produk ke clipboard
- 💬 WhatsApp — membuka WhatsApp dengan pesan berisi nama produk, harga, dan link

**Justifikasi HCI:**
- Meningkatkan engagement dan social proof
- Fitts' Law — tombol ditempatkan dekat area aksi (di bawah tombol beli)
- Mental Model — pengguna Indonesia terbiasa share via WhatsApp

**Implementasi:** `navigator.clipboard.writeText()` dan `window.open(wa.me)`.

---

## 3. Notifikasi Real-time (Supabase Realtime)

**Deskripsi:** Pengguna menerima toast notification secara real-time ketika status pesanan berubah (Dikemas → Dikirim → Selesai) tanpa perlu refresh halaman.

**Justifikasi HCI:**
- Nielsen's Heuristic #1 (Visibility of System Status) — pengguna selalu tahu status terkini
- Mengurangi kebutuhan polling/refresh manual
- Meningkatkan trust dan engagement

**Implementasi:** Supabase Realtime channel dengan `postgres_changes` listener pada tabel `orders`.

---

## 4. Image Gallery di Detail Produk

**Deskripsi:** Halaman detail produk sekarang memiliki thumbnail strip (4 slot) di bawah gambar utama. Pengguna bisa klik thumbnail untuk melihat gambar berbeda. Gambar utama bisa di-zoom (lightbox).

**Justifikasi HCI:**
- Baymard Institute (2026): "Product pages with multiple images have 30% higher conversion"
- Gestalt Principle of Proximity — thumbnails dikelompokkan di bawah gambar utama
- Norman's Affordance — border cyan pada thumbnail aktif menunjukkan state terpilih

**Implementasi:** State `activeImg` + thumbnail strip dengan click handler.

---

## 5. Responsive Fixes

**Deskripsi:** Perbaikan tampilan di berbagai ukuran layar:
- ≤700px: Grid 2 kolom, hero side panel hidden, logo diperkecil
- ≤480px: Category strip 3 kolom, mini banners 2 kolom, detail page padding dikurangi

**Justifikasi HCI:**
- Fitts' Law — target area tetap besar di layar kecil
- 67% traffic e-commerce berasal dari mobile (Statista, 2025)
- Nielsen's Heuristic #7 (Flexibility) — adaptif terhadap berbagai device

**Implementasi:** CSS media queries di `global.css`.

---

## 6. SEO Meta Tags

**Deskripsi:** Penambahan meta tags lengkap di `index.html`:
- Title, description, keywords
- Open Graph (og:title, og:description, og:image)
- Twitter Card
- Theme color

**Justifikasi HCI:**
- Meningkatkan discoverability di search engine dan social media
- OG tags memastikan preview yang menarik saat link di-share
- Theme color memberikan branded experience di mobile browser

**Implementasi:** Meta tags di `<head>` section `index.html`.

---

## 7. Progressive Web App (PWA)

**Deskripsi:** Website bisa di-install sebagai aplikasi di smartphone:
- `manifest.json` — nama, ikon, warna tema, orientasi
- `sw.js` — Service Worker untuk caching dan offline fallback
- Registrasi SW di `main.jsx`

**Justifikasi HCI:**
- Mengurangi friction — pengguna tidak perlu buka browser
- Offline capability meningkatkan reliability
- App-like experience sesuai mental model pengguna mobile

**Implementasi:** Web App Manifest + Service Worker dengan network-first caching strategy.

---

## 8. Improved Skeleton Loading

**Deskripsi:** Skeleton loading yang lebih smooth dengan:
- Staggered animation delay per card (80ms interval)
- Layout yang match dengan actual product card (badge, image, info)
- Grid yang konsisten dengan product grid (6 kolom)

**Justifikasi HCI:**
- Perceived performance — pengguna merasa loading lebih cepat
- Nielsen's Heuristic #1 — skeleton menunjukkan bahwa konten sedang dimuat
- Staggered animation menciptakan visual flow yang natural

**Implementasi:** CSS shimmer animation dengan `animationDelay` per card.
