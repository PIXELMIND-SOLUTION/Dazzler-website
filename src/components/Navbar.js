export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: "rgba(6,6,14,.9)",
      backdropFilter: "blur(24px)",
      borderBottom: "1px solid rgba(232,184,64,.12)"
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 28px",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Dazzler Car Detailing"
            className="w-24 h-24 object-contain"
          />
          
        </div>

        <div style={{ display: "flex", gap: 30, alignItems: "center" }} className="hidden md:flex">
          {["Services", "Process", "Pricing", "Gallery", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="navLnk">{l}</a>
          ))}
        </div>

        <a href="#contact" className="btnGold dM"
          style={{
            padding: "10px 22px",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            textDecoration: "none",
            cursor: "pointer"
          }}>BOOK NOW</a>
      </div>
    </nav>
  );
}