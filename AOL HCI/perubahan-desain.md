# Ringkasan Perubahan Desain — Sebelum vs Sesudah Testing

Dokumen ini merangkum semua perubahan yang dilakukan berdasarkan hasil data gathering (Bab 3) dan analisis (Bab 4).

---

## Tabel Perubahan Lengkap

| No | Komponen | Sebelum | Sesudah | Alasan (Teori HCI) |
|----|----------|---------|---------|---------------------|
| 1 | Font pixel (global) | 7–8px | 9–10px minimum | WCAG 2.1 minimum readable size; 8/10 responden keluhan |
| 2 | Opacity teks sekunder | 0.3–0.4 | 0.55–0.6 | WCAG AA contrast ratio 4.5:1 |
| 3 | Cursor | crosshair | default | 3/10 responden bingung; Nielsen's Heuristic #2 |
| 4 | Detail Page | Tidak ada size selector | Size S/M/L/XL wajib dipilih | Norman's Constraints; 7/10 responden keluhan |
| 5 | Wishlist | Ikon kosong (non-functional) | Toggle ❤️ + halaman Wishlist + Supabase | Norman's Affordance; fitur yang terlihat harus berfungsi |
| 6 | Tombol Kembali | Selalu ke home | History stack (halaman sebelumnya) | Nielsen's Heuristic #3 (User Control); 4/10 keluhan |
| 7 | Checkout button | Tidak ada loading state | Disabled + "MEMPROSES..." saat order | Norman's Feedback; Nielsen's Heuristic #1 |
| 8 | Seller Center empty | Teks kecil "Belum ada produk" | Panduan 4 langkah dengan ikon | Nielsen's Heuristic #10 (Help); 6/10 keluhan |
| 9 | Footer links | Dead links (href="#") | Toast "Fitur segera hadir!" | Nielsen's Heuristic #5 (Error Prevention) |
| 10 | Grafik seller | Tanpa label | Label "SIMULASI DATA" | Nielsen's Heuristic #2 (Match Real World) |
| 11 | Form produk | Semua field tanpa keterangan | Label "OPSIONAL" pada field non-wajib | Norman's Visibility; mengurangi cognitive load |
| 12 | Logout | Langsung logout | Konfirmasi dialog | Nielsen's Heuristic #5 (Error Prevention) |
| 13 | Add to cart | Hanya toast text | Toast + cart icon bounce animation | Norman's Feedback; micro-interaction |
| 14 | Detail produk | 1 gambar saja | Image gallery dengan 4 thumbnail | Baymard Institute best practice |
| 15 | Share | Tidak ada | Copy Link + WhatsApp share | Social engagement; mental model Indonesia |
| 16 | Order status | Manual refresh | Supabase Realtime notification | Nielsen's Heuristic #1 (Visibility) |
| 17 | Responsive | Basic breakpoints | Improved mobile (480px, 700px) | 67% traffic dari mobile |
| 18 | SEO | Hanya <title> | Full meta tags + OG + Twitter Card | Discoverability |
| 19 | PWA | Tidak ada | manifest.json + Service Worker | App-like experience; offline support |
| 20 | Skeleton loading | Basic shimmer | Staggered animation, matched layout | Perceived performance |

---

## Elemen yang TIDAK Diubah (Dipertahankan)

| Elemen | Alasan Dipertahankan |
|--------|---------------------|
| Tema cyberpunk/dark mode | 9/10 responden positif; brand identity utama |
| Bottom navigation | 7/10 feedback positif; sesuai Fitts' Law |
| Checkout progress bar | Q13 rata-rata 4.1; sudah jelas |
| Color system (pink/cyan/yellow) | Konsisten dan efektif; Color Theory terbukti |
| StarField background | 9/10 positif; Aesthetic-Usability Effect |
| Ticker marquee | Tidak ada keluhan; sesuai mental model e-commerce |
| Product card structure | Gestalt Similarity; scanning cepat |
