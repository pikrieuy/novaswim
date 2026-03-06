// ─────────────────────────────────────────
//  src/components/Toast.jsx
//  Notifikasi kecil di bawah layar
// ─────────────────────────────────────────

export default function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 80,
        left: "50%",
        transform: "translateX(-50%)",
        background: "var(--card)",
        border: "1px solid var(--yellow)",
        color: "var(--yellow)",
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 8,
        padding: "10px 20px",
        letterSpacing: 1,
        zIndex: 9999,
        animation: "slideIn 0.3s ease",
        whiteSpace: "nowrap",
        boxShadow: "0 0 20px rgba(255,229,0,0.3)",
      }}
    >
      {msg}
    </div>
  );
}
