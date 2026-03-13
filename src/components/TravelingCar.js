import { useState, useEffect, useRef } from "react";
import RealisticCar from "./RealisticCar";
import SmokeParticles from "./SmokeParticles";

export default function TravelingCar({ scrollY, docHeight }) {
  const [carX, setCarX] = useState(-260);
  const [carY, setCarY] = useState(80);
  const [facing, setFacing] = useState(1);       // 1 = right, -1 = left
  const [wheelAngle, setWheelAngle] = useState(0);
  const [headlights, setHeadlights] = useState(false);
  const [bob, setBob] = useState(0);

  const targetX = useRef(-260);
  const targetY = useRef(80);
  const rafId = useRef(null);
  const prevCarX = useRef(-260);
  const bobT = useRef(0);

  // Road dashes offset
  const [dashOff, setDashOff] = useState(0);

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    // Car width is ~220px
    const carW = 220;

    // How far through the page (0–1)
    const maxScroll = Math.max(docHeight - vh, 1);
    const progress = Math.min(scrollY / maxScroll, 1);

    // Snake lanes: divide the page into N passes
    const PASSES = 10;
    const passProgress = progress * PASSES;
    const passIndex = Math.floor(passProgress);
    const t = passProgress - passIndex;           // 0..1 within this lane

    const rightward = passIndex % 2 === 0;

    // X: sweep across viewport
    const xStart = rightward ? -carW        : vw + 10;
    const xEnd   = rightward ? vw + 10      : -carW;
    const newTargetX = xStart + (xEnd - xStart) * t;

    // Y: map pass index to a vertical position on screen
    // evenly space them across the viewport height (avoiding nav & footer)
    const yMin = 90, yMax = vh - 110;
    const totalPasses = PASSES;
    // position in viewport for this lane
    const laneY = yMin + ((passIndex / (totalPasses - 1)) * (yMax - yMin));
    const newTargetY = laneY;

    targetX.current = newTargetX;
    targetY.current = newTargetY;
  }, [scrollY, docHeight]);

  useEffect(() => {
    const animate = () => {
      bobT.current += 0.04;
      const bobOffset = Math.sin(bobT.current) * 2.2;

      setCarX(prev => {
        const nx = prev + (targetX.current - prev) * 0.055;
        const dx = nx - prevCarX.current;
        if (Math.abs(dx) > 0.3) {
          setFacing(dx > 0 ? 1 : -1);
          setDashOff(d => (d + Math.abs(dx) * 0.45) % 80);
          setWheelAngle(a => a + Math.abs(dx) * 1.1);
        }
        prevCarX.current = nx;
        return nx;
      });
      setCarY(prev => prev + (targetY.current - prev) * 0.055);
      setBob(bobOffset);

      // Headlights in middle scroll zone
      const maxScroll = Math.max(docHeight - window.innerHeight, 1);
      const p = scrollY / maxScroll;
      setHeadlights(p > 0.25 && p < 0.65);

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [scrollY, docHeight]);

  const carRenderY = carY + bob;
  const exhaustX = facing === 1 ? carX + 30  : carX + 188;
  const exhaustY = carRenderY + 78;

  return (
    <>
      {/* Road stripe at bottom of viewport */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 6, zIndex: 49, pointerEvents: "none",
        background: "linear-gradient(90deg,transparent,rgba(232,184,64,0.12) 10%,rgba(232,184,64,0.12) 90%,transparent)",
        borderTop: "1px solid rgba(232,184,64,0.08)" }}>
        <div style={{
          position: "absolute", top: "20%", height: "60%",
          left: 0, right: 0,
          backgroundImage: "repeating-linear-gradient(90deg,rgba(232,184,64,0.45) 0px,rgba(232,184,64,0.45) 42px,transparent 42px,transparent 82px)",
          backgroundPositionX: `${-dashOff}px`
        }}/>
      </div>

      {/* Speed lines (when moving fast) */}
      <div style={{
        position: "fixed", left: facing === 1 ? carX - 60 : carX + 230,
        top: carRenderY + 30, pointerEvents: "none", zIndex: 997,
        display: "flex", flexDirection: "column", gap: 6,
        opacity: 0.35
      }}>
        {[40, 26, 34, 18].map((w, i) => (
          <div key={i} style={{
            height: 1.5, width: w, borderRadius: 1,
            background: "linear-gradient(90deg,rgba(232,184,64,0.8),transparent)",
            transform: facing === 1 ? "scaleX(-1)" : "scaleX(1)"
          }}/>
        ))}
      </div>

      {/* Car drop shadow */}
      <div style={{
        position: "fixed",
        left: carX + 14,
        top: carRenderY + 84,
        width: 192,
        height: 14,
        borderRadius: "50%",
        background: "radial-gradient(ellipse,rgba(0,0,0,0.55) 0%,transparent 70%)",
        pointerEvents: "none",
        zIndex: 998,
        transform: `scaleX(${facing})`,
        transformOrigin: "center"
      }}/>

      {/* Exhaust smoke */}
      <div style={{ position: "fixed", left: exhaustX, top: exhaustY, pointerEvents: "none", zIndex: 997 }}>
        <SmokeParticles active={true}/>
      </div>

      {/* Headlight beam */}
      {headlights && (
        <div style={{
          position: "fixed",
          left: facing === 1 ? carX + 198 : carX - 90,
          top: carRenderY + 18,
          width: 95, height: 55,
          background: facing === 1
            ? "linear-gradient(to right, rgba(255,252,190,0.11), transparent)"
            : "linear-gradient(to left,  rgba(255,252,190,0.11), transparent)",
          clipPath: facing === 1
            ? "polygon(0 35%, 100% 5%, 100% 95%, 0 65%)"
            : "polygon(100% 35%, 0 5%, 0 95%, 100% 65%)",
          pointerEvents: "none",
          zIndex: 997
        }}/>
      )}

      {/* THE CAR */}
      <div style={{
        position: "fixed",
        left: carX,
        top: carRenderY,
        zIndex: 999,
        pointerEvents: "none",
        transform: `scaleX(${facing})`,
        transformOrigin: "110px 48px",
        filter: "drop-shadow(0 10px 28px rgba(232,184,64,0.32)) drop-shadow(0 3px 10px rgba(0,0,0,0.7))"
      }}>
        <RealisticCar scale={1} headlightsOn={headlights} wheelAngle={wheelAngle}/>
      </div>
    </>
  );
}