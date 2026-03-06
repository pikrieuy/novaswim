// ─────────────────────────────────────────
//  src/utils/index.js
//  Helper functions yang dipakai di seluruh app
// ─────────────────────────────────────────

/** Format angka ke format rupiah Indonesia: 449000 → "449.000" */
export const fmt = (n) => Number(n).toLocaleString("id-ID");

/** Hitung persentase diskon: (price, oldPrice) → 25 */
export const discPct = (price, oldPrice) =>
  oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0;

/** Bintang dari angka: 4 → "★★★★☆" */
export const starsStr = (n) =>
  "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

/** Rata-rata rating dari array reviews */
export const avgRating = (reviews) => {
  if (!reviews?.length) return null;
  return (reviews.reduce((s, r) => s + r.star, 0) / reviews.length).toFixed(1);
};

/** Generate ID unik sederhana */
export const genId = (prefix = "id") => `${prefix}_${Date.now()}`;

/** Format tanggal ke format Indonesia */
export const fmtDate = () =>
  new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
