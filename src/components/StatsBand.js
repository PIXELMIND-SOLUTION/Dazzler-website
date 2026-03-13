import Counter from "./Counter";

export default function StatsBand() {
  return (
    <div style={{ 
      background: "linear-gradient(135deg,#9a6e08,#e8b840,#f5d060,#e8b840,#9a6e08)", 
      padding: "42px 28px" 
    }}>
      <div style={{ 
        maxWidth: 1280, 
        margin: "0 auto", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", 
        gap: 20, 
        textAlign: "center" 
      }}>
        {[
          [1200, "Cars", "Detailed"],
          [8, "Years", "Of Excellence"],
          [50, "Services", "Available"],
          [99, "%", "Satisfaction"],
        ].map(([n, a, b], i) => (
          <div key={i}>
            <div className="dB" style={{ fontSize: 58, color: "#06060e", lineHeight: 1 }}>
              <Counter target={typeof n === "number" ? n : 0} suffix={a === "%" ? "%" : "+"} />
            </div>
            <div className="dM" style={{ fontSize: 9, letterSpacing: 2, color: "rgba(6,6,14,.5)", marginTop: 4 }}>
              {a !== "%" ? a : "Client"} {b}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}