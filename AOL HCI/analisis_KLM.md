# Analisis Waktu Interaksi Menggunakan Keystroke Level Model (KLM)

Dokumen ini memuat analisis prediksi waktu interaksi pengguna menggunakan metode KLM. Analisis ini diadaptasi dari studi kasus pencarian buku perpustakaan untuk disesuaikan secara khusus dengan fitur pencarian produk pada aplikasi e-commerce **NEXWEAR**.

## Skenario Tugas (Sesuai Konteks NEXWEAR)
Pengguna masuk ke halaman utama NEXWEAR dan ingin mencari produk berupa jaket. Proses yang dilakukan adalah:

1. Klik bar pencarian (Search bar) di header
2. Mengetik kata kunci "Jacket" (6 karakter)
3. Menekan tombol *Enter* untuk mengeksekusi pencarian
4. Klik kartu produk yang diinginkan dari daftar hasil pencarian

## Asumsi Parameter Konstanta
Kita menggunakan konstanta standar operator KLM (sesuai referensi soal):
*   **K (Keystroke)** = 0,2 detik (Waktu menekan 1 tombol keyboard atau 1 klik mouse)
*   **P (Pointing)** = 1,1 detik (Waktu menggerakkan kursor mouse ke area target)
*   **M (Mental preparation)** = 1,35 detik (Waktu untuk berpikir / memproses visual)
*   *Tambahan Standar:* **H (Homing)** = 0,4 detik (Waktu memindahkan tangan dari mouse ke keyboard atau sebaliknya)

---

## Perhitungan Model KLM
Kita memecah setiap langkah perilaku pengguna menjadi runtutan operator-operator KLM:

**Langkah 1: Klik bar pencarian**
*   Pengguna memutuskan untuk mencari barang (M), mengarahkan kursor ke search bar (P), lalu melakukan klik kiri untuk mulai mengetik (K).
*   *Rumus: M + P + K*

**Langkah 2: Mengetik kata kunci "Jacket"**
*   Pindah tangan dari mouse ke keyboard (H), persiapan mental untuk mengeja/mengingat kata yang dicari (M), lalu mengetik 6 karakter (6K).
*   *Rumus: H + M + 6K*

**Langkah 3: Menekan tombol Enter**
*   Tangan masih di keyboard, langsung menekan tombol *Enter* (K).
*   *Rumus: K*

**Langkah 4: Klik produk yang ditemukan**
*   Sistem memuat hasil pencarian. Pengguna memindai layar dan memutuskan produk mana yang akan diklik (M). Kemudian memindahkan tangan kembali dari keyboard ke mouse (H), mengarahkan kursor ke foto produk (P), dan melakukan klik (K).
*   *Rumus: M + H + P + K*

### Kalkulasi Total Waktu Prediksi (T_execute)
= (M + P + K) + (H + M + 6K) + (K) + (M + H + P + K)  
= 3M + 2P + 9K + 2H  
= 3(1,35) + 2(1,1) + 9(0,2) + 2(0,4)  
= 4,05 + 2,2 + 1,8 + 0,8  
= **8,85 detik**

---

## Analisis Efisiensi Antarmuka NEXWEAR

Berdasarkan perhitungan manual KLM, waktu prediksi pengguna untuk menemukan produk adalah **8,85 detik**.

**Apakah antarmuka NEXWEAR tersebut sudah cukup efisien?**  
**Ya, sudah sangat efisien.** Kenyataannya, arsitektur UI NEXWEAR didesain untuk **memotong waktu riil jauh di bawah 8,85 detik**. Hal ini dapat dijelaskan dengan teori HCI lainnya:

1. **Efek Hukum Fitts (Fitts's Law):** Waktu *Pointing* (P) standar adalah 1,1 detik. Namun di NEXWEAR, *Search Bar* diletakkan memanjang hampir memenuhi lebar header bagian tengah (`flex: 1`). Karena target kliknya sangat besar, waktu (P) di dunia nyata akan lebih cepat dari 1,1 detik.
2. **Eliminasi Langkah dengan *Autocomplete*:** NEXWEAR telah diintegrasikan dengan fitur *debounce autocomplete*. Saat pengguna mengetik "Jac" (3K), menu dropdown hasil pencarian akan langsung muncul di bawah bar. 
   - Pengguna *tidak perlu* mengetik sisa 3 huruf.
   - Pengguna *tidak perlu* menekan Enter (mengeliminasi 1K).
   - Pengguna dapat langsung menekan nama produk dari dropdown.
3. **Reduksi Waktu *Mental* (M):** Bar pencarian kami bersifat *sticky* (selalu lengket di atas layar walau di-*scroll*). Pengguna tidak perlu membuang waktu *Mental Preparation* untuk mencari-cari di mana tombol pencariannya disembunyikan.

**Kesimpulan:** Secara hitungan teoritis KLM antarmuka ini sudah tergolong gesit (di bawah 10 detik). Secara praktek implementatif, NEXWEAR mempercepat aliran ini lebih jauh lagi menggunakan desain cerdas (*autocomplete* & ukuran target besar).
