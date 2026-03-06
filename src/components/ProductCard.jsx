// ─────────────────────────────────────────
//  src/components/ProductCard.jsx
//  Card produk reusable untuk semua grid
// ─────────────────────────────────────────

import { fmt, starsStr } from "../utils";

const BADGE_COLORS = {
  "pcb-new":  { bg: "var(--cyan)",   color: "#000" },
  "pcb-hot":  { bg: "var(--pink)",   color: "#fff" },
  "pcb-sale": { bg: "var(--yellow)", color: "#000" },
};

export default function ProductCard({ product: p, navigate, onAddCart }) {
  const badge = BADGE_COLORS[p.badgeClass] || { bg: "#333", color: "#fff" };

  return (
    <div
      className="product-card"
      onClick={() => navigate("detail", p.id)}
      style={{ background: "var(--card)", cursor: "pointer" }}
    >
      {/* Badge */}
      <div
        style={{
          position: "absolute", top: 6, left: 6,
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          padding: "3px 6px", background: badge.bg, color: badge.color, zIndex: 5,
        }}
      >
        {p.badgeText}
      </div>

      {/* Wishlist */}
      <div className="pc-wish" style={{ position: "absolute", top: 6, right: 6, zIndex: 5, fontSize: 14, cursor: "pointer" }}>
        🤍
      </div>

      {/* Visual */}
      <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: p.bg }} />
        <span
          className="pv-emoji"
          style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 10px rgba(255,45,120,0.5))" }}
        >
          {p.emoji}
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          style={{
            fontFamily: "'Orbitron', sans-serif", fontSize: 9, fontWeight: 700,
            color: "#fff", letterSpacing: 0.5, marginBottom: 4,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            textTransform: "uppercase",
          }}
        >
          {p.name}
        </div>

        {p.oldPrice > 0 && (
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", textDecoration: "line-through", marginBottom: 2 }}>
            Rp {fmt(p.oldPrice)}
          </div>
        )}

        <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, fontWeight: 900, color: "var(--yellow)", textShadow: "0 0 8px rgba(255,229,0,0.5)" }}>
          Rp {fmt(p.price)}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: 1 }}>{p.sold} terjual</span>
          <span style={{ fontSize: 9, color: "var(--yellow)" }}>{starsStr(p.rating)}</span>
        </div>

        {/* Add to Cart (visible on hover via CSS) */}
        <div className="pc-addcart-wrap">
          <button
            onClick={(e) => { e.stopPropagation(); onAddCart(p); }}
            style={{
              display: "block", width: "100%", marginTop: 8,
              fontFamily: "'Press Start 2P', monospace", fontSize: 7,
              background: "var(--pink)", color: "#fff", border: "none",
              padding: 7, cursor: "pointer", letterSpacing: 1,
            }}
          >
            + KERANJANG
          </button>
        </div>
      </div>
    </div>
  );
}
