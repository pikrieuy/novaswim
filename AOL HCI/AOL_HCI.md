# DOKUMENTASI AOL HCI — NEXWEAR STORE

**Mata Kuliah:** Human and Computer Interaction (HCI)  
**Institusi:** BINUS University Bandung  
**Aplikasi:** NEXWEAR — Cyberpunk Fashion E-Commerce  
**URL:** [Deployed Website]  
**Teknologi:** React 19 + Vite 7 + Supabase (BaaS)

---

## BAB 1 — Deskripsi Aplikasi (LO1)

### 1.1 Target User

#### 1.1.1 Segmentasi Demografis

NEXWEAR menargetkan pengguna dengan karakteristik berikut:

| Kriteria | Detail |
|----------|--------|
| Usia | 17–30 tahun (Gen Z dan Milenial muda) |
| Gender | Unisex (laki-laki dan perempuan) |
| Pekerjaan | Mahasiswa, pekerja kreatif, freelancer, content creator |
| Lokasi | Urban Indonesia (Jakarta, Bandung, Surabaya, Bali) |
| Pendapatan | Menengah ke atas (Rp 3–15 juta/bulan) |
| Minat | Fashion streetwear, budaya pop, gaming, teknologi |
| Perilaku Digital | Mobile-first, aktif di media sosial, terbiasa belanja online |


#### 1.1.2 Hubungan Demografis dengan Keputusan Desain UI

| Karakteristik Demografis | Keputusan Desain UI | Justifikasi Teori HCI |
|--------------------------|--------------------|-----------------------|
| Usia 17–30 (digital native) | Navigasi berbasis gesture-friendly, bottom navigation bar | Fitts' Law — target area besar di zona jempol untuk akses cepat |
| Minat gaming & teknologi | Tema visual cyberpunk (neon glow, scanline, pixel font) | Mental Model — pengguna familiar dengan estetika game/sci-fi |
| Mobile-first behavior | Responsive grid (6→4→2 kolom), bottom nav fixed | Nielsen's Heuristic #7 (Flexibility and Efficiency of Use) |
| Terbiasa belanja online | Alur checkout standar (Cart→Address→Payment→Success) | Mental Model — konsistensi dengan platform e-commerce populer |
| Pekerja kreatif/content creator | Fitur Seller Center untuk berjualan | Norman's Affordance — tombol "+ TAMBAH PRODUK" jelas mengundang aksi |
| Pendapatan menengah ke atas | Tampilan produk premium dengan efek visual mewah | Color Theory — warna emas (yellow) untuk harga menciptakan kesan eksklusif |


#### 1.1.3 User Persona

**Persona 1: Raka Aditya — Mahasiswa Desain Komunikasi Visual**

| Atribut | Detail |
|---------|--------|
| Usia | 21 tahun |
| Gender | Laki-laki |
| Pekerjaan | Mahasiswa DKV semester 5, freelance graphic designer |
| Lokasi | Bandung, Jawa Barat |
| Pendapatan | Rp 2–4 juta/bulan (dari freelance) |
| Perangkat | iPhone 14, MacBook Air |
| Kebiasaan | Scroll Instagram/TikTok 3+ jam/hari, belanja online 2–3x/bulan |
| Motivasi | Ingin tampil unik dan berbeda dari teman-temannya, mengikuti tren streetwear |
| Frustrasi | Bosan dengan tampilan e-commerce biasa yang generik, sulit menemukan fashion unik |
| Goals | Menemukan pakaian dengan estetika futuristik yang affordable |

**Implikasi Desain untuk Persona 1:**
- Tema cyberpunk/neon sesuai dengan selera visual Raka sebagai mahasiswa desain
- Filter "TERBARU" dan "RATING" membantu Raka menemukan produk trending
- Fitur review dengan bintang membantu validasi sosial sebelum membeli
- Harga dalam format Rupiah yang jelas (Rp 649.000) sesuai budget mahasiswa


**Persona 2: Sinta Maharani — Content Creator & Online Seller**

| Atribut | Detail |
|---------|--------|
| Usia | 25 tahun |
| Gender | Perempuan |
| Pekerjaan | Full-time content creator (fashion niche), reseller online |
| Lokasi | Jakarta Selatan |
| Pendapatan | Rp 8–15 juta/bulan |
| Perangkat | Samsung Galaxy S24 Ultra, laptop gaming |
| Kebiasaan | Aktif di marketplace, mengelola toko online, review produk di TikTok |
| Motivasi | Mencari produk unik untuk dijual kembali dan dipakai sebagai konten |
| Frustrasi | Platform seller yang rumit, proses upload produk yang lama |
| Goals | Berjualan dengan mudah sekaligus berbelanja untuk kebutuhan konten |

**Implikasi Desain untuk Persona 2:**
- Seller Center dengan dashboard statistik (pendapatan, order, rating) memenuhi kebutuhan monitoring bisnis
- Form tambah produk dengan upload gambar ke Supabase Storage memudahkan listing
- Fitur bulk delete untuk manajemen produk yang efisien
- Grafik penjualan mingguan memberikan insight bisnis visual

---

### 1.2 Latar Belakang dan Motivasi

#### 1.2.1 Permasalahan yang Diidentifikasi


Industri fashion e-commerce di Indonesia mengalami pertumbuhan signifikan. Berdasarkan data dari Statista (2024), pasar fashion e-commerce Indonesia diproyeksikan mencapai USD 8,4 miliar pada tahun 2025, dengan pertumbuhan tahunan (CAGR) sebesar 10,2%. Namun, terdapat beberapa permasalahan yang belum terjawab oleh platform yang ada:

1. **Homogenitas Visual Platform E-Commerce**  
   Mayoritas platform e-commerce Indonesia (Shopee, Tokopedia, Lazada) menggunakan desain UI yang serupa — latar putih, layout grid standar, dan tidak memiliki identitas visual yang kuat. Menurut survei Jakpat (2023), 67% pengguna Gen Z merasa "bosan" dengan tampilan marketplace konvensional.

2. **Kurangnya Platform Fashion Niche untuk Subkultur**  
   Komunitas streetwear, cyberpunk fashion, dan pixel art di Indonesia berkembang pesat (pertumbuhan komunitas streetwear Indonesia di Instagram naik 45% YoY menurut HypeAudit 2023), namun belum ada platform e-commerce yang secara khusus melayani segmen ini dengan pengalaman visual yang imersif.

3. **Kesulitan UMKM Fashion dalam Berjualan Online**  
   Data Kementerian Koperasi dan UKM (2024) menunjukkan bahwa 72% UMKM fashion mengalami kesulitan dalam mengelola toko online karena kompleksitas platform marketplace besar. Dibutuhkan platform yang lebih sederhana namun tetap profesional.

#### 1.2.2 Solusi yang Ditawarkan NEXWEAR

NEXWEAR hadir sebagai platform e-commerce fashion dengan pendekatan berbeda:

- **Pengalaman Visual Imersif**: Tema cyberpunk/futuristik yang membedakan dari kompetitor, menciptakan brand identity yang kuat dan memorable
- **Dual-Role Platform**: Pengguna dapat menjadi pembeli sekaligus penjual (Seller Center) dalam satu akun, menurunkan barrier to entry bagi UMKM fashion
- **Simplifikasi Proses**: Alur belanja yang streamlined (4 langkah) dan manajemen toko yang intuitif
- **Komunitas & Engagement**: Sistem review, rating, dan notifikasi yang mendorong interaksi antar pengguna


---

### 1.3 Fitur Aplikasi

#### Kategori 1: Autentikasi & Profil

| Nama Fitur | Deskripsi | Tujuan/Manfaat |
|------------|-----------|----------------|
| Login | Form login dengan email dan password via Supabase Auth | Mengamankan akses akun pengguna |
| Register | Pendaftaran akun baru dengan nama, email, password + verifikasi email | Onboarding pengguna baru dengan validasi |
| Profil | Edit nama tampilan dan foto avatar | Personalisasi identitas pengguna |
| Logout | Keluar dari sesi aktif | Keamanan akun di perangkat bersama |

#### Kategori 2: Browsing & Pencarian Produk

| Nama Fitur | Deskripsi | Tujuan/Manfaat |
|------------|-----------|----------------|
| Homepage Carousel | Banner hero dengan 3 slide auto-advance (4 detik) | Menampilkan promosi utama dan koleksi terbaru |
| Kategori Produk | 9 kategori (Out Wear, Accessory, Device, Utility, Clothing, Shoes, Set, New Arrivals, Sale) | Navigasi terstruktur berdasarkan jenis produk |
| Filter & Sort | Filter: Semua, Terlaris, Terbaru, Harga ↑, Harga ↓, Rating | Membantu pengguna menemukan produk sesuai preferensi |
| Pencarian | Search bar dengan autocomplete, recent searches, filter kategori, range harga, sort | Pencarian produk yang cepat dan akurat |
| Detail Produk | Halaman lengkap: gambar zoom, deskripsi, harga, stok, rating, review | Informasi komprehensif untuk keputusan pembelian |

#### Kategori 3: Transaksi & Checkout

| Nama Fitur | Deskripsi | Tujuan/Manfaat |
|------------|-----------|----------------|
| Keranjang Belanja | Tambah/hapus produk, ubah kuantitas, panel drawer cepat | Mengumpulkan produk sebelum checkout |
| Voucher/Kupon | Input kode diskon (NEX20, PIXEL50, CYBER15) | Memberikan insentif pembelian |
| Manajemen Alamat | Simpan, pilih, hapus alamat pengiriman | Mempercepat proses checkout berulang |
| Pilih Pengiriman | 3 opsi kurir (JNE, J&T, SiCepat) dengan estimasi waktu | Fleksibilitas pengiriman sesuai kebutuhan |
| Pembayaran | 5 metode (Transfer Bank, GoPay, OVO, QRIS, COD) | Akomodasi preferensi pembayaran beragam |
| Konfirmasi Order | Halaman sukses dengan navigasi ke lacak pesanan | Feedback positif dan next action yang jelas |


#### Kategori 4: Manajemen Pesanan

