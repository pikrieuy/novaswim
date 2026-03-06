// ─────────────────────────────────────────
//  src/components/CartPanel.jsx
//  Overlay drawer keranjang dari kanan
// ─────────────────────────────────────────

import { fmt } from "../utils";

export default function CartPanel({ isOpen, onClose, cart, navigate }) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1500,
        pointerEvents: isOpen ? "all" : "none",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.7)",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Drawer */}
      <div
        className="panel-drawer"
        style={{
          position: "absolute",
          right: isOpen ? 0 : -420,
          top: 0, bottom: 0, width: 400,
          background: "rgba(5,2,15,0.98)",
          borderLeft: "1px solid rgba(0,245,255,0.25)",
          display: "flex", flexDirection: "column",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: 20, borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 14, fontWeight: 900, color: "#fff", textTransform: "uppercase" }}>
            KERANJANG <span style={{ color: "var(--pink)" }}>({cart.length})</span>
          </div>
          <button
            onClick={onClose}
            style={{
              fontFamily: "'Press Start 2P', monospace", fontSize: 7,
              background: "transparent", border: "1px solid rgba(255,45,120,0.4)",
              color: "var(--pink)", padding: "6px 10px", cursor: "pointer", letterSpacing: 1,
            }}
          >
            [ TUTUP ]
          </button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "rgba(255,255,255,0.3)", fontFamily: "'Press Start 2P', monospace", fontSize: 7, letterSpacing: 1 }}>
              Keranjang kosong
            </div>
          ) : (
            cart.map((ci) => (
              <CartPanelItem key={ci.id} item={ci} />
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <button
              onClick={() => { onClose(); navigate("cart"); }}
              style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 7,
                background: "transparent", border: "1px solid var(--cyan)",
                color: "var(--cyan)", padding: 12, cursor: "pointer", letterSpacing: 1,
              }}
            >
              LIHAT KERANJANG
            </button>
            <button
              onClick={() => { onClose(); navigate("address"); }}
              style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 7,
                background: "var(--pink)", border: "none",
                color: "#fff", padding: 12, cursor: "pointer", letterSpacing: 1,
                animation: "pulse-pink 2s infinite",
              }}
            >
              CHECKOUT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartPanelItem({ item: ci }) {
  return (
    <div
      style={{
        display: "flex", gap: 10, alignItems: "center",
        background: "var(--card)", border: "1px solid rgba(255,255,255,0.07)", padding: 10,
      }}
    >
      <div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0, background: ci.bg }}>
        {ci.emoji}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 9, fontWeight: 700, color: "#fff", textTransform: "uppercase", marginBottom: 3 }}>
          {ci.name}
        </div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>
          {ci.size} · {ci.color} · x{ci.qty}
        </div>
        <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 11, fontWeight: 700, color: "var(--yellow)" }}>
          Rp {fmt(ci.price * ci.qty)}
        </div>
      </div>
    </div>
  );
}
