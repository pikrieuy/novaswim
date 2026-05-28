# Teknologi Stack — NEXWEAR Store

---

## Frontend

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| React | 19.2 | Library UI berbasis komponen |
| Vite | 7.3 | Build tool & dev server (sangat cepat) |
| CSS (custom) | — | Styling dengan CSS Variables + inline styles |
| Google Fonts | — | Orbitron, Press Start 2P, Share Tech Mono |

## Backend (BaaS)

| Teknologi | Fungsi |
|-----------|--------|
| Supabase Auth | Autentikasi (email/password, email verification) |
| Supabase Database | PostgreSQL untuk products, orders, reviews, addresses, wishlist |
| Supabase Storage | Upload gambar produk (bucket: product-images) |
| Supabase Realtime | Notifikasi real-time perubahan status order |

## Deployment & DevOps

| Teknologi | Fungsi |
|-----------|--------|
| Vercel | Hosting & auto-deploy dari GitHub |
| GitHub | Version control & repository |
| PWA (Service Worker) | Offline support & installable app |

## Database Schema

```
public.products        — Produk utama toko
public.seller_products — Produk dari seller/user
public.orders          — Data pesanan
public.order_items     — Item per pesanan
public.reviews         — Ulasan produk
public.addresses       — Alamat pengiriman user
public.wishlist        — Wishlist user (NEW)
```

## Arsitektur

```
[Browser/PWA]
     |
     ├── React SPA (Vite build)
     |       ├── Components (ProductCard, Header, BottomNav, etc.)
     |       ├── Pages (Home, Detail, Checkout, Seller, etc.)
     |       └── Store (useStore.js — custom hook state management)
     |
     ├── Supabase Client (@supabase/supabase-js)
     |       ├── Auth (login, register, session)
     |       ├── Database (CRUD operations)
     |       ├── Storage (image upload)
     |       └── Realtime (order status changes)
     |
     └── Deployed on Vercel (auto-deploy from GitHub master)
```