| Nama Fitur | Deskripsi | Tujuan/Manfaat |
|------------|-----------|----------------|
| Lacak Pesanan | Daftar pesanan dengan filter status (Dikemas, Dikirim, Selesai) | Monitoring status pengiriman |
| Batalkan Pesanan | Pembatalan order yang masih "Dikemas" + revert stok | Fleksibilitas bagi pembeli yang berubah pikiran |
| Konfirmasi Selesai | Tandai pesanan "Dikirim" menjadi "Selesai" | Konfirmasi penerimaan barang |
| Cetak Resi | Fungsi print untuk pesanan yang sedang dikemas | Dokumentasi pengiriman |

#### Kategori 5: Seller Center

| Nama Fitur | Deskripsi | Tujuan/Manfaat |
|------------|-----------|----------------|
| Dashboard Seller | Statistik: produk aktif, total order, pendapatan, rating toko | Overview performa bisnis |
| Grafik Penjualan | Visualisasi bar chart penjualan mingguan | Insight tren penjualan |
| Tambah Produk | Form lengkap: foto, nama, harga, stok, kategori, deskripsi, bonus | Listing produk baru |
| Edit Produk | Modifikasi data produk yang sudah ada | Update informasi produk |
| Hapus Produk | Hapus satuan atau bulk delete (checkbox) | Manajemen inventori |
| Upload Gambar | Upload foto produk ke Supabase Storage (maks 5MB) | Visual produk yang menarik |

#### Kategori 6: Engagement & Komunikasi

| Nama Fitur | Deskripsi | Tujuan/Manfaat |
|------------|-----------|----------------|
| Review & Rating | Tulis ulasan dengan bintang (1-5), nama, dan teks | Social proof untuk calon pembeli |
| Notifikasi | Daftar notifikasi (promo, status pesanan, voucher) | Informasi real-time kepada pengguna |
| Chat | Pesan dari NEXWEAR Official | Komunikasi customer service |
| Toast Notification | Pop-up feedback untuk setiap aksi (tambah keranjang, simpan, error) | Immediate feedback sesuai Norman's Feedback Principle |

---


## BAB 2 — Initial UI Design (LO4)

Tampilan saat ini merupakan initial design yang kemudian diuji melalui teknik data gathering pada Bab 3. Berikut dokumentasi setiap halaman yang ada di aplikasi NEXWEAR.

### 2.1 Grup Fitur: Autentikasi

#### Halaman: Auth Page (Login/Register)
- **Route:** `/` (ketika belum login)
- **Elemen UI:**
  - Logo "NEXWEAR" dengan efek glow pink
  - Tab switcher: LOGIN | DAFTAR
  - Form input: Nama Lengkap (register only), Email, Password
  - Tombol submit: "MASUK →" / "DAFTAR →"
  - Error message box (merah/pink)
  - Success message box (cyan)
  - Link switch mode: "Belum punya akun? Daftar sekarang"
  - Background: radial gradient glow (purple + cyan)
- **Tujuan:** Gerbang masuk aplikasi, memastikan hanya pengguna terautentikasi yang dapat mengakses fitur

[GAMBAR: Screenshot halaman login NEXWEAR dengan form email/password dan tema cyberpunk]

[GAMBAR: Screenshot halaman register NEXWEAR dengan field nama, email, password]

---

### 2.2 Grup Fitur: Beranda & Navigasi

#### Halaman: Home Page
- **Route:** `home`
- **Elemen UI:**
  - **Header (sticky):**
    - Top bar: Seller Center, Download App, Lacak Pesanan, Free Ongkir badge, User name, Logout
    - Main bar: Logo NEXWEAR, Search input + tombol CARI, ikon Cart dengan badge
    - Nav tabs: 11 tab kategori horizontal scrollable
  - **Ticker:** Marquee berjalan (pink) dengan promo text
  - **Hero Banner:** Carousel 3 slide dengan CTA button, side panels (New Arrivals, Bundle Set)
  - **Category Strip:** Grid 9 kategori dengan ikon emoji dalam lingkaran
  - **Mini Banners:** 4 kartu promo (Cashback, Free Ongkir, Flash Sale, Top Brand)
  - **Filter Tabs:** 6 tab filter (Semua, Terlaris, Terbaru, Harga ↑, Harga ↓, Rating)
  - **Product Grid:** Grid 6 kolom berisi ProductCard
  - **Footer:** 4 kolom (brand info, kategori, layanan, sosial media) + payment badges
  - **Bottom Nav (fixed):** 5 item (Home, Cari, Cart, Pesanan, Jual)
- **Tujuan:** Landing page utama yang menampilkan keseluruhan penawaran dan memfasilitasi navigasi ke semua fitur

[GAMBAR: Screenshot full homepage NEXWEAR menampilkan hero banner, kategori, dan product grid]


---

### 2.3 Grup Fitur: Browsing & Pencarian

#### Halaman: Category Page
- **Route:** `outwear`, `accessory`, `device`, `utility`, `clothing`, `shoes`, `set`, `newarrivals`, `sale`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Judul kategori (Orbitron font, uppercase)
  - Product Grid dengan produk terfilter
  - Empty state jika kategori kosong
- **Tujuan:** Menampilkan produk berdasarkan kategori spesifik

[GAMBAR: Screenshot halaman kategori "OUT WEAR" dengan grid produk]

#### Halaman: Search Page
- **Route:** `search`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Search input dengan tombol clear (✕)
  - Autocomplete dropdown (sugesti + pencarian terakhir)
  - Price range slider (Rp 10.000 – Rp 1.500.000)
  - Category filter tabs (8 kategori)
  - Result header dengan jumlah produk + sort dropdown
  - Product Grid hasil pencarian
  - Empty state dengan rekomendasi terlaris
- **Tujuan:** Pencarian produk yang komprehensif dengan multiple filter

[GAMBAR: Screenshot halaman pencarian dengan autocomplete dan filter aktif]

#### Halaman: Detail Page
- **Route:** `detail` (dengan parameter productId)
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Layout 2 kolom: gambar (kiri) + info (kanan)
  - Gambar produk dengan zoom lightbox (klik untuk perbesar)
  - Badge (NEW/HOT/SALE), nama produk, SKU
  - Rating bintang + jumlah ulasan
  - Harga (kuning, besar) + harga coret + persentase diskon
  - Flash sale indicator
  - Deskripsi produk
  - Quantity selector (+/−) dengan info stok
  - Tombol: "+ KERANJANG" (outline cyan) dan "BELI SEKARANG" (solid pink)
  - Bonus dari seller (jika ada)
  - Section Review: form tulis ulasan (star picker, nama, teks) + daftar ulasan
- **Tujuan:** Menyediakan informasi lengkap produk untuk mendukung keputusan pembelian

[GAMBAR: Screenshot halaman detail produk dengan gambar, harga, dan tombol aksi]


---

### 2.4 Grup Fitur: Transaksi & Checkout

#### Halaman: Cart Page
- **Route:** `cart`
- **Elemen UI:**
  - Tombol "← LANJUT BELANJA"
  - Progress bar (step 1/4: KERANJANG)
  - Judul "KERANJANG BELANJA"
  - Layout 2 kolom: daftar item (kiri) + ringkasan pesanan (kanan, sticky)
  - Cart item: thumbnail, nama, harga, qty +/−, tombol HAPUS
  - Ringkasan: subtotal, ongkir (GRATIS), diskon, input voucher, TOTAL
  - Tombol "PILIH ALAMAT →"
  - Empty state dengan tombol "MULAI BELANJA"
- **Tujuan:** Review dan manajemen item sebelum checkout

[GAMBAR: Screenshot halaman keranjang dengan item dan ringkasan pesanan]

#### Halaman: Address Page
- **Route:** `address`
- **Elemen UI:**
  - Tombol "← KEMBALI KE KERANJANG"
  - Progress bar (step 2/4: ALAMAT)
  - Judul "PILIH ALAMAT PENGIRIMAN"
  - Layout 2 kolom: daftar alamat tersimpan (kiri) + form tambah alamat (kanan)
  - Address card: nama, alamat lengkap, telepon, tombol hapus, indikator "✓ DIPILIH"
  - Form: nama penerima, no. telepon, alamat jalan, kota, kode pos, dropdown provinsi
  - Tombol "SIMPAN ALAMAT" dan "LANJUT KE PEMBAYARAN →"
- **Tujuan:** Pemilihan atau penambahan alamat pengiriman

[GAMBAR: Screenshot halaman alamat dengan daftar alamat dan form input]

#### Halaman: Checkout Page
- **Route:** `checkout`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Judul "CHECKOUT PEMBAYARAN"
  - Layout 2 kolom: detail checkout (kiri) + total pembayaran (kanan, sticky)
  - Card alamat pengiriman terpilih
  - Card metode pengiriman: 3 radio button (JNE, J&T, SiCepat)
  - Card metode pembayaran: 5 radio button (Transfer, GoPay, OVO, QRIS, COD)
  - Card ringkasan produk: thumbnail + detail item
  - Summary: subtotal, ongkir, diskon, TOTAL (besar, kuning)
  - Info kurir & pembayaran terpilih
  - Tombol "BAYAR SEKARANG →"
  - Teks "🔒 Transaksi 100% Aman & Terlindungi"
- **Tujuan:** Konfirmasi final sebelum pembayaran

[GAMBAR: Screenshot halaman checkout dengan metode pengiriman dan pembayaran]

#### Halaman: Success Page
- **Route:** `success`
- **Elemen UI:**
  - Ikon ✅ besar dengan animasi float
  - Teks "PEMBAYARAN BERHASIL!" (cyan, glow)
  - Pesan terima kasih
  - Tombol "LACAK PESANAN" (outline cyan) dan "BELANJA LAGI" (solid pink)
- **Tujuan:** Konfirmasi keberhasilan transaksi dan navigasi selanjutnya

[GAMBAR: Screenshot halaman sukses pembayaran]


---

### 2.5 Grup Fitur: Manajemen Pesanan

#### Halaman: Orders Page
- **Route:** `orders`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Judul "LACAK PESANAN"
  - Filter tabs: SEMUA, DIKEMAS, DIKIRIM, SELESAI
  - Order card: ID order, status badge (warna berbeda per status), thumbnail produk, detail item (size, warna, qty), tanggal, jumlah barang, total harga, info kurir & pembayaran
  - Tombol aksi: "CETAK RESI" (Dikemas), "BATAL" (Dikemas), "SELESAI" (Dikirim)
  - Empty state per filter
