# OUTLINE PPT — NEXWEAR
## Human and Computer Interaction — AOL Review II

---

## SLIDE 1 — COVER

**NEXWEAR**
Toko Fashion Online Bertema Cyberpunk

Mata Kuliah: Human and Computer Interaction
BINUS University Bandung — 2025/2026

[Nama Kelompok]

---

## SLIDE 2 — APA ITU NEXWEAR & MENGAPA DIBUAT?

NEXWEAR adalah platform e-commerce fashion streetwear dan cyberpunk dengan pengalaman visual imersif (dark mode + neon glow). 

**Mengapa aplikasi ini dibuat?**
- **Homogenitas Visual:** Marketplace raksasa saat ini tampilannya generik. Observasi menunjukkan generasi muda (Gen Z) sering merasa bosan dengan tampilan antarmuka yang "itu-itu saja".
- **Kekosongan Fashion Niche:** Tren fashion streetwear tumbuh pesat, tapi belum ada platform e-commerce khusus dengan estetika yang sesuai dengan komunitas ini.
- **Dual-Role Platform:** Aplikasi dirancang agar satu akun bisa digunakan untuk *berbelanja* dan sekaligus *menjual* produk (Seller Center), mempermudah kreator muda dan reseller.

> 💡 *Visual: Tampilkan screenshot keseluruhan Homepage / Hero Banner*

---

## SLIDE 3 — TARGET PENGGUNA (PERSONA)

NEXWEAR menargetkan demografis usia **17–30 tahun** (Digital Native, Mobile-first).

**Persona 1: Raka (21) - Pembeli/Mahasiswa Desain**
- **Kebutuhan:** Ingin tampil unik dengan budget terbatas, butuh navigasi cepat dan visualisasi produk (rating & review) yang meyakinkan.
- **Logika UI:** Karena terbiasa main game/sosmed, UI diberi elemen mikro-interaktif dan *bottom navigation* agar mudah dikendalikan dengan satu tangan.

**Persona 2: Sinta (25) - Reseller/Content Creator**
- **Kebutuhan:** Berbelanja bahan konten dan butuh platform jualan yang tidak membingungkan.
- **Logika UI:** Dashboard Seller Center dibuat visual dengan form tambah produk yang langkahnya disederhanakan, tanpa *dashboard* terpisah yang mengintimidasi.

---

## SLIDE 4 — LOGIKA & ALUR AUTENTIKASI (LOGIN)

**Kenapa pengguna harus Login / Daftar untuk berinteraksi lebih dalam?**
- **Keamanan & Sinkronisasi (Supabase Auth):** Data keranjang, wishlist, dan riwayat pesanan harus melekat tepat ke identitas pengguna (disinkronisasi secara real-time ke database).
- **HCI Error Prevention (Pencegahan Kesalahan):** Sistem validasi form mem-blokir email dengan format salah sebelum dikirimkan ke server. Password yang salah memberikan pesan kegagalan (Toast Error) seketika.
- **Norman's Visibility:** Pada UI Profil, email dijadikan bersifat *read-only* setelah terdaftar untuk mencegah kebingungan manajemen akun, sebuah penerapan *constraint* dari Don Norman.

> 💡 *Visual: Screenshot halaman Login / Daftar dan pesan Toast Notification*

---

## SLIDE 5 — JUSTIFIKASI DESAIN: COLOR THEORY & TIPOGRAFI

Pemilihan warna di NEXWEAR bukan sekadar estetika, tapi menerapkan asas **Color Theory (Psikologi Warna)**:

