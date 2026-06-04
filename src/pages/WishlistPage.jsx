// ─────────────────────────────────────────
//  src/pages/WishlistPage.jsx
//  Halaman wishlist pengguna
// ─────────────────────────────────────────

import { backBtnStyle } from "../styles/shared";
import ProductGrid from "../components/ProductGrid";
import EmptyState from "../components/EmptyState";

export default function WishlistPage({ allProducts, wishlist, toggleWishlist, isWishlisted, navigate, onAddCart }) {
  const wishlistProducts = allProducts.filter(p => wishlist.includes(p.id));

  return (
    <div className="page-anim">
      <button onClick={() => navigate("back")} style={backBtnStyle}>← KEMBALI</button>

      <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 22, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: 2, margin: "0 12px 20px" }}>
        WISHLIST <span style={{ color: "var(--pink)" }}>KAMU</span>
        <span style={{ display: "block", fontFamily: "'Share Tech Mono',monospace", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 6, fontWeight: 400 }}>
          {wishlistProducts.length} produk tersimpan
        </span>
      </div>

      {wishlistProducts.length === 0 ? (
        <EmptyState
          type="empty"
          title="BELUM ADA PRODUK FAVORIT"
          message="Klik ikon hati 🤍 pada produk untuk menyimpannya di sini"
          ctaText="JELAJAHI PRODUK"
          onCtaClick={() => navigate("home")}
        />
      ) : (
        <ProductGrid products={wishlistProducts} navigate={navigate} onAddCart={onAddCart} isWishlisted={isWishlisted} onToggleWishlist={toggleWishlist} />
      )}
    </div>
  );
}
