export default function Process() {
  return (
    <section id="process" className="dS" style={{ padding: "108px 28px", background: "#06060e" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 68 }}>
          <p className="dM" style={{ fontSize: 10, letterSpacing: 4, color: "#e8b840", marginBottom: 16 }}>
            — HOW IT WORKS —
          </p>
          <h2 className="dB" style={{ fontSize: "clamp(44px,7vw,82px)", lineHeight: 1, color: "#f0ead0" }}>
            THE DAZZLER <span className="shimGold">METHOD</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 0 }}>
          {[
            { n: "01", t: "Inspection", d: "We assess paint condition, interior wear, noting every imperfection meticulously." },
            { n: "02", t: "Decontamination", d: "Iron fallout removal, clay bar treatment, and full chemical surface decon." },
            { n: "03", t: "Correction", d: "Multi-stage machine polishing removes all surface defects, layer by layer." },
            { n: "04", t: "Protection", d: "Ceramic coat, PPF, or wax seals in perfection — guaranteed for years." },
          ].map((step, i) => (
            <div key={i} style={{ textAlign: "center", padding: "0 26px", position: "relative" }}>
              {i < 3 && (
                <div
                  className="hidden md:block"
                  style={{
                    position: "absolute",
                    top: 40,
                    left: "58%",
                    right: "-10%",
                    height: 1,
                    background: "linear-gradient(90deg,rgba(232,184,64,.4),rgba(232,184,64,.08))",
                  }}
                />
              )}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  margin: "0 auto 28px",
                  background: i % 2 === 1 ? "linear-gradient(135deg,#f5d060,#9a6e08)" : "#0f0f1c",
                  border: "2px solid rgba(232,184,64,.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: 30,
                  color: i % 2 === 1 ? "#06060e" : "#e8b840",
                  boxShadow: i % 2 === 1 ? "0 0 32px rgba(232,184,64,.35)" : "none",
                }}
              >
                {step.n}
              </div>
              <h3 className="dB" style={{ fontSize: 28, letterSpacing: 1, color: "#f0ead0", marginBottom: 14 }}>
                {step.t}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(240,234,208,.4)" }}>{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}