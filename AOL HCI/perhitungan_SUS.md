# Perhitungan Skor SUS (System Usability Scale)

Dokumen ini menjabarkan bagaimana skor SUS (System Usability Scale) dihitung untuk aplikasi NEXWEAR, berdasarkan raw data responden yang telah dikumpulkan.

## Formula Perhitungan SUS

Kuesioner SUS terdiri dari 10 pertanyaan dengan skala Likert 1-5 (1 = Sangat Tidak Setuju, 5 = Sangat Setuju).

1. **Pertanyaan Ganjil (Pertanyaan Positif)**
   - Item: Q1, Q3, Q5, Q7, Q9
   - Rumus: `Skor = Nilai Responden - 1`
2. **Pertanyaan Genap (Pertanyaan Negatif)**
   - Item: Q2, Q4, Q6, Q8, Q10
   - Rumus: `Skor = 5 - Nilai Responden`
3. **Total Skor Akhir**
   - Rumus: `(Total Skor Ganjil + Total Skor Genap) * 2.5`

Rentang hasil akhir adalah 0 hingga 100.

---

## Breakdown Perhitungan per Responden

### Responden 1 (Andi Pratama)
* Raw: Q1(4), Q2(2), Q3(5), Q4(1), Q5(4), Q6(2), Q7(5), Q8(1), Q9(4), Q10(1)
* Ganjil: (4-1) + (5-1) + (4-1) + (5-1) + (4-1) = 3 + 4 + 3 + 4 + 3 = **17**
* Genap: (5-2) + (5-1) + (5-2) + (5-1) + (5-1) = 3 + 4 + 3 + 4 + 4 = **18**
* **Skor: (17 + 18) * 2.5 = 87.5** ✅

### Responden 2 (Bella Safitri)
* Raw: Q1(4), Q2(3), Q3(4), Q4(2), Q5(4), Q6(2), Q7(4), Q8(2), Q9(4), Q10(2)
* Ganjil: 3 + 3 + 3 + 3 + 3 = **15**
* Genap: 2 + 3 + 3 + 3 + 3 = **14**
* **Skor: (15 + 14) * 2.5 = 72.5** ✅

### Responden 3 (Cahyo Wibowo)
* Raw: Q1(5), Q2(1), Q3(5), Q4(1), Q5(5), Q6(1), Q7(5), Q8(1), Q9(5), Q10(2)
* Ganjil: 4 + 4 + 4 + 4 + 4 = **20**
* Genap: 4 + 4 + 4 + 4 + 3 = **19**
* **Skor: (20 + 19) * 2.5 = 97.5** ⚠️ *(Revisi dari Laporan sebelumnya yang tertulis 90)*

### Responden 4 (Dina Rahmawati)
* Raw: Q1(3), Q2(3), Q3(4), Q4(2), Q5(3), Q6(3), Q7(4), Q8(2), Q9(3), Q10(3)
* Ganjil: 2 + 3 + 2 + 3 + 2 = **12**
* Genap: 2 + 3 + 2 + 3 + 2 = **12**
* **Skor: (12 + 12) * 2.5 = 60** ✅

### Responden 5 (Eko Saputra)
* Raw: Q1(4), Q2(2), Q3(4), Q4(2), Q5(4), Q6(2), Q7(4), Q8(1), Q9(4), Q10(2)
* Ganjil: 3 + 3 + 3 + 3 + 3 = **15**
* Genap: 3 + 3 + 3 + 4 + 3 = **16**
* **Skor: (15 + 16) * 2.5 = 77.5** ✅

### Responden 6 (Fira Anindya)
* Raw: Q1(5), Q2(2), Q3(5), Q4(1), Q5(4), Q6(2), Q7(5), Q8(1), Q9(5), Q10(1)
* Ganjil: 4 + 4 + 3 + 4 + 4 = **19**
* Genap: 3 + 4 + 3 + 4 + 4 = **18**
* **Skor: (19 + 18) * 2.5 = 92.5** ✅

### Responden 7 (Galih Permana)
* Raw: Q1(3), Q2(3), Q3(3), Q4(3), Q5(3), Q6(3), Q7(3), Q8(3), Q9(3), Q10(3)
* Ganjil: 2 + 2 + 2 + 2 + 2 = **10**
* Genap: 2 + 2 + 2 + 2 + 2 = **10**
* **Skor: (10 + 10) * 2.5 = 50** ✅

### Responden 8 (Hana Putri)
* Raw: Q1(4), Q2(2), Q3(4), Q4(1), Q5(4), Q6(2), Q7(5), Q8(1), Q9(4), Q10(2)
* Ganjil: 3 + 3 + 3 + 4 + 3 = **16**
* Genap: 3 + 4 + 3 + 4 + 3 = **17**
* **Skor: (16 + 17) * 2.5 = 82.5** ✅

---

## Ringkasan Akhir yang Sudah Direvisi
1. **Andi Pratama:** 87.5
2. **Bella Safitri:** 72.5
3. **Cahyo Wibowo:** 97.5
4. **Dina Rahmawati:** 60.0
5. **Eko Saputra:** 77.5
6. **Fira Anindya:** 92.5
7. **Galih Permana:** 50.0
8. **Hana Putri:** 82.5

**Total Keseluruhan:** 620.0  
**Rata-rata Skor SUS (Total / 8):** 77.5

*Catatan: Skor 77.5 berada dalam kategori "Acceptable" dengan rentang Grade B, yang menunjukkan sistem memiliki usability yang baik.*
