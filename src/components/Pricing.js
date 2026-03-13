import { PKG } from "../data/constants";

export default function Pricing({ selPkg, setSelPkg }) {
  return (
    <section id="pricing" className="dS" style={{ padding: "108px 28px", background: "#0b0b17" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 68 }}>
          <p className="dM" style={{ fontSize: 10, letterSpacing: 4, color: "#e8b840", marginBottom: 16 }}>
            — TRANSPARENT PRICING —
          </p>
          <h2 className="dB" style={{ fontSize: "clamp(44px,7vw,82px)", lineHeight: 1, color: "#f0ead0" }}>
            CHOOSE YOUR <span className="shimGold">PACKAGE</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 18,
            maxWidth: 1060,
            margin: "0 auto",
          }}
        >
          {PKG.map((pkg, i) => (
            <div
              key={i}
              onClick={() => setSelPkg(i)}
              style={{
                borderRadius: 16,
                padding: "38px 30px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                border: selPkg === i ? "2px solid #e8b840" : "1px solid rgba(232,184,64,.12)",
                background: selPkg === i ? "linear-gradient(135deg,rgba(232,184,64,.07),rgba(232,184,64,.02))" : "#0f0f1c",
                boxShadow: selPkg === i ? "0 0 52px rgba(232,184,64,.13),inset 0 1px 0 rgba(232,184,64,.1)" : "none",
                transition: "all .35s cubic-bezier(.175,.885,.32,1.275)",
              }}
            >
              {pkg.badge && (
                <div
                  className="dM"
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "linear-gradient(135deg,#f5d060,#9a6e08)",
                    color: "#06060e",
                    borderRadius: 100,
                    padding: "4px 12px",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  {pkg.badge}
                </div>
              )}
              <div className="dM" style={{ fontSize: 10, letterSpacing: 3, color: "#e8b840", marginBottom: 6 }}>
                PACKAGE
              </div>
              <div className="dB" style={{ fontSize: 48, color: "#f0ead0", letterSpacing: 2, lineHeight: 1, marginBottom: 18 }}>
                {pkg.n}
              </div>
              <div style={{ marginBottom: 26 }}>
                <span className="dB" style={{ fontSize: 20, color: "#e8b840", verticalAlign: "super" }}>
                  $
                </span>
                <span className="dB" style={{ fontSize: 68, color: "#f0ead0", lineHeight: 1 }}>
                  {pkg.p}
                </span>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 22, marginBottom: 26 }}>
                {pkg.f.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(232,184,64,.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e8b840" }} />
                    </div>
                    <span style={{ fontSize: 13, color: "rgba(240,234,208,.58)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button
                className={selPkg === i ? "btnGold dM" : "btnOut dM"}
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: 8,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  cursor: "pointer",
                  border: selPkg !== i ? "1px solid rgba(232,184,64,.3)" : "none",
                }}
              >
                BOOK {pkg.n}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}