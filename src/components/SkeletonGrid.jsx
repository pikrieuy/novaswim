// ─────────────────────────────────────────
//  src/components/SkeletonGrid.jsx
//  Loading skeleton untuk product grid — improved
// ─────────────────────────────────────────

const shimmer = {
  background: "linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)",
  backgroundSize: "200% 100%",
  animation: "skshimmer 1.4s ease-in-out infinite",
  borderRadius: 2,
};

// Inject keyframe sekali
if (typeof document !== "undefined" && !document.getElementById("sk-style")) {
  const s = document.createElement("style");
  s.id = "sk-style";
  s.textContent = `@keyframes skshimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`;
  document.head.appendChild(s);
}

function SkeletonCard({ delay = 0 }) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.04)", animationDelay: `${delay}ms` }}>
      {/* Image area */}
      <div style={{ height: 180, ...shimmer }} />
      {/* Info */}
      <div style={{ padding: 12 }}>
        <div style={{ height: 12, width: "75%", marginBottom: 10, ...shimmer }} />
        <div style={{ height: 9, width: "40%", marginBottom: 10, ...shimmer }} />
        <div style={{ height: 16, width: "55%", marginBottom: 12, ...shimmer }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ height: 10, width: "35%", ...shimmer }} />
          <div style={{ height: 10, width: "25%", ...shimmer }} />
        </div>
      </div>
    </div>
  );
}

export default function SkeletonGrid({ count = 12 }) {
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
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} delay={i * 80} />
      ))}
    </div>
  );
}
