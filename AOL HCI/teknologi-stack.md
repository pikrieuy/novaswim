# Teknologi Stack — NEXWEAR Store

---

## Frontend

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| React | 19.2 | Library UI berbasis komponen |
| Vite | 7.3 | Build tool & dev server (sangat cepat) |
| react-icons | 5.6 | Google Material Design Icons (SVG) |
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

## Performance

| Metrik | Nilai |
|--------|-------|
| Bundle utama | 410 KB |
| Initial gzip | 120 KB |
| Page chunks | 12 lazy-loaded files |
| Code splitting | React.lazy() + Suspense |

## Database Schema

```
public.products        — Produk utama toko (+ colors array)
public.seller_products — Produk dari seller/user
public.orders          — Data pesanan (+ realtime subscription)
public.order_items     — Item per pesanan (size, color)
public.reviews         — Ulasan produk
public.addresses       — Alamat pengiriman user
public.wishlist        — Wishlist user (Supabase sync)
```

## Arsitektur

```
[Browser/PWA]
     |
     ├── React SPA (Vite build, code-split)
     |       ├── Components (ProductCard, Header, BottomNav, SizeGuideModal, etc.)
     |       ├── Pages (lazy-loaded: Home, Detail, Checkout, Seller, etc.)
     |       ├── Store (useStore.js — custom hook state management)
     |       └── Locale (src/locale/id.js — i18n strings)
     |
     ├── Supabase Client (@supabase/supabase-js)
     |       ├── Auth (login, register, session)
     |       ├── Database (CRUD operations)
     |       ├── Storage (image upload)
     |       └── Realtime (order status changes)
     |
     └── Deployed on Vercel (auto-deploy from GitHub master)
```

## Accessibility

| Fitur | Status |
|-------|--------|
| Focus indicators | ✅ 2px cyan outline (focus-visible) |
| Min font size | ✅ 9-10px (Press Start 2P), 12px (body) |
| Min contrast | ✅ Opacity 0.55+ untuk semua teks |
| Touch targets | ✅ Min 44px pada mobile |
| ARIA labels | ✅ Pada icon-only buttons (bottom nav) |
| Keyboard nav | ✅ Semua elemen focusable |
