export default function Footer() {
  return (
    <footer style={{ background: "#0b0b17", padding: "40px 28px", borderTop: "1px solid rgba(232,184,64,.09)" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "linear-gradient(135deg,#f5d060,#9a6e08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bebas Neue",
              fontSize: 18,
              color: "#06060e",
            }}
          >
            D
          </div>
          <div>
            <div className="dB" style={{ fontSize: 17, letterSpacing: 3, color: "#e8b840" }}>
              DAZZLER CAR DETAILING
            </div>
            <div className="dM" style={{ fontSize: 8, color: "rgba(240,234,208,.25)", letterSpacing: 3 }}>
              WHERE CARS BECOME ART
            </div>
          </div>
        </div>
        <div className="dM" style={{ fontSize: 10, color: "rgba(240,234,208,.2)", letterSpacing: 1 }}>
          © 2025 Dazzler Car Detailing
        </div>
        <div style={{ display: "flex", gap: 22 }}>
          {["Instagram", "Facebook", "TikTok"].map((s) => (
            <a key={s} href="#" className="navLnk" style={{ fontSize: 10 }}>
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}