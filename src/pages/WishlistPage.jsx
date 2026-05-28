// ─────────────────────────────────────────
//  src/pages/WishlistPage.jsx
//  Halaman wishlist pengguna
// ─────────────────────────────────────────

import { backBtnStyle } from "../styles/shared";
import ProductGrid from "../components/ProductGrid";

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
        <div style={{ margin: "0 12px", padding: 60, textAlign: "center", border: "1px dashed rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💝</div>
          <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 1, lineHeight: 2 }}>
            WISHLIST KOSONG
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 8 }}>
            Klik ikon hati 🤍 pada produk untuk menyimpannya di sini
          </div>
          <button onClick={() => navigate("home")} style={{ marginTop: 20, fontFamily: "'Press Start 2P',monospace", fontSize: 9, background: "transparent", border: "2px solid var(--cyan)", color: "var(--cyan)", padding: "10px 24px", cursor: "pointer" }}>
            JELAJAHI PRODUK
          </button>
        </div>
      ) : (
        <ProductGrid products={wishlistProducts} navigate={navigate} onAddCart={onAddCart} isWishlisted={isWishlisted} onToggleWishlist={toggleWishlist} />
      )}
    </div>
  );
}
