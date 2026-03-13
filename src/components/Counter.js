import { useState, useEffect, useRef } from "react";

export default function Counter({ target, suffix = "" }) {
  const [v, setV] = useState(0);
  const ref = useRef();
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let s = 0;
      const step = target / 55;
      const t = setInterval(() => { 
        s += step; 
        if (s >= target) { 
          setV(target); 
          clearInterval(t); 
        } else setV(Math.floor(s)); 
      }, 18);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}