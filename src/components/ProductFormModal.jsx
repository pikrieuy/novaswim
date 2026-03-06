// ─────────────────────────────────────────
//  src/components/ProductFormModal.jsx
// ─────────────────────────────────────────

import { useState, useEffect } from "react";
import { BG_OPTIONS, BADGE_OPTIONS } from "../data/products";
import { formInputStyle, formLabelStyle } from "../styles/shared";

const DEFAULT_FORM = {
  name: "", price: "", oldPrice: "", stock: "",
  cat: "bikini", emoji: "🌸",
  bg: BG_OPTIONS[0].value,
  badge: "pcb-new|NEW",
  desc: "",
};

export default function ProductFormModal({ isOpen, onClose, onSave, editProduct }) {
  const [form, setForm]             = useState(DEFAULT_FORM);
  const [bonusList, setBonusList]   = useState([]);
  const [bonusInput, setBonusInput] = useState("");

  // Kunci scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset / populate form saat modal dibuka
  useEffect(() => {
    if (!isOpen) return;
    if (editProduct) {
      setForm({
        name:     editProduct.name,
        price:    editProduct.price,
        oldPrice: editProduct.oldPrice || "",
        stock:    editProduct.stock    || "",
        cat:      editProduct.cat,
        emoji:    editProduct.emoji,
        bg:       editProduct.bg,
        badge:    `${editProduct.badgeClass}|${editProduct.badgeText}`,
        desc:     editProduct.desc,
      });
      setBonusList([...(editProduct.bonus || [])]);
    } else {
      setForm(DEFAULT_FORM);
      setBonusList([]);
    }
    setBonusInput("");
  }, [isOpen, editProduct]);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.name.trim()) return alert("Nama produk wajib diisi!");
    if (!form.price)       return alert("Harga produk wajib diisi!");
    if (!form.desc.trim()) return alert("Deskripsi produk wajib diisi!");

    const [badgeClass, badgeText] = form.badge.split("|");
    onSave(
      {
        ...form,
        price:    parseInt(form.price),
        oldPrice: parseInt(form.oldPrice) || 0,
        stock:    parseInt(form.stock)    || 0,
        badgeClass,
        badgeText,
        bonus: [...bonusList],
      },
      editProduct?.id
    );
    onClose();
  };

  const addBonus = () => {
    if (!bonusInput.trim()) return;
    setBonusList((prev) => [...prev, bonusInput.trim()]);
    setBonusInput("");
  };

  const removeBonus = (idx) => setBonusList((prev) => prev.filter((_, i) => i !== idx));

  if (!isOpen) return null;

  return (
    // Overlay — padding atas 70px (navbar atas) + bawah 80px (navbar bawah)
    <div
      onClick={onClose}
      style={{
        position:             "fixed",
        inset:                0,
        zIndex:               2000,
        display:              "flex",
        alignItems:           "center",
        justifyContent:       "center",
        padding:              "70px 16px 80px",
        background:           "rgba(0,0,0,0.88)",
        backdropFilter:       "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {/* Panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background:    "#0d0a1f",
          border:        "1px solid rgba(0,245,255,0.35)",
          borderRadius:  2,
          width:         "100%",
          maxWidth:      760,
          maxHeight:     "calc(100vh - 160px)",
          overflowY:     "auto",
          boxShadow:     "0 0 80px rgba(0,245,255,0.12), 0 0 160px rgba(180,0,255,0.08)",
          animation:     "pageIn 0.25s ease",
          display:       "flex",
          flexDirection: "column",
        }}
      >
        {/* ── Header sticky ── */}
        <div style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "18px 24px",
          borderBottom:   "1px solid rgba(255,255,255,0.07)",
          background:     "#0d0a1f",
          position:       "sticky",
          top:            0,
          zIndex:         10,
          flexShrink:     0,
        }}>
          <div>
            <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 7, color: "var(--cyan)", letterSpacing: 3, marginBottom: 6 }}>
              // SELLER CENTER
            </div>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 16, fontWeight: 900, color: "#fff", textTransform: "uppercase" }}>
              {editProduct ? "✏ EDIT PRODUK" : "➕ TAMBAH PRODUK BARU"}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background:     "rgba(255,45,120,0.1)",
              border:         "1px solid rgba(255,45,120,0.4)",
              color:          "var(--pink)",
              fontSize:       16,
              width:          36,
              height:         36,
              cursor:         "pointer",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              flexShrink:     0,
            }}
          >
            ✕
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: "24px 24px 8px", flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

            <FormField label="NAMA PRODUK *" full>
              <input
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Contoh: Nebula Bikini Set"
                style={formInputStyle}
                autoFocus
              />
            </FormField>

            <FormField label="HARGA NORMAL (Rp) *">
              <input
                type="number"
                value={form.price}
                onChange={(e) => set("price", e.target.value)}
                placeholder="450000"
                style={formInputStyle}
              />
            </FormField>

            <FormField label="HARGA CORET (Rp)">
              <input
                type="number"
                value={form.oldPrice}
                onChange={(e) => set("oldPrice", e.target.value)}
                placeholder="600000 (opsional)"
                style={formInputStyle}
              />
            </FormField>

            <FormField label="STOK *">
              <input
                type="number"
                value={form.stock}
                onChange={(e) => set("stock", e.target.value)}
                placeholder="100"
                style={formInputStyle}
              />
            </FormField>

            <FormField label="KATEGORI">
              <select value={form.cat} onChange={(e) => set("cat", e.target.value)} style={formInputStyle}>
                {[
                  ["bikini",    "👙 Bikini Set"  ],
                  ["onepiece",  "🩱 One Piece"   ],
                  ["bottoms",   "🩲 Bottoms"     ],
                  ["bundle",    "📦 Bundle"      ],
                  ["aksesoris", "🧴 Aksesoris"   ],
                ].map(([v, l]) => (
                  <option key={v} value={v} style={{ background: "#0a0519" }}>{l}</option>
                ))}
              </select>
            </FormField>

            <FormField label="EMOJI / ICON">
              <input
                value={form.emoji}
                onChange={(e) => set("emoji", e.target.value)}
                maxLength={4}
                placeholder="🌸"
                style={{ ...formInputStyle, fontSize: 22, textAlign: "center" }}
              />
            </FormField>

            <FormField label="WARNA TEMA">
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <select
                  value={form.bg}
                  onChange={(e) => set("bg", e.target.value)}
                  style={{ ...formInputStyle, flex: 1 }}
                >
                  {BG_OPTIONS.map((b) => (
                    <option key={b.value} value={b.value} style={{ background: "#0a0519" }}>{b.label}</option>
                  ))}
                </select>
                <div style={{
                  width:          40,
                  height:         40,
                  flexShrink:     0,
                  background:     form.bg,
                  border:         "1px solid rgba(255,255,255,0.15)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  fontSize:       20,
                }}>
                  {form.emoji}
                </div>
              </div>
            </FormField>

            <FormField label="BADGE">
              <select value={form.badge} onChange={(e) => set("badge", e.target.value)} style={formInputStyle}>
                {BADGE_OPTIONS.map((b) => (
                  <option key={b.value} value={b.value} style={{ background: "#0a0519" }}>{b.label}</option>
                ))}
              </select>
            </FormField>

            <FormField label="DESKRIPSI PRODUK *" full>
              <textarea
                value={form.desc}
                onChange={(e) => set("desc", e.target.value)}
                rows={3}
                placeholder="Jelaskan produkmu secara detail: bahan, ukuran, keunggulan..."
                style={{ ...formInputStyle, resize: "vertical", minHeight: 80 }}
              />
            </FormField>

            {/* Bonus Section */}
            <div style={{ gridColumn: "1/-1", paddingBottom: 8 }}>
              <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 8, color: "var(--yellow)", letterSpacing: 2, marginBottom: 4 }}>
                🎁 BONUS UNTUK PEMBELI (Opsional)
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 0.5, marginBottom: 10 }}>
                Tambahkan bonus eksklusif untuk menarik lebih banyak pembeli!
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                {bonusList.map((b, i) => (
                  <div key={i} style={{
                    display:    "flex",
                    alignItems: "center",
                    gap:        8,
                    background: "rgba(255,45,120,0.1)",
                    border:     "1px solid rgba(255,45,120,0.25)",
                    padding:    "6px 10px",
                  }}>
                    <span style={{ flex: 1, fontSize: 11, color: "rgba(255,255,255,0.8)" }}>🎁 {b}</span>
                    <button onClick={() => removeBonus(i)} style={{ background: "transparent", border: "none", color: "var(--pink)", cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  value={bonusInput}
                  onChange={(e) => setBonusInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addBonus()}
                  placeholder="Contoh: Tote bag gratis, Pouch cantik..."
                  style={{ ...formInputStyle, flex: 1 }}
                />
                <button onClick={addBonus} style={{
                  fontFamily:    "'Press Start 2P',monospace",
                  fontSize:      7,
                  background:    "rgba(255,229,0,0.15)",
                  border:        "1px solid rgba(255,229,0,0.4)",
                  color:         "var(--yellow)",
                  padding:       "0 14px",
                  cursor:        "pointer",
                  whiteSpace:    "nowrap",
                  letterSpacing: 1,
                }}>
                  + BONUS
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer sticky ── */}
        <div style={{
          display:        "flex",
          justifyContent: "flex-end",
          gap:            12,
          padding:        "16px 24px",
          borderTop:      "1px solid rgba(255,255,255,0.07)",
          background:     "#0d0a1f",
          position:       "sticky",
          bottom:         0,
          flexShrink:     0,
          zIndex:         10,
        }}>
          <button onClick={onClose} style={{
            fontFamily:    "'Press Start 2P',monospace",
            fontSize:      8,
            background:    "transparent",
            border:        "1px solid rgba(255,255,255,0.2)",
            color:         "rgba(255,255,255,0.5)",
            padding:       "10px 20px",
            cursor:        "pointer",
            letterSpacing: 1,
          }}>
            BATAL
          </button>
          <button onClick={handleSave} style={{
            fontFamily:    "'Press Start 2P',monospace",
            fontSize:      8,
            background:    "var(--pink)",
            border:        "none",
            color:         "#fff",
            padding:       "10px 24px",
            cursor:        "pointer",
            letterSpacing: 1,
            animation:     "pulse-pink 2s infinite",
          }}>
            SIMPAN PRODUK →
          </button>
        </div>

      </div>
    </div>
  );
}

function FormField({ label, full, children }) {
  return (
    <div style={{ gridColumn: full ? "1/-1" : "auto", display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={formLabelStyle}>{label}</label>
      {children}
    </div>
  );
}