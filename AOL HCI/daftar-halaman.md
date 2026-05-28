# Daftar Halaman & Route — NEXWEAR Store

---

## Halaman Publik (Belum Login)

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| / | Auth Page | Login & Register dengan tab switcher |

## Halaman Utama (Setelah Login)

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| home | Home Page | Landing page: hero, kategori, filter, product grid, footer |
| search | Search Page | Pencarian dengan autocomplete, filter, sort, price range |
| detail (+ id) | Detail Page | Info lengkap produk: gallery, size selector, review, share |
| wishlist | Wishlist Page | Daftar produk yang di-wishlist user |

## Halaman Kategori

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| outwear | Category: Out Wear | Jaket, hoodie, outer |
| accessory | Category: Accessory | Tas, perhiasan, aksesoris |
| device | Category: Device | Gadget, smartwatch |
| utility | Category: Utility | Syal, topi, utility items |
| clothing | Category: Clothing | Kaos, celana, pakaian |
| shoes | Category: Shoes | Sepatu, sneakers |
| set | Category: Set | Bundle/paket produk |
| newarrivals | Category: New Arrivals | Produk terbaru |
| sale | Category: Sale & Promo | Produk diskon |

## Halaman Checkout Flow

| Route | Step | Halaman | Deskripsi |
|-------|------|---------|-----------|
| cart | 1 | Cart Page | Keranjang belanja + voucher |
| address | 2 | Address Page | Pilih/tambah alamat pengiriman |
| checkout | 3 | Checkout Page | Pilih kurir + pembayaran |
| success | 4 | Success Page | Konfirmasi pembayaran berhasil |

## Halaman Manajemen

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| orders | Orders Page | Lacak pesanan + filter status |
| seller | Seller Page | Dashboard toko + CRUD produk |
| profile | Profile Page | Edit nama & avatar |
| notif | Notifikasi | Daftar notifikasi |
| chat | Chat | Pesan dari NEXWEAR Official |

## Komponen Overlay/Drawer

| Trigger | Komponen | Deskripsi |
|---------|----------|-----------|
| cart_panel | Cart Panel | Drawer keranjang dari kanan |
| (modal) | Product Form Modal | Form tambah/edit produk seller |
| (lightbox) | Image Zoom | Zoom gambar produk di detail |
