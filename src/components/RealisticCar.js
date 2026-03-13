import { useRef } from "react";

export default function RealisticCar({ scale = 1, headlightsOn = false, wheelAngle = 0 }) {
  const id = useRef(`car_${Math.random().toString(36).slice(2,7)}`).current;
  return (
    <svg
      width={220 * scale} height={96 * scale}
      viewBox="0 0 220 96"
      style={{ overflow: "visible", display: "block" }}
    >
      <defs>
        {/* Body gradient – golden metallic */}
        <linearGradient id={`${id}_bodyTop`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffe787" />
          <stop offset="28%"  stopColor="#e8b840" />
          <stop offset="65%"  stopColor="#c89028" />
          <stop offset="100%" stopColor="#7a5008" />
        </linearGradient>
        <linearGradient id={`${id}_bodyLow`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#d4a020" />
          <stop offset="100%" stopColor="#5a3800" />
        </linearGradient>
        <radialGradient id={`${id}_roofGrad`} cx="50%" cy="20%" r="80%">
          <stop offset="0%"   stopColor="#fff8d0" />
          <stop offset="40%"  stopColor="#e8b840" />
          <stop offset="100%" stopColor="#7a5008" />
        </radialGradient>
        {/* Glass */}
        <linearGradient id={`${id}_glass`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%"   stopColor="rgba(190,230,255,0.75)" />
          <stop offset="60%"  stopColor="rgba(60,110,170,0.55)" />
          <stop offset="100%" stopColor="rgba(20,50,100,0.65)" />
        </linearGradient>
        {/* Wheel */}
        <radialGradient id={`${id}_tire`} cx="38%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
        <radialGradient id={`${id}_rim`} cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#e0e0e0" />
          <stop offset="55%"  stopColor="#b0b0b0" />
          <stop offset="100%" stopColor="#707070" />
        </radialGradient>
        {/* Headlight glow */}
        <filter id={`${id}_hglow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={`${id}_shadow`} x="-20%" y="-20%" width="140%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.55"/>
        </filter>
      </defs>

      {/* ── Ground shadow ── */}
      <ellipse cx="110" cy="92" rx="92" ry="7" fill="rgba(0,0,0,0.45)" />

      {/* ── Body (lower slab) ── */}
      <g filter={`url(#${id}_shadow)`}>
        <path
          d="M22 65 L22 54 Q22 47 32 45 L192 45 Q202 47 202 54 L202 65 Q202 72 196 74 L28 74 Q22 72 22 65 Z"
          fill={`url(#${id}_bodyLow)`}
        />
        {/* Side character line */}
        <path d="M28 53 Q80 50 190 52" fill="none" stroke="rgba(255,240,150,0.25)" strokeWidth="1.2"/>

        {/* ── Cabin / roof ── */}
        <path
          d="M60 45 Q64 22 74 14 L95 7 Q110 4 125 4 L142 4 Q158 4 168 10 L184 20 Q192 30 193 40 L194 45 Z"
          fill={`url(#${id}_roofGrad)`}
        />
        {/* Roof highlight */}
        <path
          d="M78 38 Q84 16 93 10 L122 5 L155 6 Q162 9 169 16 L178 28 L177 36 Q160 20 135 17 L97 17 Q82 20 78 38 Z"
          fill="rgba(255,252,200,0.13)"
        />

        {/* ── Hood ── */}
        <path
          d="M60 45 L60 38 Q60 30 72 28 L192 37 L194 45 Z"
          fill={`url(#${id}_bodyTop)`}
        />
        {/* Hood crease */}
        <path d="M76 43 Q120 36 188 40" fill="none" stroke="rgba(255,240,150,0.18)" strokeWidth="1"/>

        {/* ── Trunk ── */}
        <path d="M22 45 L22 65 L60 65 L60 45 Z" fill={`url(#${id}_bodyTop)`}/>

        {/* Side skirt */}
        <path d="M24 72 L200 72 Q204 72 204 74 L204 76 Q204 78 200 78 L24 78 Q20 78 20 76 L20 74 Q20 72 24 72 Z" fill="#8a5c08"/>
      </g>

      {/* ── Windshield ── */}
      <path
        d="M77 44 Q82 22 92 12 L120 5 L155 5 Q163 8 169 17 L180 34 L181 44 Z"
        fill={`url(#${id}_glass)`} opacity="0.9"
      />
      {/* Windshield inner reflection */}
      <path d="M88 42 Q94 23 101 13 L126 7 L142 7 Q132 13 124 22 L108 40 Z" fill="rgba(255,255,255,0.09)"/>
      {/* Wiper hint */}
      <path d="M96 42 Q120 28 160 38" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="0.8"/>

      {/* ── Rear window ── */}
      <path d="M24 44 L24 33 Q26 24 37 20 L58 13 L60 30 L60 44 Z" fill={`url(#${id}_glass)`} opacity="0.8"/>

      {/* ── A/B/C pillars ── */}
      <path d="M76 44 L82 18 L90 11 L92 12 Q84 21 80 44 Z" fill="rgba(80,50,0,0.5)"/>
      <path d="M125 44 L125 4 L129 4 L129 44 Z" fill="rgba(70,44,0,0.4)"/>
      <path d="M181 44 L174 26 L171 19 L173 18 Q180 28 183 44 Z" fill="rgba(80,50,0,0.5)"/>

      {/* ── Door lines ── */}
      <line x1="60" y1="45" x2="60" y2="72" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5"/>
      <line x1="125" y1="45" x2="125" y2="72" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5"/>

      {/* ── Door handles ── */}
      <rect x="78" y="57" width="16" height="3.5" rx="1.75" fill="rgba(255,235,100,0.55)" stroke="rgba(200,160,0,0.4)" strokeWidth="0.5"/>
      <rect x="136" y="57" width="16" height="3.5" rx="1.75" fill="rgba(255,235,100,0.55)" stroke="rgba(200,160,0,0.4)" strokeWidth="0.5"/>

      {/* ── Front bumper ── */}
      <path d="M192 60 Q206 57 208 64 Q208 72 202 74 L194 74 Q200 70 200 64 Z" fill="#b88818"/>
      {/* Grille */}
      <path d="M196 62 Q205 60 207 65 L205 70 Q200 72 196 70 Z" fill="#111"/>
      {[0,1,2,3].map(i=>(
        <line key={i} x1="197" y1={63+i*1.8} x2="206" y2={62+i*1.8} stroke="#2a2a2a" strokeWidth="0.7"/>
      ))}
      {/* Front lip */}
      <path d="M190 74 Q206 74 208 76 L208 78 Q206 80 192 80 Z" fill="#6a3c00"/>

      {/* ── Rear bumper ── */}
      <path d="M28 60 Q14 57 12 64 Q12 72 18 74 L26 74 Q20 70 20 64 Z" fill="#b88818"/>
      <path d="M30 74 Q14 74 12 76 L12 78 Q14 80 28 80 Z" fill="#6a3c00"/>

      {/* ── Headlights ── */}
      <path
        d="M193 46 Q202 48 206 54 L204 58 L190 54 Z"
        fill={headlightsOn ? "rgba(255,252,210,0.98)" : "rgba(255,225,120,0.65)"}
        filter={headlightsOn ? `url(#${id}_hglow)` : ""}
      />
      {/* Headlight DRL strip */}
      <path d="M192 47 Q200 49 204 53" fill="none" stroke={headlightsOn ? "rgba(255,255,200,0.9)" : "rgba(255,210,80,0.4)"} strokeWidth="1.5"/>
      {/* Headlight beam cone */}
      {headlightsOn && (
        <path d="M205 52 L260 25 L275 58 L245 68 Z" fill="rgba(255,252,180,0.055)"/>
      )}

      {/* ── Tail lights ── */}
      <path d="M27 46 Q18 48 14 54 L16 58 L30 54 Z" fill="rgba(210,35,15,0.75)"/>
      <path d="M23 48 Q16 50 13 55 L15 57 L27 54 Z" fill="rgba(255,80,50,0.45)"/>

      {/* ── Exhaust tips ── */}
      <ellipse cx="32" cy="78" rx="4.5" ry="3" fill="#1a1a1a" stroke="#555" strokeWidth="0.6"/>
      <ellipse cx="32" cy="78" rx="2.8" ry="1.8" fill="#0d0d0d"/>
      <ellipse cx="22" cy="78" rx="3.5" ry="2.5" fill="#1a1a1a" stroke="#444" strokeWidth="0.5"/>

      {/* ── Antenna ── */}
      <line x1="130" y1="4" x2="126" y2="-11" stroke="#999" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="126" cy="-12" r="1.5" fill="#aaa"/>

      {/* ── WHEELS ── */}
      {[[48, 78, 18], [168, 78, 18]].map(([cx, cy, R], wi) => {
        const spokes = 9;
        return (
          <g key={wi}>
            {/* Tyre */}
            <circle cx={cx} cy={cy} r={R+1}   fill="#1a1a1a"/>
            <circle cx={cx} cy={cy} r={R}      fill={`url(#${id}_tire)`}/>
            <circle cx={cx} cy={cy} r={R}      fill="none" stroke="#2a2a2a" strokeWidth="2"/>
            {/* Tyre lettering hint */}
            <path d={`M${cx-R*0.92},${cy} a${R*0.92},${R*0.92} 0 0,1 ${R*0.92*2},0`} fill="none" stroke="rgba(80,80,80,0.4)" strokeWidth="0.7"/>

            {/* Rim face */}
            <circle cx={cx} cy={cy} r={R*0.72} fill={`url(#${id}_rim)`}/>
            <circle cx={cx} cy={cy} r={R*0.72} fill="none" stroke="#c0c0c0" strokeWidth="0.6"/>

            {/* Spokes */}
            {Array.from({length: spokes}).map((_, si) => {
              const a = ((si / spokes) * 360 + wheelAngle) * Math.PI / 180;
              return (
                <g key={si}>
                  <line
                    x1={cx + Math.cos(a)*R*0.12} y1={cy + Math.sin(a)*R*0.12}
                    x2={cx + Math.cos(a)*R*0.66} y2={cy + Math.sin(a)*R*0.66}
                    stroke="#c8c8c8" strokeWidth="2.2" strokeLinecap="round"
                  />
                  {/* spoke shadow side */}
                  <line
                    x1={cx + Math.cos(a)*R*0.12} y1={cy + Math.sin(a)*R*0.12}
                    x2={cx + Math.cos(a)*R*0.66} y2={cy + Math.sin(a)*R*0.66}
                    stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeLinecap="round"
                    transform={`translate(${0.6},${0.6})`}
                  />
                </g>
              );
            })}

            {/* Rim outer ring */}
            <circle cx={cx} cy={cy} r={R*0.7} fill="none" stroke="#909090" strokeWidth="1"/>
            {/* Centre cap */}
            <circle cx={cx} cy={cy} r={R*0.18} fill="#aaa"/>
            <circle cx={cx} cy={cy} r={R*0.11} fill="#666"/>
            <circle cx={cx} cy={cy} r={R*0.05} fill="#333"/>

            {/* Tyre shine */}
            <path
              d={`M${cx - R*0.55},${cy - R*0.6} Q${cx - R*0.1},${cy - R*0.95} ${cx + R*0.35},${cy - R*0.72}`}
              fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="2.5"
            />
          </g>
        );
      })}

      {/* ── Body shine streaks ── */}
      <path d="M82 10 Q130 7 170 12 Q155 9 130 9 Q106 9 82 10 Z" fill="rgba(255,255,255,0.13)"/>
      <path d="M68 40 Q100 34 188 38 Q160 35 95 36 Q79 37 68 40 Z" fill="rgba(255,255,255,0.07)"/>
    </svg>
  );
}