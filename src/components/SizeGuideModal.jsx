// ─────────────────────────────────────────
//  src/components/SizeGuideModal.jsx
//  Modal panduan ukuran
// ─────────────────────────────────────────

import { useEffect } from "react";

const SIZE_DATA = [
  { size: "S",  chest: "88-92",  waist: "72-76",  length: "66-68" },
  { size: "M",  chest: "96-100", waist: "80-84",  length: "69-71" },
  { size: "L",  chest: "104-108", waist: "88-92", length: "72-74" },
  { size: "XL", chest: "112-116", waist: "96-100", length: "75-77" },
];

export default function SizeGuideModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 2500,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20, animation: "pageIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0d0a1f", border: "1px solid rgba(0,245,255,0.3)",
          width: "100%", maxWidth: 500, maxHeight: "80vh", overflowY: "auto",
          boxShadow: "0 0 60px rgba(0,245,255,0.1)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 14, fontWeight: 900, color: "#fff", textTransform: "uppercase" }}>
            PANDUAN <span style={{ color: "var(--cyan)" }}>UKURAN</span>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.4)", color: "var(--pink)", fontSize: 14, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>

        {/* Table */}
        <div style={{ padding: "20px 24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Share Tech Mono',monospace", fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(0,245,255,0.2)" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", color: "var(--cyan)", fontFamily: "'Press Start 2P',monospace", fontSize: 9, letterSpacing: 1 }}>SIZE</th>
                <th style={{ padding: "10px 12px", textAlign: "center", color: "var(--cyan)", fontFamily: "'Press Start 2P',monospace", fontSize: 9, letterSpacing: 1 }}>DADA (cm)</th>
                <th style={{ padding: "10px 12px", textAlign: "center", color: "var(--cyan)", fontFamily: "'Press Start 2P',monospace", fontSize: 9, letterSpacing: 1 }}>PINGGANG (cm)</th>
                <th style={{ padding: "10px 12px", textAlign: "center", color: "var(--cyan)", fontFamily: "'Press Start 2P',monospace", fontSize: 9, letterSpacing: 1 }}>PANJANG (cm)</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_DATA.map((row) => (
                <tr key={row.size} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "12px", fontFamily: "'Orbitron',sans-serif", fontSize: 14, fontWeight: 700, color: "var(--pink)" }}>{row.size}</td>
                  <td style={{ padding: "12px", textAlign: "center", color: "rgba(255,255,255,0.8)" }}>{row.chest}</td>
                  <td style={{ padding: "12px", textAlign: "center", color: "rgba(255,255,255,0.8)" }}>{row.waist}</td>
                  <td style={{ padding: "12px", textAlign: "center", color: "rgba(255,255,255,0.8)" }}>{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* How to Measure */}
          <div style={{ marginTop: 20, padding: 16, background: "rgba(0,245,255,0.03)", border: "1px solid rgba(0,245,255,0.15)" }}>
            <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 9, color: "var(--yellow)", letterSpacing: 1, marginBottom: 12 }}>CARA MENGUKUR</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 2, letterSpacing: 0.5 }}>
              <strong style={{ color: "#fff" }}>Dada:</strong> Ukur keliling dada terlebar dengan pita ukur<br />
              <strong style={{ color: "#fff" }}>Pinggang:</strong> Ukur keliling pinggang terkecil (di atas pusar)<br />
              <strong style={{ color: "#fff" }}>Panjang:</strong> Ukur dari bahu hingga ujung bawah baju
            </div>
          </div>

          <div style={{ marginTop: 16, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 0.5, textAlign: "center" }}>
            Jika ragu antara 2 ukuran, pilih ukuran yang lebih besar untuk kenyamanan.
          </div>
        </div>
      </div>
    </div>
  );
}
