export default function Testimonials() {
  return (
    <section className="dS" style={{ padding: "108px 28px", background: "#0b0b17" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 className="dB" style={{ fontSize: "clamp(44px,6vw,72px)", color: "#f0ead0" }}>
            CLIENT <span className="shimGold">TESTIMONIALS</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
          {[
            {
              name: "Alex R.",
              car: "BMW M3 Competition",
              t: "The ceramic coating has my car looking like it just rolled out of the factory. Dazzler is genuinely in a league of their own.",
            },
            {
              name: "Sarah M.",
              car: "Porsche 911 GT3",
              t: "Paint correction removed every swirl and scratch. I stood in sunlight for 20 minutes just staring at my reflection. Jaw-dropping.",
            },
            {
              name: "James K.",
              car: "Tesla Model S Plaid",
              t: "Most professional, thorough detailing I've ever experienced. The results are extraordinary. My permanent go-to from now on.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="hoverCard"
              style={{ background: "#0f0f1c", borderRadius: 14, padding: 30, border: "1px solid rgba(232,184,64,.1)" }}
            >
              <div style={{ color: "#e8b840", fontSize: 18, letterSpacing: 3, marginBottom: 16 }}>★★★★★</div>
              <p style={{ fontSize: 14, lineHeight: 1.72, color: "rgba(240,234,208,.52)", marginBottom: 22, fontStyle: "italic" }}>
                "{t.t}"
              </p>
              <div className="dM" style={{ fontSize: 12, fontWeight: 700, color: "#f0ead0" }}>
                {t.name}
              </div>
              <div className="dM" style={{ fontSize: 9, letterSpacing: 2, color: "#e8b840", marginTop: 4 }}>
                {t.car}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}