- **Dark Theme (#05020f):** Mengurangi *eye strain* (mata lelah), cocok untuk pengguna yang *scroll* lama, sekaligus memberi nuansa ruang pameran/gaming premium.
- **Aksen Pink (#ff2d78):** Melambangkan keberanian dan urgensi. Warna ini **secara konsisten** hanya digunakan untuk CTA (Call to Action) utama seperti "Tambahkan ke Keranjang" agar menonjol.
- **Aksen Kuning (#ffe500):** Menarik perhatian pertama mata manusia. KHUSUS disematkan pada teks **Harga Produk** agar harga langsung terlihat di grid produk yang padat.
- **Aksen Cyan (#00f5ff):** Mewakili rasa aman, dipakai untuk informasi sekunder/navigasi.

**Aksesibilitas Tipografi (WCAG AA):**
Kami menaikkan ukuran teks minimal dari 7px menjadi 10px, dan mempertebal *opacity* warna sekunder dari 0.3 ke 0.55 agar teks tetap terbaca dengan jelas di layar gelap sesuai standar aksesibilitas web global.

> 💡 *Visual: Crop fokus pada area Harga (Kuning), Tombol Beli (Pink), dan Background (Dark).*

---

## SLIDE 6 — JUSTIFIKASI DESAIN: TEORI HCI PADA HOMEPAGE

Penerapan prinsip tokoh HCI (Human-Computer Interaction) pada antarmuka kami:

- **Search Bar Full Width (Fitts' Law):** Kotak pencarian dibuat sangat lebar memanjang agar area *klik* (touch target) membesar, sehingga aksi pencarian sangat cepat dilakukan.
- **Bottom Navigation (Fitts' Law):** Menu ditaruh di *thumb-zone* (area jempol layar bawah). Tombol keranjang ukurannya diperbesar agar aksi paling penting mudah dijangkau.
- **Kartu Produk Seragam (Gestalt - Similarity):** Struktur foto di atas, nama produk, lalu harga diatur identik di semua kotak agar otak mudah melakukan *scanning* visual dalam waktu cepat.
- **Promo Ticker (Gestalt - Continuity):** Pita berjalan merah muda di bawah header mengarahkan mata mengikuti aliran teks horizontal, menciptakan kesan website yang selalu "aktif".
- **Cart Badge Merah (Norman - Visibility):** Terdapat angka warna merah pada ikon keranjang yang memberikan status sistem (System Visibility) jumlah barang tanpa perlu membuka halaman baru.

> 💡 *Visual: Homepage dengan panah anotasi menunjuk ke penjelasan teori-teori ini*

---

## SLIDE 7 — BAGAIMANA KAMI MENGUJI APLIKASI INI?

Kami melakukan evaluasi menggunakan pendekatan *Mixed-Method* (Kuantitatif + Kualitatif):

**1. Kuesioner SUS (System Usability Scale) — Mengukur Angka**
- Data dari 8 responden yang mencoba aplikasi, menjawab 15 pertanyaan (10 standar internasional + 5 spesifik fitur NEXWEAR).
- **Hasil:** Skor **77.5 / 100** (Grade B, *Acceptable*). Ini mengindikasikan usability aplikasi kami tergolong baik dan di atas rata-rata industri (68).

**2. Wawancara Semi-Terstruktur — Mencari Tahu "Kenapa"**
- Mewawancarai pengguna setelah memakai aplikasi untuk menggali alasan terdalam.
- Hasilnya memvalidasi bahwa visual memang menarik (7 dari 8 orang suka), tapi menemukan sisi lemah di *learning curve* fitur Seller Center.

> 💡 *Visual: Tampilkan Ringkasan Tabel Skor SUS (Rata-rata 77.5)*

---

## SLIDE 8 — HASIL TEMUAN (PAIN POINTS & MASALAH)

Dari hasil *testing* pengguna dan wawancara kualitatif, inilah masalah utama yang kami temukan:

1. **Information Overload (Hick's Law):** Header atas kami dulu memiliki hingga 4 lapis navigasi. Terlalu banyak pilihan kategori yang ditumpuk membuat waktu pengambilan keputusan pengguna melambat.
2. **Kurangnya Kendali URL (Nielsen #3 - User Control):** Website belum bisa di-*refresh* dengan aman. Jika pengguna menekan refresh di halaman pencarian, mereka akan terlempar kembali ke Homepage. URL produk juga tidak bisa dibagikan (share link).
3. **Ketiadaan Constraint Warna (Norman's Constraint):** Produk pakaian harusnya mewajibkan pengguna memilih warna, namun sistem sebelumnya lupa memberikan opsi color swatch di detail produk.
4. **Seller Center Kekurangan Bantuan (Nielsen #10 - Help/Doc):** Skor kepuasan untuk halaman *Seller Center* sangat rendah (3.5/5). Pengguna bingung form mana yang wajib diisi dan mana yang opsional, karena grafik yang tampil tidak memiliki panduan instruksi.

---

## SLIDE 9 — PERBAIKAN YANG SUDAH DILAKUKAN

Kami tidak sekadar mendata, tapi sudah mengeksekusi solusi:

| Sebelum Testing | Perbaikan Setelah Testing | Prinsip yang Diterapkan |
|-----------------|---------------------------|-------------------------|
| Font piksel terlalu kecil (7px) | **Teks diperbesar & kontras dinaikkan** | WCAG 2.1 AA (Aksesibilitas visual) |
| Tidak ada opsi warna baju | **Ada tombol Color Swatch (Wajib Pilih)** | Norman's Constraint (Memaksa param. benar) |
| Ikon navigasi pakai Emoji 🏠 | **Diganti dengan Material Design Icons** | Gestalt Similarity (Pola yang universal) |
| Seller Center kosong melompong | **Ada Panduan Visual 4 Langkah & Label "Opsional"** | Nielsen #10 (Bantuan & Dokumentasi) |

> 💡 *Visual: Screenshot perbandingan Before & After dari Perbaikan di Atas*

---

## SLIDE 10 — RENCANA PENGEMBANGAN SELANJUTNYA (ROADMAP)

Masih ada prioritas tinggi yang masuk dalam *backlog* pengembangan masa depan kami:

**Sprint 1 (Segera Diperbaiki):**
- **Implementasi React Router:** Mengubah struktur website agar URL statis per halaman (cth: `nexwear.app/product/jaket-01`). Ini mematuhi *Nielsen #3 (User Control)* agar user bisa menyimpan *bookmark* dan mengirim *link* ke temannya.
- **Simplifikasi Navigasi:** Mengurangi lapis header dari 4 tingkat ke batas maksimal 2 tingkat agar sesuai dengan *Hick's Law* (menyederhanakan opsi kognitif pengguna).

**Sprint 2 (Jangka Menengah):**
- **Multi-step Wizard Seller:** Memecah *form* unggah produk yang sangat panjang ke tahapan 1, 2, 3 langkah agar user tidak merasa terintimidasi.
- **Optimalisasi Performa:** Meringankan beban *bundle size* kode dari 500kb menjadi di bawah 300kb (Code Splitting).

---

## SLIDE 11 — KESIMPULAN & DEMO

**Kesimpulan Penutup:**
- NEXWEAR sukses memecahkan kebuntuan visual *e-commerce* dengan menghadirkan estetika Cyberpunk yang niche, sambil tetap mempertahankan standar *usability* yang terukur baik (Skor SUS 77.5).
- Desain antarmuka NEXWEAR tidak dibuat asal-asalan, melainkan mengacu ketat pada hukum Fitts' Law, Gestalt, Teori Warna, Heuristik Nielsen, dan Prinsip Desain Don Norman.

**Demo Aplikasi Langsung:**
👉 **[nexwear-store.vercel.app](https://nexwear-store.vercel.app)** 

*[Pasang QR Code Raksasa ke Website]*

**Teknologi:** React 19 · Vite 7 · Supabase · Vercel

---

## SLIDE 12 — Q & A

Terima Kasih atas Perhatiannya!
**Sesi Pertanyaan & Diskusi.**

*[Nama Anggota Kelompok]*
*[NIM Anggota Kelompok]*

BINUS University Bandung

---

## CATATAN DESAIN SLIDE (TIPS UNTUK PEMBUAT PPT)
1. **Background:** Gunakan Hitam Pekat (#05020f) di semua slide.
2. **Aksen Teks Utama:** Teks isi berwarna Putih (dengan opacity 0.8), Gunakan Kuning (#ffe500) HANYA untuk *highlight* angka/skor SUS, dan Pink (#ff2d78) untuk Judul Poin/Action.
3. **Tipografi:** Gunakan font *sans-serif* yang bersih seperti **Inter** atau **Roboto** untuk teks paragraf agar dosen mudah membaca. Gunakan font ala *Pixel/Cyberpunk* (seperti Press Start 2P) HANYA untuk Judul Slide yang besar.
4. **Strategi Presentasi:** Buat cetak tebal (Bold) pada kata kunci teori HCI *(Fitts' Law, Gestalt Similarity, Nielsen Heuristics, WCAG)* agar poin penilaian untuk dosen sangat jelas terlihat! Waktu presentasi tekankan pada *Alasan* (Slide 5 & 6) dan *Perbaikan* (Slide 9).
