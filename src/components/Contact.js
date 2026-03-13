import { PKG } from "../data/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="dS"
      style={{ padding: "110px 28px", background: "linear-gradient(135deg,#06060e,#0e0520,#06060e)" }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <p className="dM" style={{ fontSize: 10, letterSpacing: 4, color: "#e8b840", marginBottom: 16 }}>
          — GET IN TOUCH —
        </p>
        <h2 className="dB" style={{ fontSize: "clamp(52px,9vw,104px)", lineHeight: 0.88, marginBottom: 22 }}>
          <span style={{ color: "#f0ead0" }}>READY TO</span>
          <br />
          <span className="shimGold">DAZZLE?</span>
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.72, color: "rgba(240,234,208,.42)", marginBottom: 48 }}>
          Book your appointment and experience what precision detailing truly means.
        </p>
        <div
          style={{
            background: "#0f0f1c",
            borderRadius: 18,
            padding: 44,
            border: "1px solid rgba(232,184,64,.17)",
            boxShadow: "0 0 70px rgba(232,184,64,.05)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13, marginBottom: 13 }}>
            {[
              ["Your Name", "text"],
              ["Phone Number", "tel"],
            ].map(([ph, tp]) => (
              <input
                key={ph}
                type={tp}
                placeholder={ph}
                style={{
                  background: "#0b0b17",
                  border: "1px solid rgba(232,184,64,.17)",
                  borderRadius: 8,
                  padding: "14px 16px",
                  color: "#f0ead0",
                  fontSize: 14,
                  width: "100%",
                }}
              />
            ))}
          </div>
          <select
            style={{
              width: "100%",
              background: "#0b0b17",
              border: "1px solid rgba(232,184,64,.17)",
              borderRadius: 8,
              padding: "14px 16px",
              color: "rgba(240,234,208,.55)",
              fontSize: 14,
              marginBottom: 13,
            }}
          >
            <option value="">Select a Package</option>
            {PKG.map((p) => (
              <option key={p.n}>
                {p.n} — ${p.p}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Tell us about your vehicle…"
            rows={4}
            style={{
              width: "100%",
              background: "#0b0b17",
              border: "1px solid rgba(232,184,64,.17)",
              borderRadius: 8,
              padding: "14px 16px",
              color: "#f0ead0",
              fontSize: 14,
              resize: "vertical",
              marginBottom: 18,
            }}
          />
          <button
            className="btnGold dM"
            style={{
              width: "100%",
              padding: "16px 32px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              border: "none",
              cursor: "pointer",
            }}
          >
            BOOK MY APPOINTMENT →
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 36, marginTop: 46, flexWrap: "wrap" }}>
          {[
            ["📍", "123 Auto Blvd, Los Angeles CA"],
            ["📞", "(310) 555-DAZZLE"],
            ["🕐", "Mon–Sat · 8AM–6PM"],
          ].map(([ic, tx]) => (
            <div key={tx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span>{ic}</span>
              <span className="dM" style={{ fontSize: 10, color: "rgba(240,234,208,.38)" }}>
                {tx}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}