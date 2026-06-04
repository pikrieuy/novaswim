// ─────────────────────────────────────────
//  src/components/EmptyState.jsx
//  Komponen seragam untuk status kosong/error
// ─────────────────────────────────────────

import { MdErrorOutline, MdInbox, MdSearchOff } from "react-icons/md";

const ICONS = {
  error: MdErrorOutline,
  empty: MdInbox,
  search: MdSearchOff,
};

export default function EmptyState({ type = "empty", title, message, ctaText, onCtaClick }) {
  const Icon = ICONS[type] || MdInbox;
  
  return (
    <div style={{
      margin: "0 12px",
      padding: "60px 20px",
      textAlign: "center",
      border: "1px dashed rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.02)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Icon size={64} color={type === "error" ? "var(--pink)" : "rgba(255,255,255,0.2)"} style={{ marginBottom: 16 }} />
      <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 16, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
        {title}
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, letterSpacing: 0.5, maxWidth: 400, marginBottom: 24 }}>
        {message}
      </div>
      {ctaText && onCtaClick && (
        <button
          onClick={onCtaClick}
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 8,
            background: "transparent",
            border: "2px solid var(--cyan)",
            color: "var(--cyan)",
            padding: "12px 24px",
            cursor: "pointer",
            letterSpacing: 1,
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(0,245,255,0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
          }}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
}