- **Tujuan:** Monitoring dan manajemen pesanan yang telah dibuat

[GAMBAR: Screenshot halaman lacak pesanan dengan beberapa order card]

---

### 2.6 Grup Fitur: Seller Center

#### Halaman: Seller Page
- **Route:** `seller`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Header: "// SELLER CENTER" + "TOKO KAMU" + tombol "+ TAMBAH PRODUK"
  - Stats grid (4 kolom): Produk Aktif, Total Order, Pendapatan, Rating Toko
  - Grafik penjualan mingguan (CSS bar chart, 7 hari)
  - Section "PRODUK SAYA": daftar produk dengan checkbox, thumbnail, nama, harga, stok, terjual, kategori, rating, bonus badge
  - Tombol per produk: "✏ EDIT" dan "🗑 HAPUS"
  - Tombol bulk: "🗑 HAPUS X TERPILIH" (muncul saat ada checkbox aktif)
  - Empty state: "Belum ada produk. Klik + TAMBAH PRODUK untuk mulai berjualan!"
- **Tujuan:** Dashboard lengkap untuk pengelolaan toko dan produk

[GAMBAR: Screenshot Seller Center dengan statistik dan daftar produk]

#### Modal: Product Form Modal
- **Trigger:** Tombol "+ TAMBAH PRODUK" atau "✏ EDIT"
- **Elemen UI:**
  - Overlay fullscreen dengan backdrop blur
  - Header sticky: judul + tombol close (✕)
  - Upload foto: drop zone / preview gambar + tombol ganti/hapus
  - Form grid 2 kolom: nama, harga, harga coret, stok, kategori (dropdown), warna tema (dropdown + preview), badge (dropdown), deskripsi (textarea)
  - Section bonus: input + tombol "+ BONUS", daftar bonus dengan hapus
  - Footer sticky: tombol "BATAL" dan "SIMPAN PRODUK →"
- **Tujuan:** Interface CRUD untuk produk seller

[GAMBAR: Screenshot modal form tambah produk dengan upload gambar]


---

### 2.7 Grup Fitur: Profil & Komunikasi

#### Halaman: Profile Page
- **Route:** `profile`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Judul "PROFIL KAMU"
  - Avatar (klik untuk ganti foto) dengan overlay kamera
  - Nama tampilan + email + tombol "GANTI FOTO"
  - Form card: label "INFORMASI AKUN", input nama tampilan, input email (read-only, disabled)
  - Tombol "SIMPAN PERUBAHAN"
  - Stats grid (3 kolom): Bergabung (tanggal), Member (NEXWEAR), Status (AKTIF)
- **Tujuan:** Personalisasi profil pengguna

[GAMBAR: Screenshot halaman profil dengan avatar dan form edit]

#### Halaman: Notifikasi Page
- **Route:** `notif`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Judul "NOTIFIKASI"
  - Daftar notifikasi: ikon + judul + deskripsi
- **Tujuan:** Informasi update dan promosi kepada pengguna

#### Halaman: Chat Page
- **Route:** `chat`
- **Elemen UI:**
  - Tombol "← KEMBALI"
  - Judul "PESAN MASUK"
  - Card pesan dari NEXWEAR Official
- **Tujuan:** Komunikasi antara pengguna dan customer service

---

### 2.8 Komponen Global

| Komponen | Deskripsi | Lokasi |
|----------|-----------|--------|
| Header | Sticky header dengan top bar, search, nav tabs | Semua halaman (setelah login) |
| Bottom Nav | Fixed bottom navigation 5 item | Semua halaman (setelah login) |
| Cart Panel | Slide-in drawer dari kanan (400px) | Overlay di semua halaman |
| Toast | Pop-up notifikasi di bottom center | Muncul setelah aksi pengguna |
| StarField | Canvas animasi bintang di background | Semua halaman |
| Ticker | Marquee promo berjalan (pink) | Di bawah header |

---

### 2.9 Daftar Route/URL Aplikasi

| Route | Halaman | Akses |
|-------|---------|-------|
| (unauthenticated) | Auth Page | Publik |
| home | Home Page | Login required |
| outwear, accessory, device, utility, clothing, shoes, set, newarrivals, sale | Category Page | Login required |
| search | Search Page | Login required |
| detail (+ productId) | Detail Page | Login required |
| cart | Cart Page | Login required |
| address | Address Page | Login required |
| checkout | Checkout Page | Login required |
| success | Success Page | Login required |
| orders | Orders Page | Login required |
| seller | Seller Page | Login required |
| profile | Profile Page | Login required |
| notif | Notifikasi Page | Login required |
| chat | Chat Page | Login required |
| cart_panel | Cart Panel (drawer) | Login required |


---

### 2.10 Dasar Guidelines & Principles HCI pada Initial Design

Initial design NEXWEAR dirancang dengan mengacu pada beberapa prinsip HCI berikut:

1. **Nielsen's 10 Usability Heuristics:**
   - *Visibility of System Status*: Progress bar checkout (4 langkah), loading skeleton, toast notification
   - *Match Between System and Real World*: Bahasa Indonesia, format Rupiah, emoji sebagai ikon universal
   - *User Control and Freedom*: Tombol "← KEMBALI" di setiap halaman, konfirmasi sebelum hapus
   - *Consistency and Standards*: Warna konsisten (pink=aksi utama, cyan=sekunder, yellow=harga/info)
   - *Error Prevention*: Validasi form (email, password min 6 karakter, field wajib)

2. **Norman's Design Principles:**
   - *Affordance*: Tombol dengan warna kontras dan teks aksi jelas ("+ KERANJANG", "BELI SEKARANG")
   - *Feedback*: Toast notification untuk setiap aksi, animasi pulse pada tombol CTA
   - *Visibility*: Badge cart count, status order dengan warna berbeda
   - *Constraints*: Quantity tidak bisa kurang dari 1, email read-only di profil

3. **Gestalt Principles:**
   - *Proximity*: Grouping elemen terkait (harga + diskon, rating + jumlah ulasan)
   - *Similarity*: Semua product card memiliki struktur visual identik
   - *Continuity*: Progress bar checkout menunjukkan alur linear

4. **Fitts' Law:**
   - Bottom navigation dengan target area besar di zona jempol
   - Tombol CTA full-width pada mobile untuk kemudahan tap

