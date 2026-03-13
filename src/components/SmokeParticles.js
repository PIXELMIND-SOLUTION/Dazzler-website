import { useState, useEffect, useRef } from "react";

export default function SmokeParticles({ active }) {
  const [particles, setParticles] = useState([]);
  const nextId = useRef(0);
  
  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      const id = nextId.current++;
      setParticles(p => [...p.slice(-10), { id, x: 0, y: 0, life: 1, r: Math.random() * 3 + 2 }]);
    }, 80);
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setParticles(p =>
        p.map(pt => ({ ...pt, x: pt.x - 1.4, y: pt.y - 1.1, life: pt.life - 0.06, r: pt.r + 0.4 }))
         .filter(pt => pt.life > 0)
      );
    });
    return () => cancelAnimationFrame(frame);
  });

  return (
    <svg style={{ position: "absolute", left: -20, top: -10, overflow: "visible", pointerEvents: "none" }} width="1" height="1">
      {particles.map(pt => (
        <circle key={pt.id} cx={pt.x} cy={pt.y} r={pt.r}
          fill={`rgba(180,175,165,${pt.life * 0.22})`}
        />
      ))}
    </svg>
  );
}