import { useState, useEffect } from "react";
import RealisticCar from "./RealisticCar";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkBreakpoints = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkBreakpoints();
    window.addEventListener("resize", checkBreakpoints);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const glowInterval = setInterval(() => {
      setGlowIntensity((prev) => (prev + 0.02) % (Math.PI * 2));
    }, 50);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkBreakpoints);
      clearInterval(glowInterval);
    };
  }, []);

  const glowValue = Math.sin(glowIntensity) * 0.5 + 0.5;
  const isSmall = isMobile || isTablet;

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#06060e",
        isolation: "isolate",
      }}
    >
      {/* Animated background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(232, 184, 64, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 184, 64, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: "transform 0.1s ease-out",
          zIndex: 1,
        }}
      />

      {/* Floating orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: isMobile ? "-10%" : "10%",
          width: isMobile ? "280px" : "500px",
          height: isMobile ? "280px" : "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(232,184,64,0.15), transparent 70%)",
          filter: "blur(40px)",
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: "transform 0.2s ease-out",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: isMobile ? "-10%" : "5%",
          width: isMobile ? "250px" : "400px",
          height: isMobile ? "250px" : "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 70% 70%, rgba(100,150,255,0.12), transparent 70%)",
          filter: "blur(50px)",
          transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          transition: "transform 0.15s ease-out",
          zIndex: 1,
        }}
      />

      {/* Main content container */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : isTablet ? "0 24px" : "0 32px",
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: isMobile ? "80px" : "0",
          paddingBottom: isMobile ? "80px" : "0",
          boxSizing: "border-box",
        }}
      >
        {/* Top decorative badge */}
        <div
          style={{
            marginBottom: isMobile ? "20px" : "30px",
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out forwards",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(232,184,64,0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(232,184,64,0.2)",
              borderRadius: "100px",
              padding: "8px 20px 8px 12px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #e8b840, #9a6e08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#06060e",
                fontWeight: "bold",
              }}
            >
              ✨
            </div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: isMobile ? "10px" : "12px",
                letterSpacing: "2px",
                color: "#e8b840",
                textTransform: "uppercase",
              }}
            >
              The Future of Detailing
            </span>
          </div>
        </div>

        {/* Main headline with responsive layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1.2fr 0.8fr",
            gap: isMobile ? "30px" : isTablet ? "30px" : "40px",
            alignItems: "center",
          }}
        >
          {/* Left column - Dynamic text */}
          <div
            style={{
              opacity: 0,
              animation: "fadeInLeft 1s ease-out forwards",
            }}
          >
            <h1
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: isMobile
                  ? "clamp(60px, 18vw, 90px)"
                  : isTablet
                  ? "clamp(70px, 12vw, 100px)"
                  : "clamp(70px, 8vw, 130px)",
                lineHeight: "0.9",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(135deg, #fff 0%, #f0ead0 50%, #e8b840 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                REDEFINE
              </span>
              <span
                style={{
                  display: "block",
                  color: "transparent",
                  WebkitTextStroke: "2px #e8b840",
                  textShadow: `0 0 ${20 + glowValue * 20}px rgba(232,184,64,${
                    0.3 + glowValue * 0.3
                  })`,
                  marginTop: "-15px",
                }}
              >
                PERFECTION
              </span>
            </h1>

            {/* Stats strip */}
            <div
              style={{
                display: "flex",
                gap: isMobile ? "16px" : "30px",
                marginBottom: isMobile ? "24px" : "40px",
                padding: "20px 0",
                borderTop: "1px solid rgba(232,184,64,0.1)",
                borderBottom: "1px solid rgba(232,184,64,0.1)",
              }}
            >
              {[
                { label: "Years Experience", value: "8+" },
                { label: "Cars Detailed", value: "1.2k" },
                { label: "Happy Clients", value: "100%" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', cursive",
                      fontSize: isMobile ? "28px" : "38px",
                      color: "#e8b840",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: isMobile ? "8px" : "10px",
                      letterSpacing: isMobile ? "1px" : "2px",
                      color: "rgba(240,234,208,0.4)",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: "1.8",
                color: "rgba(240,234,208,0.6)",
                maxWidth: "500px",
                marginBottom: isMobile ? "28px" : "40px",
                position: "relative",
                paddingLeft: "20px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "2px",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, transparent, #e8b840, transparent)",
                }}
              />
              Experience the pinnacle of automotive artistry. We don't just
              detail cars — we orchestrate masterpieces that transcend ordinary
              expectations.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: "flex",
                gap: isMobile ? "12px" : "20px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#pricing"
                style={{
                  padding: isMobile ? "14px 28px" : "18px 42px",
                  background: "linear-gradient(135deg, #e8b840, #9a6e08)",
                  border: "none",
                  borderRadius: "50px",
                  color: "#06060e",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: isMobile ? "10px" : "12px",
                  fontWeight: "700",
                  letterSpacing: isMobile ? "1px" : "3px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: `0 10px 30px -5px rgba(232,184,64,${
                    0.3 + glowValue * 0.3
                  })`,
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 20px 40px -5px rgba(232,184,64,${
                    0.5 + glowValue * 0.3
                  })`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `0 10px 30px -5px rgba(232,184,64,${
                    0.3 + glowValue * 0.3
                  })`;
                }}
              >
                <span style={{ position: "relative", zIndex: 2 }}>
                  Start Your Journey
                </span>
              </a>

              <a
                href="#process"
                style={{
                  padding: isMobile ? "14px 28px" : "18px 42px",
                  background: "transparent",
                  border: "1px solid rgba(232,184,64,0.4)",
                  borderRadius: "50px",
                  color: "#e8b840",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: isMobile ? "10px" : "12px",
                  letterSpacing: isMobile ? "1px" : "3px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#e8b840";
                  e.currentTarget.style.background = "rgba(232,184,64,0.1)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px -5px rgba(232,184,64,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,184,64,0.4)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Watch Showreel
              </a>
            </div>
          </div>

          {/* Right column - Interactive car display */}
          <div
            style={{
              position: "relative",
              height: isMobile ? "300px" : isTablet ? "400px" : "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              animation: "fadeInRight 1s ease-out 0.3s forwards",
            }}
          >
            {/* Car container with 3D effect */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transform: `perspective(1000px) rotateY(${
                  mousePosition.x * 0.5
                }deg) rotateX(${mousePosition.y * -0.5}deg)`,
                transition: "transform 0.1s ease-out",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Floating rings */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: isMobile ? "220px" : isTablet ? "300px" : "400px",
                  height: isMobile ? "220px" : isTablet ? "300px" : "400px",
                  border: "2px solid rgba(232,184,64,0.1)",
                  borderRadius: "50%",
                  animation: "spin 20s linear infinite",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: isMobile ? "280px" : isTablet ? "380px" : "500px",
                  height: isMobile ? "280px" : isTablet ? "380px" : "500px",
                  border: "1px solid rgba(232,184,64,0.05)",
                  borderRadius: "50%",
                  animation: "spin 25s linear infinite reverse",
                }}
              />

              {/* Car with glow effects */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) scale(${
                    isMobile ? 0.7 : isTablet ? 0.9 : 1.2
                  })`,
                  filter: `drop-shadow(0 0 ${
                    30 + glowValue * 30
                  }px rgba(232,184,64,${0.3 + glowValue * 0.3}))`,
                  transition: "filter 0.1s ease",
                }}
              >
                <RealisticCar
                  scale={1}
                  headlightsOn={true}
                  wheelAngle={mousePosition.x * 10}
                />
              </div>

              {/* Floating particles */}
              {[...Array(isMobile ? 10 : 20)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${
                      50 + Math.sin(i * 0.5 + glowIntensity) * 40
                    }%`,
                    left: `${
                      50 + Math.cos(i * 0.3 + glowIntensity) * 40
                    }%`,
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: `rgba(232,184,64,${
                      0.1 + Math.sin(i + glowIntensity) * 0.1
                    })`,
                    transform: "translate(-50%, -50%)",
                    animation: `float ${5 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Bottom stats bar */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                display: "flex",
                justifyContent: "space-between",
                background: "rgba(6,6,14,0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "50px",
                padding: isMobile ? "10px 20px" : "15px 30px",
                border: "1px solid rgba(232,184,64,0.1)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#e8b840",
                    animation: "pulse 2s ease infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(240,234,208,0.5)",
                  }}
                >
                  LIVE
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: isMobile ? "8px" : "10px",
                  color: "#e8b840",
                }}
              >
                <span style={{ color: "rgba(240,234,208,0.3)" }}></span>
                INTERACTIVE PREVIEW
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile to save space */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            opacity: 0,
            animation: "fadeIn 1s ease-out 1.5s forwards",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                letterSpacing: "4px",
                color: "rgba(240,234,208,0.3)",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              SCROLL
            </span>
            <div
              style={{
                width: "1px",
                height: "60px",
                background: "linear-gradient(to bottom, #e8b840, transparent)",
              }}
            />
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .hero-section { animation: fadeIn 1s ease-out; }
      `}</style>
    </section>
  );
}