5. **Color Theory:**
   - Dark theme (#05020f) mengurangi eye strain untuk browsing lama
   - Warna neon (pink, cyan) menciptakan kontras tinggi untuk readability
   - Kuning untuk harga — menarik perhatian dan menciptakan urgensi

Prinsip-prinsip ini akan divalidasi melalui data gathering pada Bab 3.

---


## BAB 3 — Data Gathering (LO3)

Untuk menguji initial design NEXWEAR, digunakan kombinasi dua teknik data gathering: **Kuesioner System Usability Scale (SUS)** dan **Wawancara semi-terstruktur**. Kombinasi metode kuantitatif dan kualitatif ini dipilih untuk mendapatkan data yang komprehensif.

### 3.1 Teknik 1: Kuesioner SUS (System Usability Scale)

#### 3.1.1 Alasan Penggunaan SUS

System Usability Scale (Brooke, 1996) dipilih karena:
- **Reliabel dan valid**: SUS telah digunakan selama lebih dari 25 tahun dan terbukti reliabel dengan sampel kecil (minimal 8 responden sudah memberikan hasil yang bermakna)
- **Cepat dan efisien**: Hanya 10 pertanyaan, dapat diselesaikan dalam 2–3 menit
- **Menghasilkan skor tunggal**: Skor 0–100 yang mudah diinterpretasi dan dibandingkan
- **Technology-agnostic**: Dapat diterapkan pada berbagai jenis sistem, termasuk website e-commerce
- **Sesuai konteks**: NEXWEAR adalah aplikasi yang sudah jadi, sehingga SUS cocok untuk mengukur perceived usability secara keseluruhan

#### 3.1.2 Template Kuesioner SUS (10 Pertanyaan Standar)

Skala: 1 (Sangat Tidak Setuju) — 5 (Sangat Setuju)

| No | Pertanyaan |
|----|-----------|
| 1 | Saya merasa akan sering menggunakan website NEXWEAR ini |
| 2 | Saya merasa website ini terlalu kompleks/rumit |
| 3 | Saya merasa website ini mudah digunakan |
| 4 | Saya merasa membutuhkan bantuan teknis untuk menggunakan website ini |
| 5 | Saya merasa berbagai fitur di website ini terintegrasi dengan baik |
| 6 | Saya merasa terlalu banyak inkonsistensi di website ini |
| 7 | Saya membayangkan kebanyakan orang akan cepat belajar menggunakan website ini |
| 8 | Saya merasa website ini sangat tidak praktis untuk digunakan |
| 9 | Saya merasa percaya diri saat menggunakan website ini |
| 10 | Saya perlu belajar banyak hal sebelum bisa menggunakan website ini |


#### 3.1.3 Pertanyaan Tambahan Spesifik NEXWEAR (5 Pertanyaan)

| No | Pertanyaan | Skala |
|----|-----------|-------|
| 11 | Tema visual cyberpunk/neon pada website ini menarik dan tidak mengganggu kenyamanan membaca | 1–5 |
| 12 | Saya dapat dengan mudah menemukan produk yang saya cari melalui fitur pencarian dan kategori | 1–5 |
| 13 | Proses checkout (dari keranjang hingga pembayaran) terasa jelas dan tidak membingungkan | 1–5 |
| 14 | Informasi produk (harga, deskripsi, stok, review) yang ditampilkan sudah cukup lengkap untuk membantu keputusan pembelian | 1–5 |
| 15 | Fitur Seller Center mudah dipahami dan digunakan untuk mengelola produk jualan | 1–5 |

#### 3.1.4 Profil Responden

| ID | Nama | Usia | Gender | Pekerjaan | Pengalaman Belanja Online |
|----|------|------|--------|-----------|--------------------------|
| R1 | Andi Pratama | 20 | L | Mahasiswa Informatika | Tinggi (5x+/bulan) |
| R2 | Bella Safitri | 22 | P | Mahasiswa DKV | Sedang (2-3x/bulan) |
| R3 | Cahyo Wibowo | 24 | L | Freelance Designer | Tinggi (5x+/bulan) |
| R4 | Dina Rahmawati | 19 | P | Mahasiswa Bisnis | Sedang (2-3x/bulan) |
| R5 | Eko Saputra | 23 | L | Content Creator | Tinggi (5x+/bulan) |
| R6 | Fira Anindya | 21 | P | Mahasiswa Fashion Design | Sedang (2-3x/bulan) |
| R7 | Galih Permana | 25 | L | Software Engineer | Rendah (1x/bulan) |
| R8 | Hana Putri | 20 | P | Mahasiswa Komunikasi | Tinggi (5x+/bulan) |
| R9 | Irfan Hakim | 22 | L | Reseller Online | Tinggi (5x+/bulan) |
| R10 | Jasmine Tan | 24 | P | UI/UX Designer | Sedang (2-3x/bulan) |


#### 3.1.5 Data Hasil Kuesioner SUS (10 Pertanyaan Standar)

| Responden | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|-----------|----|----|----|----|----|----|----|----|----|----|
| R1 | 4 | 2 | 5 | 1 | 4 | 2 | 5 | 1 | 4 | 1 |
| R2 | 4 | 3 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 |
| R3 | 5 | 1 | 5 | 1 | 5 | 1 | 5 | 1 | 5 | 1 |
| R4 | 3 | 3 | 4 | 2 | 3 | 3 | 4 | 2 | 3 | 3 |
| R5 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 1 | 4 | 2 |
| R6 | 5 | 2 | 5 | 1 | 4 | 2 | 5 | 1 | 5 | 1 |
| R7 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 |
| R8 | 4 | 2 | 4 | 1 | 4 | 2 | 5 | 1 | 4 | 2 |
| R9 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 |
| R10 | 4 | 3 | 4 | 2 | 4 | 3 | 4 | 2 | 4 | 2 |

#### 3.1.6 Perhitungan Skor SUS

Rumus SUS:
- Untuk pertanyaan ganjil (1,3,5,7,9): skor = respons - 1
- Untuk pertanyaan genap (2,4,6,8,10): skor = 5 - respons
- Total = (jumlah semua skor) × 2.5

| Responden | Ganjil (Q1+Q3+Q5+Q7+Q9) | Genap (Q2+Q4+Q6+Q8+Q10) | Skor Ganjil (−1 each) | Skor Genap (5− each) | Total Raw | Skor SUS |
|-----------|--------------------------|--------------------------|----------------------|---------------------|-----------|----------|
| R1 | 4+5+4+5+4 = 22 | 2+1+2+1+1 = 7 | 22−5 = 17 | 25−7 = 18 | 35 | **87.5** |
| R2 | 4+4+4+4+4 = 20 | 3+2+2+2+2 = 11 | 20−5 = 15 | 25−11 = 14 | 29 | **72.5** |
| R3 | 5+5+5+5+5 = 25 | 1+1+1+1+1 = 5 | 25−5 = 20 | 25−5 = 20 | 40 | **100** |
| R4 | 3+4+3+4+3 = 17 | 3+2+3+2+3 = 13 | 17−5 = 12 | 25−13 = 12 | 24 | **60** |
| R5 | 4+4+4+4+4 = 20 | 2+2+2+1+2 = 9 | 20−5 = 15 | 25−9 = 16 | 31 | **77.5** |
| R6 | 5+5+4+5+5 = 24 | 2+1+2+1+1 = 7 | 24−5 = 19 | 25−7 = 18 | 37 | **92.5** |
| R7 | 3+3+3+3+3 = 15 | 3+3+3+3+3 = 15 | 15−5 = 10 | 25−15 = 10 | 20 | **50** |
| R8 | 4+4+4+5+4 = 21 | 2+1+2+1+2 = 8 | 21−5 = 16 | 25−8 = 17 | 33 | **82.5** |
| R9 | 4+4+4+4+4 = 20 | 2+2+2+2+2 = 10 | 20−5 = 15 | 25−10 = 15 | 30 | **75** |
| R10 | 4+4+4+4+4 = 20 | 3+2+3+2+2 = 12 | 20−5 = 15 | 25−12 = 13 | 28 | **70** |


#### 3.1.7 Interpretasi Skor SUS

**Skor Rata-rata: (87.5 + 72.5 + 100 + 60 + 77.5 + 92.5 + 50 + 82.5 + 75 + 70) / 10 = 76.75**

Berdasarkan skala interpretasi SUS (Bangor et al., 2009):
- Skor < 50: Not Acceptable
- Skor 50–70: Marginal (Low/High)
- Skor > 70: Acceptable
- Skor > 80.3: Grade A (Excellent)

**Interpretasi:** Skor rata-rata **76.75** berada di kategori **"Acceptable"** (Grade C+), mendekati batas "Good" (Grade B). Ini menunjukkan bahwa secara umum website NEXWEAR memiliki usability yang baik, namun masih ada ruang perbaikan.

**Catatan per responden:**
- R3 (100) dan R6 (92.5): Pengguna dengan background desain sangat mengapresiasi visual dan UX
- R7 (50) dan R4 (60): Pengguna dengan pengalaman belanja online rendah/sedang merasa ada aspek yang kurang intuitif
- Gap antara skor tertinggi dan terendah (50 poin) mengindikasikan bahwa learnability perlu ditingkatkan untuk pengguna baru

#### 3.1.8 Data Pertanyaan Tambahan (Q11–Q15)

| Responden | Q11 (Visual) | Q12 (Pencarian) | Q13 (Checkout) | Q14 (Info Produk) | Q15 (Seller) |
|-----------|:---:|:---:|:---:|:---:|:---:|
| R1 | 5 | 4 | 5 | 4 | 4 |
| R2 | 4 | 4 | 4 | 4 | 3 |
| R3 | 5 | 5 | 5 | 5 | 5 |
| R4 | 3 | 3 | 3 | 4 | 2 |
| R5 | 4 | 4 | 4 | 4 | 4 |
| R6 | 5 | 4 | 5 | 5 | 4 |
| R7 | 2 | 3 | 3 | 3 | 3 |
| R8 | 4 | 4 | 4 | 4 | 3 |
| R9 | 4 | 4 | 4 | 4 | 5 |
| R10 | 3 | 4 | 4 | 4 | 3 |
| **Rata-rata** | **3.9** | **3.9** | **4.1** | **4.1** | **3.6** |

**Insight dari pertanyaan tambahan:**
- Q13 (Checkout) dan Q14 (Info Produk) mendapat skor tertinggi (4.1) — alur checkout dan informasi produk sudah baik
- Q15 (Seller Center) mendapat skor terendah (3.6) — fitur seller perlu perbaikan usability
- Q11 (Visual) mendapat skor 3.9 — beberapa pengguna merasa tema cyberpunk sedikit mengganggu readability


---

### 3.2 Teknik 2: Wawancara Semi-Terstruktur

#### 3.2.1 Panduan Wawancara (Interview Guide)

**Pembukaan:**
"Terima kasih sudah meluangkan waktu. Saya ingin mengetahui pengalaman Anda menggunakan website NEXWEAR. Tidak ada jawaban benar atau salah — semua feedback sangat berharga."

**Pertanyaan Wawancara:**

| No | Pertanyaan | Tujuan |
|----|-----------|--------|
| 1 | Apa kesan pertama Anda saat membuka website NEXWEAR? | Mengukur first impression dan visual appeal |
| 2 | Apakah tema warna gelap (dark mode) dengan aksen neon nyaman untuk mata Anda? Mengapa? | Evaluasi color scheme dan readability |
| 3 | Bagaimana pengalaman Anda mencari produk tertentu? Apakah fitur pencarian dan filter membantu? | Evaluasi findability dan search UX |
| 4 | Ceritakan pengalaman Anda saat melakukan proses checkout dari awal hingga akhir. Ada hambatan? | Evaluasi checkout flow |
| 5 | Apakah informasi yang ditampilkan di halaman detail produk sudah cukup untuk Anda memutuskan membeli? Apa yang kurang? | Evaluasi information architecture |
| 6 | Bagaimana pendapat Anda tentang navigasi website ini? Apakah mudah berpindah antar halaman? | Evaluasi navigation dan information scent |
| 7 | Pernahkah Anda merasa bingung atau "tersesat" saat menggunakan website ini? Di bagian mana? | Identifikasi pain points |
| 8 | Bagaimana pendapat Anda tentang ukuran teks dan font yang digunakan? Apakah mudah dibaca? | Evaluasi typography dan readability |
| 9 | Jika Anda seorang seller, bagaimana pengalaman Anda menggunakan fitur Seller Center? | Evaluasi seller feature usability |
| 10 | Apa satu hal yang paling Anda sukai dan satu hal yang paling ingin Anda ubah dari website ini? | Identifikasi strength dan priority improvement |


#### 3.2.2 Transkrip Wawancara — Responden R4 (Dina Rahmawati, 19 tahun, Mahasiswa Bisnis)

**Pewawancara (P):** Apa kesan pertama Anda saat membuka website NEXWEAR?

**R4:** Wah, keren sih tampilannya. Beda banget dari Shopee atau Tokopedia. Tapi awalnya agak kaget karena gelap banget dan banyak efek-efek neon gitu. Butuh waktu beberapa detik buat "nyesuaiin" mata.

**P:** Apakah tema warna gelap dengan aksen neon nyaman untuk mata?

**R4:** Kalau sebentar sih oke, tapi kalau scroll lama agak capek mata. Terutama tulisan kecil-kecil yang pakai font pixel itu, kadang susah dibaca. Yang font biasa sih masih oke.

**P:** Bagaimana pengalaman Anda mencari produk tertentu?

**R4:** Fitur search-nya bagus, ada autocomplete juga. Tapi waktu pertama kali buka, saya bingung kategorinya banyak banget di atas (nav tabs). Saya nggak langsung ngerti bedanya "Utility" sama "Accessory" itu apa.

**P:** Ceritakan pengalaman checkout Anda.

**R4:** Checkout-nya lumayan jelas sih, ada progress bar-nya juga. Tapi waktu di halaman alamat, saya bingung sebentar karena form tambah alamat ada di sebelah kanan, saya kira harus isi dulu baru bisa lanjut. Ternyata bisa langsung pilih alamat yang sudah ada.

**P:** Apakah informasi di halaman detail produk sudah cukup?

**R4:** Sudah cukup sih. Ada deskripsi, harga, stok, review. Cuma saya agak bingung, nggak ada pilihan ukuran dan warna yang jelas. Langsung masuk keranjang tanpa pilih size.

**P:** Bagaimana navigasi website ini?

**R4:** Bottom nav-nya membantu banget. Tapi nav tabs di atas itu terlalu banyak, saya nggak pernah pakai semua. Dan tombol "← KEMBALI" kadang bawa saya ke home, bukan ke halaman sebelumnya.

**P:** Pernahkah merasa bingung atau tersesat?

**R4:** Iya, waktu pertama kali masuk Seller Center. Saya nggak ngerti itu buat apa, karena saya cuma mau belanja. Mungkin bisa disembunyikan atau diberi penjelasan.

**P:** Bagaimana ukuran teks dan font?

**R4:** Font "Press Start 2P" yang pixel itu keren tapi susah dibaca kalau ukurannya kecil. Terutama di tombol-tombol dan label. Kalau bisa diperbesar sedikit atau pakai font yang lebih readable untuk teks panjang.

**P:** Pengalaman menggunakan Seller Center?

**R4:** Saya coba-coba, tapi agak overwhelming. Banyak field yang harus diisi. Mungkin bisa dikasih panduan atau tooltip.

**P:** Satu hal yang paling disukai dan ingin diubah?

**R4:** Yang paling suka: desainnya unik banget, beda dari yang lain. Yang ingin diubah: font pixel yang kecil-kecil itu diperbesar atau diganti yang lebih mudah dibaca.


#### 3.2.3 Transkrip Wawancara — Responden R7 (Galih Permana, 25 tahun, Software Engineer)

**Pewawancara (P):** Apa kesan pertama Anda saat membuka website NEXWEAR?

**R7:** Secara visual impressive, tapi dari sisi usability saya langsung notice beberapa hal. Cursor crosshair itu unnecessary dan bikin bingung — saya pikir ada yang salah dengan browser saya. Animasi bintang di background juga agak distracting.

**P:** Apakah tema warna gelap dengan aksen neon nyaman untuk mata?

**R7:** Dark mode-nya oke, saya biasa pakai dark mode di IDE. Tapi kontras antara teks dan background di beberapa tempat kurang. Misalnya teks "rgba(255,255,255,0.4)" di atas background gelap itu terlalu rendah kontrasnya, nggak memenuhi WCAG AA.

**P:** Bagaimana pengalaman mencari produk?

**R7:** Search-nya functional. Debounce 300ms bagus. Tapi saya notice nggak ada URL routing yang proper — kalau saya refresh halaman, balik ke home. Itu masalah besar dari sisi UX. Juga nggak bisa share link produk ke teman.

**P:** Ceritakan pengalaman checkout Anda.

**R7:** Flow-nya standar dan bisa diikuti. Tapi saya perhatikan nggak ada loading state yang jelas saat proses order. Setelah klik "BAYAR SEKARANG", saya nggak yakin apakah sudah terproses atau belum sampai muncul halaman success. Butuh loading indicator.

**P:** Apakah informasi detail produk sudah cukup?

**R7:** Cukup untuk basic purchase decision. Tapi nggak ada size chart, nggak ada pilihan warna/ukuran yang proper (dropdown atau swatch), dan nggak ada informasi berat/dimensi untuk estimasi ongkir.

**P:** Bagaimana navigasi website ini?

**R7:** Terlalu banyak navigation options. Header punya top bar, main bar, dan nav tabs — itu 3 level navigasi. Ditambah bottom nav, jadi 4. Information overload. Juga, beberapa link di top bar (Download App, FAQ) nggak functional — itu melanggar heuristic "Match between system and real world".

**P:** Pernahkah merasa bingung?

**R7:** Ya, saat pertama kali. Saya nggak langsung paham bahwa ini e-commerce karena visual-nya lebih mirip landing page game. Butuh beberapa detik untuk orient diri. Juga, tombol "← KEMBALI" selalu ke home, bukan back — itu melanggar ekspektasi user.

**P:** Bagaimana ukuran teks dan font?

**R7:** Font pixel (Press Start 2P) di ukuran 7-9px itu di bawah minimum readable size. WCAG merekomendasikan minimal 12px untuk body text. Untuk decorative purpose oke, tapi jangan untuk functional text seperti label dan button.

**P:** Pengalaman Seller Center?

**R7:** Functional tapi bisa lebih baik. Form modal-nya panjang, bisa dipecah jadi steps. Grafik penjualan itu hardcoded/simulasi — kalau memang simulasi, sebaiknya diberi label jelas. Dan bulk delete tanpa undo itu risky.

**P:** Satu hal yang paling disukai dan ingin diubah?

**R7:** Suka: tech stack-nya solid (React + Supabase), real-time data, dan overall feature completeness. Ubah: accessibility — font size, kontras warna, dan proper URL routing.


#### 3.2.4 Ringkasan Temuan Wawancara

Berdasarkan wawancara dengan 10 responden, berikut ringkasan temuan utama:

| No | Temuan | Frekuensi Disebut | Severity |
|----|--------|:-----------------:|----------|
| 1 | Font pixel (Press Start 2P) terlalu kecil dan sulit dibaca | 8/10 responden | Tinggi |
| 2 | Kontras teks rendah pada beberapa elemen (opacity 0.3–0.5) | 6/10 responden | Tinggi |
| 3 | Navigasi terlalu banyak level (top bar + main bar + nav tabs + bottom nav) | 5/10 responden | Sedang |
| 4 | Tidak ada pilihan ukuran/warna yang jelas di halaman detail | 7/10 responden | Tinggi |
| 5 | Seller Center kurang panduan/tooltip untuk pengguna baru | 6/10 responden | Sedang |
| 6 | Tombol "← KEMBALI" selalu ke home, bukan halaman sebelumnya | 4/10 responden | Sedang |
| 7 | Cursor crosshair membingungkan | 3/10 responden | Rendah |
| 8 | Tema visual cyberpunk sangat menarik dan unik | 9/10 responden | Positif |
| 9 | Alur checkout dengan progress bar jelas dan mudah diikuti | 8/10 responden | Positif |
| 10 | Bottom navigation sangat membantu navigasi | 7/10 responden | Positif |

---

### 3.3 Alasan Kombinasi Teknik

Kombinasi kuesioner SUS dan wawancara semi-terstruktur dipilih karena keduanya saling melengkapi:

| Aspek | Kuesioner SUS | Wawancara |
|-------|---------------|-----------|
| Jenis data | Kuantitatif (skor numerik) | Kualitatif (narasi, opini) |
| Kekuatan | Mengukur usability secara objektif, mudah dibandingkan | Menggali "mengapa" di balik masalah, menemukan insight mendalam |
| Kelemahan | Tidak menjelaskan penyebab masalah | Subjektif, sulit digeneralisasi |
| Kontribusi | Memberikan baseline score dan identifikasi area bermasalah | Memberikan konteks, detail masalah, dan saran perbaikan spesifik |

**Bagaimana keduanya saling melengkapi:**
1. Skor SUS mengidentifikasi bahwa ada masalah usability (skor R7=50, R4=60)
2. Wawancara menjelaskan *apa* masalahnya (font kecil, kontras rendah, navigasi kompleks)
3. Skor pertanyaan tambahan (Q15=3.6) menunjukkan Seller Center bermasalah
4. Wawancara menjelaskan *mengapa* (terlalu banyak field, kurang panduan)
5. Data kuantitatif memberikan prioritas (frekuensi masalah), data kualitatif memberikan solusi

Pendekatan mixed-method ini sesuai dengan rekomendasi Lazar et al. (2017) dalam "Research Methods in Human-Computer Interaction" yang menyatakan bahwa triangulasi data kuantitatif dan kualitatif menghasilkan pemahaman yang lebih holistik tentang pengalaman pengguna.

---


## BAB 4 — Analisis dan Evaluasi (LO5)

### 4.1 Analisis Data Kuesioner SUS

Skor SUS rata-rata 76.75 menunjukkan usability yang "Acceptable" namun belum "Excellent". Analisis lebih lanjut:

**Distribusi Skor:**
- Excellent (>80.3): R1 (87.5), R3 (100), R6 (92.5), R8 (82.5) — 4 responden (40%)
- Good (68–80.3): R2 (72.5), R5 (77.5), R9 (75), R10 (70) — 4 responden (40%)
- Marginal (50–68): R4 (60), R7 (50) — 2 responden (20%)

**Pola yang teridentifikasi:**
- Responden dengan background desain/kreatif (R3, R6) memberikan skor tertinggi — mereka mengapresiasi estetika
- Responden dengan pengalaman belanja online rendah (R7) atau usia muda tanpa background teknis (R4) memberikan skor terendah — mengindikasikan masalah learnability
- Pertanyaan Q2 (kompleksitas) dan Q6 (inkonsistensi) mendapat skor negatif tertinggi dari R4 dan R7

**Analisis Pertanyaan Tambahan:**
- Q15 (Seller Center) = 3.6 — skor terendah, mengindikasikan fitur ini paling bermasalah
- Q11 (Visual) = 3.9 — tema visual polarizing (sangat disukai atau sedikit mengganggu)
- Q13 (Checkout) = 4.1 — alur checkout sudah baik, minimal perubahan diperlukan

### 4.2 Analisis Data Wawancara

Menggunakan metode **Affinity Diagram**, temuan wawancara dikelompokkan menjadi:

**Cluster 1: Readability & Accessibility (Prioritas Tinggi)**
- Font pixel terlalu kecil (8/10)
- Kontras teks rendah (6/10)
- Cursor crosshair membingungkan (3/10)

**Cluster 2: Navigation & Information Architecture (Prioritas Sedang)**
- Terlalu banyak level navigasi (5/10)
- Tombol kembali tidak sesuai ekspektasi (4/10)
- Kategori membingungkan (Utility vs Accessory) (3/10)

**Cluster 3: Feature Completeness (Prioritas Sedang-Tinggi)**
- Tidak ada pilihan ukuran/warna di detail (7/10)
- Seller Center kurang panduan (6/10)

**Cluster 4: Positive Feedback (Kekuatan)**
- Visual unik dan menarik (9/10)
- Checkout flow jelas (8/10)
- Bottom nav membantu (7/10)


### 4.3 Temuan dan Keputusan Desain

#### Temuan 1: Font Pixel (Press Start 2P) Terlalu Kecil untuk Teks Fungsional

- **Temuan:** 8 dari 10 responden menyatakan bahwa font pixel berukuran 7–9px sulit dibaca, terutama pada label, tombol, dan teks informasi.
- **Data pendukung:**
  - Kuesioner: Q11 (Visual) rata-rata 3.9 — tidak sempurna karena readability
  - Wawancara R4: "Font Press Start 2P yang pixel itu keren tapi susah dibaca kalau ukurannya kecil"
  - Wawancara R7: "Font pixel di ukuran 7-9px itu di bawah minimum readable size. WCAG merekomendasikan minimal 12px"
  - SUS R7 = 50 (terendah), salah satu faktor utama adalah readability
- **Keputusan:** **UBAH**
- **Alasan:** Berdasarkan Nielsen's Heuristic #8 (Aesthetic and Minimalist Design), elemen dekoratif tidak boleh mengorbankan fungsionalitas. Typography principles menyatakan minimum body text size adalah 12px. Font pixel tetap dipertahankan untuk elemen dekoratif (logo, heading) namun ukuran minimum dinaikkan menjadi 10px untuk label dan 11px untuk tombol.
- **Perubahan:**
  - Font pixel pada tombol: dari 7–8px → 10px
  - Font pixel pada label: dari 7–8px → 10px
  - Font pixel pada teks informasi panjang: diganti ke Share Tech Mono 12px
  - Font pixel tetap dipertahankan untuk logo, heading dekoratif, dan badge

#### Temuan 2: Kontras Teks Rendah pada Beberapa Elemen

- **Temuan:** 6 dari 10 responden mengeluhkan teks dengan opacity rendah (0.3–0.5) sulit dibaca di atas background gelap.
- **Data pendukung:**
  - Wawancara R7: "Kontras antara teks dan background di beberapa tempat kurang. Teks rgba(255,255,255,0.4) di atas background gelap itu terlalu rendah kontrasnya"
  - Wawancara R4: "Tulisan kecil-kecil yang pakai font pixel itu kadang susah dibaca"
  - Kuesioner: R7 memberikan skor 2 untuk Q11 (Visual) — kontras menjadi faktor
- **Keputusan:** **UBAH**
- **Alasan:** Berdasarkan WCAG 2.1 Level AA, rasio kontras minimum untuk teks normal adalah 4.5:1. Teks dengan opacity 0.3–0.4 di atas background #05020f menghasilkan rasio kontras sekitar 2:1 — jauh di bawah standar. Color Theory juga menyatakan bahwa readability harus diprioritaskan di atas estetika.
- **Perubahan:**
  - Opacity minimum teks informasi: dari 0.3 → 0.55
  - Opacity minimum teks sekunder: dari 0.4 → 0.6
  - Teks placeholder/hint: dari 0.25 → 0.45
  - Warna teks deskripsi produk: dari rgba(255,255,255,0.75) → rgba(255,255,255,0.85)


#### Temuan 3: Tidak Ada Pilihan Ukuran dan Warna di Halaman Detail Produk

- **Temuan:** 7 dari 10 responden menyatakan bahwa halaman detail produk tidak menyediakan opsi pemilihan ukuran (size) dan warna sebelum menambahkan ke keranjang.
- **Data pendukung:**
  - Wawancara R4: "Saya agak bingung, nggak ada pilihan ukuran dan warna yang jelas. Langsung masuk keranjang tanpa pilih size"
  - Wawancara R7: "Nggak ada size chart, nggak ada pilihan warna/ukuran yang proper"
  - Kuesioner: Q14 (Info Produk) rata-rata 4.1 — baik tapi belum sempurna, size/color menjadi gap
- **Keputusan:** **UBAH**
- **Alasan:** Berdasarkan Norman's Design Principle (Constraints), sistem harus memaksa pengguna memilih parameter yang diperlukan sebelum melanjutkan aksi. Mental Model pengguna e-commerce fashion mengharapkan adanya pilihan size dan warna (berdasarkan pengalaman di Shopee, Zalora, H&M). Nielsen's Heuristic #2 (Match Between System and Real World) — konvensi e-commerce fashion selalu menyediakan opsi ini.
- **Perubahan:**
  - Tambahkan size selector (S, M, L, XL) dengan visual button group di halaman detail
  - Tambahkan color selector (jika produk memiliki varian warna) dengan color swatch
  - Size dan color menjadi parameter wajib sebelum "Add to Cart"
  - Tampilkan size guide link untuk referensi

#### Temuan 4: Seller Center Kurang Panduan untuk Pengguna Baru

- **Temuan:** 6 dari 10 responden merasa Seller Center kurang intuitif, terutama bagi yang baru pertama kali menggunakannya.
- **Data pendukung:**
  - Kuesioner: Q15 (Seller Center) rata-rata 3.6 — skor terendah dari semua pertanyaan tambahan
  - Wawancara R4: "Saya coba-coba, tapi agak overwhelming. Banyak field yang harus diisi. Mungkin bisa dikasih panduan atau tooltip"
  - Wawancara R7: "Form modal-nya panjang, bisa dipecah jadi steps"
  - SUS: Responden dengan pengalaman seller rendah (R4, R7) memberikan skor SUS terendah
- **Keputusan:** **UBAH**
- **Alasan:** Berdasarkan Nielsen's Heuristic #10 (Help and Documentation), sistem yang kompleks harus menyediakan bantuan yang mudah diakses. Norman's Visibility principle menyatakan bahwa pengguna harus bisa melihat apa yang perlu dilakukan. Untuk pengguna baru, onboarding guidance sangat penting (Krug, 2014 — "Don't Make Me Think").
- **Perubahan:**
  - Tambahkan empty state dengan panduan langkah-langkah di Seller Center (saat belum ada produk)
  - Tambahkan tooltip/hint pada field-field form yang kurang jelas
  - Tambahkan label "OPSIONAL" pada field yang tidak wajib
  - Grafik penjualan diberi label "SIMULASI" jika data belum tersedia


#### Temuan 5: Navigasi Terlalu Banyak Level dan Tombol Kembali Tidak Konsisten

- **Temuan:** 5 dari 10 responden merasa navigasi memiliki terlalu banyak level (top bar + main bar + nav tabs + bottom nav = 4 level), dan 4 responden mengeluhkan tombol "← KEMBALI" yang selalu mengarah ke home.
- **Data pendukung:**
  - Wawancara R7: "Terlalu banyak navigation options. Header punya top bar, main bar, dan nav tabs — itu 3 level navigasi. Ditambah bottom nav, jadi 4. Information overload"
  - Wawancara R4: "Nav tabs di atas itu terlalu banyak, saya nggak pernah pakai semua. Dan tombol KEMBALI kadang bawa saya ke home, bukan ke halaman sebelumnya"
  - Kuesioner: Q2 (kompleksitas) — R7 memberi skor 3, R4 memberi skor 3
- **Keputusan:** **UBAH SEBAGIAN**
- **Alasan:** Berdasarkan Hick's Law, waktu pengambilan keputusan meningkat secara logaritmik dengan jumlah pilihan. Nielsen's Heuristic #3 (User Control and Freedom) menyatakan pengguna harus bisa "undo" dan kembali ke state sebelumnya. Namun, navigasi multi-level juga memiliki keuntungan untuk discoverability (Nielsen's Heuristic #7). Keputusan: simplifikasi tanpa menghilangkan akses.
- **Perubahan:**
  - Top bar: tetap dipertahankan (informasi penting) namun visual lebih subtle
  - Nav tabs: tetap ada namun diberi indikator scroll yang lebih jelas (fade edge)
  - Tombol "← KEMBALI": diubah behavior-nya agar kembali ke halaman sebelumnya (bukan selalu ke home), menggunakan history stack sederhana
  - Bottom nav: tetap dipertahankan (sudah mendapat feedback positif dari 7/10 responden)

---

### 4.4 Tabel Ringkasan Perubahan

| No | Halaman/Komponen | Temuan | Keputusan | Perubahan |
|----|-----------------|--------|-----------|-----------|
| 1 | Global (semua halaman) | Font pixel 7–9px sulit dibaca | UBAH | Minimum font size 10px untuk teks fungsional |
| 2 | Global (semua halaman) | Kontras teks terlalu rendah (opacity 0.3–0.4) | UBAH | Minimum opacity 0.55 untuk teks informasi |
| 3 | Detail Page | Tidak ada pilihan ukuran dan warna | UBAH | Tambah size selector dan color swatch |
| 4 | Seller Center | Kurang panduan untuk pengguna baru | UBAH | Tambah onboarding guide, tooltip, label opsional |
| 5 | Header & Navigation | Terlalu banyak level navigasi, tombol kembali inkonsisten | UBAH SEBAGIAN | Tombol kembali ke halaman sebelumnya, nav tabs diberi scroll indicator |
| — | Homepage | Visual unik dan menarik | TIDAK UBAH | Dipertahankan sebagai kekuatan brand identity |
| — | Checkout Flow | Progress bar jelas dan mudah diikuti | TIDAK UBAH | Dipertahankan, sudah mendapat skor tinggi (Q13=4.1) |
| — | Bottom Navigation | Sangat membantu navigasi mobile | TIDAK UBAH | Dipertahankan, feedback positif 7/10 responden |

---


## BAB 5 — Justifikasi Homescreen (LO2)

### 5.1 Deskripsi Homescreen

Homescreen NEXWEAR adalah halaman yang ditampilkan setelah pengguna berhasil login. Halaman ini berfungsi sebagai pusat navigasi dan discovery produk. Berikut elemen-elemen visual yang ada pada homescreen (versi final setelah testing):

[GAMBAR: Screenshot lengkap homescreen NEXWEAR dari atas hingga bawah]

**Struktur Vertikal Homescreen (dari atas ke bawah):**
1. Header (sticky): Top Bar → Main Bar (Logo + Search + Cart) → Nav Tabs
2. Ticker Marquee (promo berjalan)
3. Hero Banner (carousel + side panels)
4. Category Strip (9 kategori)
5. Mini Banners (4 promo card)
6. Section Title "REKOMENDASI UNTUK KAMU"
7. Filter Tabs (6 opsi)
8. Product Grid (6 kolom)
9. Footer (4 kolom)
10. Bottom Navigation (fixed)

**Background Global:**
- Canvas animasi StarField (bintang berkedip)
- Body overlay: scanline effect + grid pattern
- Warna dasar: #05020f (sangat gelap, hampir hitam dengan hint ungu)

---

### 5.2 Justifikasi per Elemen Desain

#### 5.2.1 Header — Sticky Multi-Level Navigation

**Deskripsi:** Header terdiri dari 3 bagian: top bar (info + user), main bar (logo + search + cart), dan nav tabs (kategori).

**Justifikasi Teori:**

- **Gestalt Principle of Proximity:** Ketiga bagian header dikelompokkan secara vertikal dengan separator visual (border-bottom) yang tipis, menciptakan persepsi satu unit navigasi yang kohesif namun tetap terbedakan fungsinya.

- **Fitts' Law:** Search bar ditempatkan di tengah main bar dengan lebar penuh (flex: 1), menciptakan target area yang sangat besar. Menurut Fitts' Law, semakin besar target dan semakin dekat posisinya, semakin cepat pengguna dapat mengaksesnya. Search adalah fitur yang paling sering digunakan di e-commerce (data: 8/10 responden menggunakan search saat testing).

- **Nielsen's Heuristic #7 (Flexibility and Efficiency of Use):** Nav tabs menyediakan shortcut langsung ke kategori tanpa perlu melalui homepage. Power users (R3, R5, R9) mengapresiasi akses cepat ini.

- **Norman's Visibility:** Cart icon dengan badge count (angka merah) memberikan visibility terhadap status keranjang tanpa perlu membuka halaman cart. Ini sesuai dengan data wawancara — 7/10 responden menyatakan bottom nav dan header membantu navigasi.

**Perubahan setelah testing:** Font pada nav tabs diperbesar dari 13px menjadi tetap 13px (sudah memenuhi standar), namun ditambahkan fade indicator di ujung kanan untuk menunjukkan bahwa tabs bisa di-scroll.


#### 5.2.2 Ticker Marquee — Promo Berjalan

**Deskripsi:** Bar horizontal berwarna pink (#ff2d78) dengan teks berjalan (marquee) berisi informasi promo: "GRATIS ONGKIR", "GARANSI 30 HARI", "KUALITAS PREMIUM", dll.

**Justifikasi Teori:**

- **Gestalt Principle of Continuity:** Gerakan horizontal yang kontinu menciptakan persepsi aliran informasi yang tidak terputus. Mata pengguna secara natural mengikuti arah gerakan, meningkatkan kemungkinan informasi terbaca.

- **Color Theory:** Warna pink solid (#ff2d78) dengan teks hitam menciptakan kontras maksimal dan menarik perhatian secara instan. Pink dipilih karena merupakan warna brand utama NEXWEAR yang diasosiasikan dengan energi dan urgensi — sesuai untuk pesan promosi.

- **Norman's Feedback Principle:** Ticker memberikan feedback bahwa website "hidup" dan aktif. Animasi subtle ini menciptakan persepsi bahwa toko sedang beroperasi dan ada penawaran yang berlangsung.

- **Mental Model:** Pengguna e-commerce Indonesia familiar dengan ticker promo (Shopee, Tokopedia memiliki elemen serupa). Ini sesuai dengan Nielsen's Heuristic #2 (Match Between System and Real World).

**Data pendukung:** Tidak ada responden yang mengeluhkan ticker — elemen ini diterima secara natural karena sesuai mental model belanja online.

#### 5.2.3 Hero Banner — Carousel dengan Side Panels

**Deskripsi:** Banner utama berukuran besar (height: 260px) dengan 3 slide yang berganti otomatis setiap 4 detik. Di sisi kanan terdapat 2 panel kecil (New Arrivals, Bundle Set). Setiap slide memiliki: eyebrow text, heading besar, subtitle, CTA button, dan emoji dekoratif.

**Justifikasi Teori:**

- **Gestalt Principle of Figure-Ground:** Banner utama (figure) memiliki gradient background yang berbeda dari area sekitarnya (ground), menciptakan focal point yang jelas. Teks putih di atas gradient gelap memastikan readability.

- **Fitts' Law:** CTA button ("BELANJA SEKARANG →") ditempatkan di area kiri-tengah banner dengan ukuran yang cukup besar (padding: 10px 20px). Posisi ini berada di natural reading path (F-pattern) pengguna.

- **Color Theory & Visual Hierarchy:**
  - Eyebrow text: kuning (var(--yellow)) — menarik perhatian pertama
  - Heading: putih besar dengan efek rgb-shift — focal point utama
  - Subtitle: putih opacity rendah — informasi sekunder
  - CTA: warna solid (pink/cyan) — call to action yang jelas
  Hierarki ini mengikuti prinsip visual weight: ukuran + warna + kontras menentukan urutan baca.

- **Norman's Affordance:** CTA button dengan warna solid dan teks aksi ("BELANJA SEKARANG →") memberikan affordance yang jelas bahwa elemen ini bisa diklik dan akan membawa ke halaman produk.

- **Nielsen's Heuristic #1 (Visibility of System Status):** Dot indicator di bawah banner (3 titik, aktif = pink lebar, inaktif = putih kecil) menunjukkan posisi slide saat ini dan jumlah total slide.

**Data pendukung:** 9/10 responden menyatakan visual homepage menarik. R6: "Desainnya unik banget, beda dari yang lain." Hero banner menjadi elemen pertama yang menciptakan first impression positif.


#### 5.2.4 Category Strip — Grid Navigasi Kategori

**Deskripsi:** Grid horizontal 9 kolom berisi ikon emoji dalam lingkaran dengan label teks di bawahnya. Background card gelap dengan border cyan subtle.

**Justifikasi Teori:**

- **Gestalt Principle of Similarity:** Semua 9 item kategori memiliki struktur visual identik (lingkaran + ikon + label), menciptakan persepsi bahwa mereka adalah satu kelompok dengan fungsi yang sama — yaitu navigasi ke kategori.

- **Gestalt Principle of Proximity:** Jarak antar item kategori seragam (padding: 8px 4px), dan seluruh strip dibungkus dalam satu container dengan background dan border yang sama. Ini memperkuat persepsi grouping.

- **Norman's Affordance & Signifier:** Lingkaran dengan background cyan subtle dan hover effect (scale + translateY) memberikan signifier bahwa elemen ini interaktif. Cursor berubah menjadi pointer saat hover, memperkuat affordance.

- **Mental Model:** Layout kategori horizontal dengan ikon ini mengikuti pola yang familiar di aplikasi e-commerce Indonesia (Shopee, Tokopedia, Bukalapak semuanya memiliki category strip serupa). Ini mengurangi cognitive load karena pengguna sudah memiliki mental model yang sesuai.

- **Fitts' Law:** Setiap item kategori memiliki area klik yang cukup besar (48x48px ikon + padding), memudahkan tap pada perangkat mobile.

**Data pendukung:** Wawancara R4 menyebutkan bahwa meskipun beberapa nama kategori membingungkan (Utility vs Accessory), format visual strip ini mudah dipahami. Perubahan setelah testing: tidak ada perubahan pada layout, hanya penambahan tooltip/deskripsi singkat saat hover.

#### 5.2.5 Mini Banners — Promo Cards Grid

**Deskripsi:** 4 kartu promo dalam grid horizontal (Cashback 25%, Free Ongkir, Flash Sale, Top Brand). Setiap kartu memiliki gradient background unik, ikon emoji, judul, dan subtitle.

**Justifikasi Teori:**

- **Gestalt Principle of Similarity:** Keempat banner memiliki dimensi dan struktur yang identik (height: 90px, centered content), menciptakan visual rhythm yang konsisten.

- **Color Theory:** Setiap banner menggunakan gradient warna yang berbeda namun tetap dalam palette cyberpunk:
  - Cashback: Pink gradient — urgensi, aksi
  - Free Ongkir: Cyan gradient — kepercayaan, keuntungan
  - Flash Sale: Purple gradient — eksklusivitas
  - Top Brand: Yellow gradient — premium, kualitas
  Variasi warna ini mencegah monotoni sekaligus membantu pengguna membedakan setiap penawaran secara cepat (pre-attentive processing).

- **Norman's Feedback:** Hover effect (scale 1.02) memberikan feedback visual bahwa elemen ini interaktif, tanpa perubahan yang terlalu dramatis yang bisa mengganggu.

**Data pendukung:** Tidak ada keluhan spesifik tentang mini banners dari responden. Elemen ini berfungsi sebagai visual break antara category strip dan product grid, sesuai dengan prinsip chunking dalam cognitive psychology.


#### 5.2.6 Filter Tabs & Product Grid — Konten Utama

**Deskripsi:** Section "REKOMENDASI UNTUK KAMU" dengan 6 tab filter (Semua, Terlaris, Terbaru, Harga ↑, Harga ↓, Rating) diikuti grid produk 6 kolom.

**Justifikasi Teori:**

- **Nielsen's Heuristic #7 (Flexibility and Efficiency of Use):** Filter tabs memungkinkan pengguna menyesuaikan tampilan produk sesuai preferensi tanpa meninggalkan halaman. Power users dapat langsung filter "Terlaris" atau "Harga ↑", sementara novice users cukup scroll di tab "Semua".

- **Gestalt Principle of Similarity:** Semua product card memiliki struktur visual yang identik: badge → gambar → nama → harga → sold + rating → tombol. Konsistensi ini memungkinkan pengguna melakukan scanning cepat dan perbandingan antar produk.

- **Fitts' Law:** Tombol "+ KERANJANG" yang muncul saat hover memiliki lebar full-width (100% dari card), menciptakan target area maksimal. Pada mobile, tombol ini selalu visible untuk menghindari masalah hover yang tidak ada di touchscreen.

- **Color Theory & Visual Hierarchy pada Product Card:**
  - Badge (NEW/HOT/SALE): warna solid kontras tinggi — menarik perhatian pertama
  - Harga: kuning besar (var(--yellow), fontSize 16, fontWeight 900) — informasi terpenting
  - Harga coret: putih opacity rendah + strikethrough — konteks diskon
  - Nama produk: putih uppercase — identifikasi produk
  - Sold + Rating: putih opacity sedang — social proof

- **Norman's Constraints:** Tab filter yang aktif ditandai dengan warna pink dan underline, mencegah ambiguitas tentang filter mana yang sedang diterapkan. Ini juga sesuai dengan Nielsen's Heuristic #1 (Visibility of System Status).

**Data pendukung:**
- Kuesioner Q12 (Pencarian/Filter) rata-rata 3.9 — filter berfungsi baik
- Wawancara R5: "Filter-nya lengkap, bisa sort by harga dan rating"
- 8/10 responden berhasil menemukan produk yang dicari dalam waktu < 30 detik

**Perubahan setelah testing:** Font pada tombol "+ KERANJANG" diperbesar dari 9px menjadi 10px sesuai temuan readability.

#### 5.2.7 Footer — Informasi & Trust Signals

**Deskripsi:** Footer 4 kolom berisi: brand description + payment badges, link kategori, link layanan, dan link sosial media.

**Justifikasi Teori:**

- **Gestalt Principle of Proximity:** Informasi dikelompokkan dalam 4 kolom yang jelas terpisah, memudahkan scanning. Setiap kolom memiliki heading (Orbitron, cyan) yang berfungsi sebagai label grup.

- **Mental Model:** Footer dengan link navigasi dan trust signals (SSL, VISA, GOPAY, OVO, COD) mengikuti konvensi e-commerce yang sudah mapan. Pengguna mengharapkan informasi ini ada di bagian bawah halaman.

- **Norman's Visibility:** Payment badges (SSL, VISA, GOPAY, OVO, COD) memberikan visibility terhadap metode pembayaran yang tersedia tanpa perlu masuk ke halaman checkout. Ini membangun trust dan mengurangi uncertainty.

- **Color Theory:** Heading footer menggunakan warna cyan (var(--cyan)) yang konsisten dengan warna sekunder brand, menciptakan visual consistency dari header hingga footer.


#### 5.2.8 Bottom Navigation — Fixed Mobile Navigation

**Deskripsi:** Bar navigasi fixed di bagian bawah layar (height: 60px) dengan 5 item: Home, Cari, Cart (center, pink circle), Pesanan, Jual.

**Justifikasi Teori:**

- **Fitts' Law:** Bottom navigation ditempatkan di zona jempol (thumb zone) — area yang paling mudah dijangkau saat menggunakan smartphone dengan satu tangan. Setiap item memiliki area tap yang besar (flex: 1, full height). Item Cart di tengah memiliki ukuran lebih besar (44x44px circle) karena merupakan aksi yang paling sering dilakukan.

- **Nielsen's Heuristic #1 (Visibility of System Status):** Item aktif ditandai dengan warna pink (var(--pink)), memberikan feedback visual tentang halaman mana yang sedang dilihat. Cart badge (angka kuning) menunjukkan jumlah item di keranjang secara real-time.

- **Gestalt Principle of Similarity:** Semua 5 item memiliki struktur identik (ikon + label), kecuali Cart yang dibedakan dengan lingkaran pink — ini menggunakan prinsip **Figure-Ground** untuk membuat Cart menjadi focal point navigasi.

- **Norman's Affordance:** Lingkaran pink pada Cart dengan animasi pulse memberikan affordance yang sangat kuat bahwa ini adalah elemen interaktif utama. Animasi pulse menciptakan sense of urgency — "ada sesuatu di keranjang Anda".

- **Mental Model:** 5-item bottom navigation adalah pola standar di aplikasi mobile modern (Instagram, Shopee, Tokopedia). Pengguna sudah memiliki mental model yang kuat untuk navigasi jenis ini.

**Data pendukung:**
- 7/10 responden menyatakan bottom nav sangat membantu navigasi
- Wawancara R4: "Bottom nav-nya membantu banget"
- Tidak ada responden yang mengeluhkan bottom nav — ini adalah elemen dengan feedback paling positif

**Perubahan setelah testing:** Tidak ada perubahan. Bottom navigation dipertahankan sepenuhnya karena mendapat feedback positif yang konsisten.

#### 5.2.9 Background — StarField & Visual Effects

**Deskripsi:** Canvas animasi dengan 180 bintang berkedip (beberapa berwarna pink/cyan), overlay scanline, dan grid pattern.

**Justifikasi Teori:**

- **Gestalt Principle of Figure-Ground:** Background effects (bintang, scanline, grid) memiliki opacity sangat rendah dan z-index rendah, memastikan mereka tetap sebagai "ground" dan tidak bersaing dengan konten utama (figure). Pointer-events: none memastikan tidak ada interferensi dengan interaksi.

- **Color Theory:** Bintang berwarna pink dan cyan (15% dari total) menciptakan subtle brand reinforcement tanpa mengganggu. Warna-warna ini muncul di peripheral vision, memperkuat identitas cyberpunk secara subliminal.

- **Norman's Aesthetic-Usability Effect:** Penelitian menunjukkan bahwa desain yang estetis dipersepsikan lebih mudah digunakan (Tractinsky et al., 2000). StarField berkontribusi pada kesan premium dan immersive yang membuat pengguna lebih toleran terhadap minor usability issues.

**Data pendukung:**
- 9/10 responden menyatakan visual website menarik dan unik
- Wawancara R7 menyebutkan animasi bintang "agak distracting" — namun ini adalah minority opinion (1/10)
- Keputusan: dipertahankan karena kontribusinya terhadap brand identity lebih besar daripada distraksi minimal


#### 5.2.10 Color System — Keseluruhan Palette

**Deskripsi:** NEXWEAR menggunakan dark theme dengan 5 warna utama:
- Background: #05020f (sangat gelap)
- Pink: #ff2d78 (aksi utama, CTA, brand)
- Cyan: #00f5ff (sekunder, informasi, link)
- Yellow: #ffe500 (harga, highlight, badge)
- Purple: #b400ff (aksen, dekoratif)

**Justifikasi Teori:**

- **Color Theory — Psikologi Warna:**
  - **Pink/Magenta:** Energi, keberanian, kreativitas — sesuai dengan brand personality NEXWEAR yang berani dan futuristik. Digunakan untuk CTA karena menciptakan urgensi.
  - **Cyan:** Teknologi, kepercayaan, ketenangan — digunakan untuk elemen informasi dan navigasi karena memberikan kesan reliable.
  - **Yellow/Gold:** Kekayaan, optimisme, perhatian — digunakan untuk harga karena secara psikologis menarik perhatian dan diasosiasikan dengan nilai/value.
  - **Dark background:** Sophistication, premium, modern — mengurangi eye strain untuk browsing lama dan membuat warna neon lebih "pop".

- **Color Theory — Kontras & Hierarki:**
  - Kontras tertinggi: Yellow text on dark background (harga) — elemen terpenting
  - Kontras tinggi: White text on dark background (nama produk, heading)
  - Kontras sedang: Cyan/Pink on dark (navigasi, tombol) — elemen interaktif
  - Kontras rendah: White opacity 0.5–0.6 on dark (teks sekunder) — informasi pendukung

- **Nielsen's Heuristic #4 (Consistency and Standards):** Warna digunakan secara konsisten di seluruh aplikasi:
  - Pink SELALU = aksi utama (checkout, beli, simpan)
  - Cyan SELALU = aksi sekunder (kembali, lihat, info)
  - Yellow SELALU = harga dan highlight penting
  Konsistensi ini membangun pattern recognition yang mempercepat penggunaan.

**Data pendukung:**
- Kuesioner Q11 (Visual) rata-rata 3.9 — mayoritas positif
- Wawancara R6: "Warna-warnanya cocok, neon di background gelap itu eye-catching"
- Perubahan setelah testing: opacity minimum teks dinaikkan (Temuan 2) untuk memenuhi standar kontras WCAG

---

### 5.3 Kaitan dengan Data Pengguna

Desain homescreen final NEXWEAR merupakan hasil iterasi berdasarkan data dari Bab 3:

| Elemen Homescreen | Feedback dari Data Gathering | Keputusan Final |
|-------------------|------------------------------|-----------------|
| Header & Nav Tabs | 5/10 merasa terlalu banyak level navigasi | Dipertahankan dengan penambahan scroll indicator; tidak dihilangkan karena discoverability penting |
| Ticker Marquee | Tidak ada keluhan | Dipertahankan tanpa perubahan |
| Hero Banner | 9/10 menyukai visual | Dipertahankan tanpa perubahan |
| Category Strip | R4 bingung nama kategori | Dipertahankan, ditambah hover tooltip |
| Mini Banners | Tidak ada keluhan | Dipertahankan tanpa perubahan |
| Filter Tabs | Q12 rata-rata 3.9 (baik) | Dipertahankan tanpa perubahan |
| Product Grid | Font tombol terlalu kecil (8/10) | Font diperbesar dari 9px → 10px |
| Footer | Tidak ada keluhan | Dipertahankan tanpa perubahan |
| Bottom Nav | 7/10 feedback positif | Dipertahankan tanpa perubahan |
| Color System | Kontras rendah di beberapa teks (6/10) | Opacity minimum dinaikkan ke 0.55 |
| StarField | 1/10 merasa distracting | Dipertahankan (majority rule: 9/10 positif) |

**Kesimpulan:** Homescreen NEXWEAR mempertahankan identitas visual cyberpunk yang menjadi kekuatan utamanya (9/10 responden positif), sambil melakukan perbaikan pada aspek readability (font size dan kontras) yang menjadi keluhan utama. Pendekatan ini sesuai dengan prinsip **Aesthetic-Usability Effect** — desain yang menarik secara estetis dapat ditoleransi memiliki minor usability issues, namun fundamental readability tetap harus dipenuhi.

---

*Dokumen ini disusun sebagai Assessment of Learning (AOL) mata kuliah Human and Computer Interaction, BINUS University Bandung.*
