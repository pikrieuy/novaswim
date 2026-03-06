// ─────────────────────────────────────────
//  src/components/ProductGrid.jsx
//  Grid wrapper untuk ProductCard
// ─────────────────────────────────────────

import ProductCard from "./ProductCard";

export default function ProductGrid({ products, navigate, onAddCart }) {
  if (!products.length) {
    return (
      <div
        style={{
          padding: 40, textAlign: "center",
          color: "rgba(255,255,255,0.3)",
          fontFamily: "'Press Start 2P', monospace", fontSize: 8,
          gridColumn: "1/-1",
        }}
      >
        TIDAK ADA PRODUK DITEMUKAN
      </div>
    );
  }

  return (
    <div
      className="products-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 2,
        margin: "0 12px",
        background: "rgba(0,245,255,0.04)",
        border: "1px solid rgba(0,245,255,0.12)",
        borderTop: "none",
      }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} navigate={navigate} onAddCart={onAddCart} />
      ))}
    </div>
  );
}
