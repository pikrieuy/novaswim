// ─────────────────────────────────────────
//  src/main.jsx
//  Entry point aplikasi
// ─────────────────────────────────────────

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
