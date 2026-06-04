# Rencana Pengembangan Versi Mobile NEXWEAR (Aplikasi Mobile Native)

## 1. Analisis Kebutuhan & Platform
Kita sudah memiliki web/PWA (React + Vite). Jika ingin beralih ke mobile seutuhnya (Native), opsi utamanya adalah menggunakan **React Native (Expo)**. Mengapa?
- **Code Reuse:** Kita bisa mendaur ulang banyak *logic* dari PWA sebelumnya (Zustand untuk state, Supabase untuk database, komponen UI tertentu).
- **Performa:** React Native menawarkan akses langsung ke API native perangkat.
- **Ekosistem:** React Native kaya akan library untuk navigasi, animasi gesture, dll.

## 2. Riset UI/UX Mobile (Cyberpunk/Techwear Theme)
Berdasarkan estetika NEXWEAR saat ini, berikut adalah panduan UX/UI untuk mobile:

### A. Pola Navigasi (Navigation Patterns)
1. **Bottom Tab Navigation:** (Sudah diimplementasikan di PWA, tinggal diterjemahkan ke React Native `@react-navigation/bottom-tabs`). Ikon menyala (neon effect) saat aktif.
2. **Gesture-based Navigation:** Swipe kanan untuk kembali (back), swipe kiri untuk buka *cart drawer*.
3. **Immersive Header:** Header di mobile sebaiknya menyatu dengan *scroll* (Collapsible/Animated Header) agar ruang produk lebih luas.

### B. Gestur & Animasi (Micro-Interactions)
- **Haptic Feedback:** Setiap kali item masuk ke keranjang atau tombol ditekan, berikan *haptic feedback* (getaran halus) menggunakan `expo-haptics`.
- **Swipe-to-Action:** Di halaman keranjang, pengguna bisa men-*swipe* item ke kiri untuk menghapus (`react-native-gesture-handler` + `react-native-reanimated`).
- **Glow Effects:** Sulit menggunakan `box-shadow` CSS di Android, jadi untuk neon glow kita akan banyak mengandalkan gambar SVG berbayang atau library spesifik seperti `@shopify/react-native-skia` untuk membuat shader neon cyberpunk yang efisien.

### C. Komponen Kunci (Mobile Specific)
- **Bottom Sheet:** Untuk memilih ukuran dan warna produk, hindari halaman baru, gunakan *Bottom Sheet* (`@gorhom/bottom-sheet`) yang muncul dari bawah layar.
- **Pull-to-Refresh:** Animasi loading kustom saat men-*scroll* ke bawah untuk memuat ulang data (misal: tulisan "UPLINKING..." khas cyberpunk).
- **Carousel & Paging:** Untuk gambar produk di Detail Page, gunakan carousel sentuh (Swiper) atau `FlatList` dengan indikator titik berkedip.

## 3. Tech Stack & Dependencies yang Diperlukan (Skills)

Jika kita membuat project baru berbasis Expo/React Native, ini adalah *library* wajib:

1. **Core Framework:**
   - `expo` (SDK terbaru)
   - `react-native`
   
2. **Navigation:**
   - `@react-navigation/native`
   - `@react-navigation/bottom-tabs`
   - `@react-navigation/stack`

3. **State Management & Backend:**
   - `zustand` (Sama seperti web)
   - `@supabase/supabase-js`
   - `@react-native-async-storage/async-storage` (Pengganti localStorage untuk token auth)

4. **UI & Animations (The Cyberpunk Sauce):**
   - `react-native-reanimated` (Untuk animasi performa tinggi / 60fps)
   - `react-native-gesture-handler` (Gestur sentuh)
   - `@shopify/react-native-skia` (Opsional: untuk efek visual rumit seperti scanlines, glitch, atau gradasi kompleks)
   - `expo-linear-gradient` (Untuk latar belakang)
   - `expo-blur` (Untuk efek *glassmorphism* di bottom nav/header)
   - `expo-haptics` (Getaran)
   - `expo-font` (Memuat font Orbitron & Press Start 2P)

## 4. Rencana Eksekusi (Langkah demi Langkah)

### Fase 1: Setup & Konfigurasi
- Inisialisasi proyek baru dengan `npx create-expo-app nexwear-mobile --template blank`.
- Pasang semua *dependencies* (Navigation, Reanimated, Supabase, dll).
- Muat custom font (Orbitron, Press Start 2P, Share Tech Mono) di file `App.js`.
- Buat *theme configuration* (warna neon, background) dan setup koneksi Supabase.

### Fase 2: Autentikasi & Routing
- Buat Stack Navigator utama (Auth Stack vs Main Stack).
- Terjemahkan halaman Auth (Login/Register) dengan Supabase. Pastikan token tersimpan di `AsyncStorage`.
- Buat Bottom Tab Navigator untuk halaman utama (Home, Search, Orders, Profile).

### Fase 3: Pembuatan UI/UX Komponen Dasar
- Komponen Kartu Produk (`ProductCard`) dengan *FlatList*.
- Header yang berubah warna saat *scroll*.
- Tombol dengan efek "press" (klik).

### Fase 4: Halaman Detail & Fitur E-commerce
- Halaman Detail Produk dengan gambar yang dapat di-*swipe* (Carousel).
- Bottom Sheet untuk ukuran & warna.
- Implementasi fungsi Add to Cart & Cart Screen.

### Fase 5: Integrasi & Polishing (Glitch/Cyberpunk Polish)
- Tambahkan Haptic Feedback di setiap aksi penting.
- Masukkan *Sound Effects* UI kecil-kecilan jika perlu.
- Testing di perangkat fisik (iOS/Android).

---

> **Rekomendasi Terbaik:**
> Saat ini, NEXWEAR sebenarnya *sudah* sangat mobile-friendly karena saya membangunnya berkonsep PWA (Progressive Web App) dengan responsivitas tinggi.
> 
> Jika Anda hanya ingin "tampilan PWA-nya lebih terasa mobile", kita bisa merapikan CSS saat ini. 
> Tetapi, jika Anda **wajib** mempresentasikan "Aplikasi Mobile Native di PlayStore/AppStore", kita harus membuat proyek `Expo/React Native` terpisah dari folder `nexwear-store` ini.
