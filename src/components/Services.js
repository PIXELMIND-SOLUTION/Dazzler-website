import { useState, useEffect, useRef } from "react";
import { SERVICES } from "../data/constants";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);
  const progressRef = useRef(null);

  // Color mapping for service cards
  const colorMap = {
    cyan: "64, 224, 208",
    violet: "138, 43, 226",
    amber: "255, 191, 0",
    rose: "255, 105, 180",
    emerald: "80, 200, 120",
    yellow: "255, 215, 0"
  };

  // Background images mapping
  const bgImages = [
    "https://images.unsplash.com/photo-1607863680198-23d4b2825ab6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1607863680198-23d4b2825ab6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovering && !isPaused) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % SERVICES.length);
      }, 2000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovering, isPaused]);

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }
    if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  };

  return (
    <section
      id="services"
      className="services-section"
      style={{
        minHeight: "100vh",
        padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 28px)",
        background: "linear-gradient(135deg, #0a0a14 0%, #0f0f1c 50%, #0a0a14 100%)",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate"
      }}
    >
      {/* Animated background particles */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(232,184,64,0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(232,184,64,0.03) 0%, transparent 50%)
        `,
        zIndex: 1
      }} />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            width: `${clamp(150, 300, 200 + i * 50)}px`,
            height: `${clamp(150, 300, 200 + i * 50)}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, rgba(232,184,64,${0.02 + i * 0.01}), transparent 70%)`,
            filter: "blur(60px)",
            animation: `floatOrb ${15 + i * 5}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
            zIndex: 1
          }}
        />
      ))}

      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative",
        zIndex: 2
      }}>
        {/* Section header with animated underline */}
        <div style={{
          textAlign: "center",
          opacity: 0,
          animation: "fadeInDown 0.8s ease-out forwards"
        }}>
          <div style={{
            display: "inline-block",
            marginBottom: 20,
            position: "relative"
          }}>
            <span className="dM" style={{
              fontSize: "clamp(10px, 2vw, 12px)",
              letterSpacing: "clamp(3px, 1vw, 6px)",
              color: "#e8b840",
              textTransform: "uppercase",
              background: "rgba(232,184,64,0.1)",
              padding: "clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 20px)",
              borderRadius: 30,
              border: "1px solid rgba(232,184,64,0.2)",
              backdropFilter: "blur(10px)",
              whiteSpace: "nowrap"
            }}>
              ✦ Premium Services ✦
            </span>
          </div>

          <h2 className="dB" style={{
            fontSize: "clamp(40px, 8vw, 100px)",
            lineHeight: 0.9,
            color: "#f0ead0",
            marginBottom: "clamp(10px, 2vw, 20px)",
            position: "relative"
          }}>
            <span style={{
              background: "linear-gradient(135deg, #fff 0%, #e8b840 50%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              CRAFTING
            </span>
            <br />
            <span style={{
              color: "transparent",
              WebkitTextStroke: "2px #e8b840",
              textShadow: "0 0 30px rgba(232,184,64,0.3)"
            }}>
              EXCELLENCE
            </span>
          </h2>

          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(240,234,208,0.5)",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.8,
            padding: "0 16px"
          }}>
            Each service is meticulously crafted to transform your vehicle
            into a masterpiece of automotive art.
          </p>
        </div>

        {/* Main slider container */}
        <div
          ref={sliderRef}
          className="slider-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            padding: "clamp(20px, 4vw, 40px) 0",
            perspective: "2000px",
            touchAction: "pan-y pinch-zoom"
          }}
        >
          {/* Progress bar */}
          <div style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(300px, 80%)",
            height: 2,
            background: "rgba(232,184,64,0.1)",
            borderRadius: 2,
            overflow: "hidden",
            zIndex: 20
          }}>
            <div
              ref={progressRef}
              style={{
                height: "100%",
                width: `${((activeIndex + 1) / SERVICES.length) * 100}%`,
                background: "linear-gradient(90deg, #e8b840, #f5d060)",
                transition: "width 0.3s ease",
                position: "relative"
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 20,
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3))"
              }} />
            </div>
          </div>

          {/* 3D Carousel */}
          <div style={{
            position: "relative",
            height: "clamp(400px, 60vh, 500px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30
          }}>
            {SERVICES.map((service, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;

              // Responsive calculations
              const cardWidth = window.innerWidth < 768 ? 280 : 380;
              const translateX = offset * (window.innerWidth < 768 ? 200 : 300);
              const translateZ = isActive ? (window.innerWidth < 768 ? 100 : 200) : -Math.abs(offset) * (window.innerWidth < 768 ? 50 : 100);
              const rotateY = offset * (window.innerWidth < 768 ? 10 : 15);
              const opacity = isActive ? 1 : window.innerWidth < 768 ? 0 : 0.4;
              const scale = isActive ? 1 : window.innerWidth < 768 ? 0.8 : 0.8;
              const zIndex = SERVICES.length - Math.abs(offset);

              return (
                <div
                  key={index}
                  className="service-card"
                  style={{
                    position: "absolute",
                    width: `${cardWidth}px`,
                    height: window.innerWidth < 768 ? "400px" : "450px",
                    borderRadius: "30px",
                    padding: "clamp(20px, 3vw, 40px) clamp(15px, 2.5vw, 30px)",
                    cursor: "pointer",
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                    transformStyle: "preserve-3d",
                    backdropFilter: "blur(10px)",
                    boxShadow: isActive
                      ? `0 30px 50px -20px rgba(${colorMap[service.col]},0.5), inset 0 0 30px rgba(${colorMap[service.col]},0.2)`
                      : "0 20px 30px -15px rgba(0,0,0,0.5)",
                    zIndex: zIndex,
                    left: "50%",
                    marginLeft: `-${cardWidth / 2}px`,
                    overflow: "hidden",
                    border: isActive
                      ? `2px solid rgba(${colorMap[service.col]},0.5)`
                      : "1px solid rgba(232,184,64,0.1)",
                  }}
                  onMouseMove={(e) => {
                    if (isActive && window.innerWidth > 768) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / rect.width - 0.5;
                      const y = (e.clientY - rect.top) / rect.height - 0.5;
                      e.currentTarget.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY + x * 5}deg) rotateX(${y * -5}deg) scale(${scale})`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isActive) {
                      e.currentTarget.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
                    }
                  }}
                >
                  {/* Background Image with Overlay */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${bgImages[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.3s ease",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    zIndex: 1
                  }} />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, 
                      rgba(10,10,20,0.95) 0%, 
                      rgba(${colorMap[service.col]},0.3) 50%,
                      rgba(10,10,20,0.95) 100%
                    )`,
                    zIndex: 2
                  }} />

                  {/* Dark Overlay for better text readability */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.3)",
                    zIndex: 3
                  }} />

                  {/* Glowing background effect */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 50% 50%, rgba(${colorMap[service.col]},0.2), transparent 70%)`,
                    opacity: isActive ? 0.5 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    zIndex: 4
                  }} />

                  {/* Content */}
                  <div style={{
                    position: "relative",
                    zIndex: 5,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#fff"
                  }}>
                    {/* Icon with 3D effect */}
                    <div style={{
                      width: "clamp(60px, 8vw, 80px)",
                      height: "clamp(60px, 8vw, 80px)",
                      borderRadius: "25px",
                      background: `linear-gradient(135deg, rgba(${colorMap[service.col]},0.3), rgba(${colorMap[service.col]},0.1))`,
                      border: `1px solid rgba(${colorMap[service.col]},0.4)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(30px, 4vw, 40px)",
                      color: `rgb(${colorMap[service.col]})`,
                      marginBottom: "clamp(15px, 2.5vw, 30px)",
                      transform: `translateZ(${window.innerWidth < 768 ? 20 : 30}px)`,
                      boxShadow: `0 10px 20px -10px rgba(${colorMap[service.col]},0.3)`,
                      position: "relative",
                      overflow: "hidden",
                      backdropFilter: "blur(5px)"
                    }}>
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent)`,
                        transform: "translateX(-100%)",
                        animation: isActive ? "shine 2s infinite" : "none"
                      }} />
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="dB" style={{
                      fontSize: "clamp(28px, 4vw, 36px)",
                      letterSpacing: 1,
                      color: "#fff",
                      marginBottom: "clamp(10px, 1.5vw, 15px)",
                      transform: `translateZ(${window.innerWidth < 768 ? 15 : 20}px)`,
                      textShadow: `0 0 20px rgba(${colorMap[service.col]},0.5)`
                    }}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: "clamp(13px, 1.8vw, 14px)",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: "clamp(15px, 2vw, 25px)",
                      transform: `translateZ(${window.innerWidth < 768 ? 10 : 15}px)`,
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                    }}>
                      {service.desc}
                    </p>

                    {/* Features/Tags */}
                    <div style={{
                      display: "flex",
                      gap: "clamp(5px, 1vw, 10px)",
                      flexWrap: "wrap",
                      marginBottom: "clamp(15px, 2vw, 25px)",
                      transform: `translateZ(${window.innerWidth < 768 ? 5 : 10}px)`
                    }}>
                      {service.features.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            padding: "clamp(4px, 0.8vw, 5px) clamp(8px, 1.5vw, 12px)",
                            background: `rgba(${colorMap[service.col]},0.2)`,
                            borderRadius: 20,
                            fontSize: "clamp(9px, 1.2vw, 10px)",
                            fontFamily: "'Space Mono', monospace",
                            color: "#fff",
                            border: `1px solid rgba(${colorMap[service.col]},0.3)`,
                            backdropFilter: "blur(5px)"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Learn more button */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      transform: `translateZ(${window.innerWidth < 768 ? 15 : 25}px)`,
                      marginTop: "auto"
                    }}>
                      <span className="dM" style={{
                        fontSize: "clamp(10px, 1.4vw, 11px)",
                        letterSpacing: 2,
                        color: `rgb(${colorMap[service.col]})`,
                        textTransform: "uppercase"
                      }}>
                        Discover Service
                      </span>
                      <span style={{
                        fontSize: 18,
                        color: `rgb(${colorMap[service.col]})`,
                        transform: "translateX(0)",
                        transition: "transform 0.3s ease"
                      }}>
                        →
                      </span>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 40,
                    height: 40,
                    borderTop: `2px solid rgba(${colorMap[service.col]},0.4)`,
                    borderRight: `2px solid rgba(${colorMap[service.col]},0.4)`,
                    borderRadius: "0 20px 0 0",
                    zIndex: 6
                  }} />

                  <div style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    width: 40,
                    height: 40,
                    borderBottom: `2px solid rgba(${colorMap[service.col]},0.4)`,
                    borderLeft: `2px solid rgba(${colorMap[service.col]},0.4)`,
                    borderRadius: "0 0 0 20px",
                    zIndex: 6
                  }} />
                </div>
              );
            })}
          </div>

          {/* Navigation controls */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(10px, 2vw, 20px)",
            marginTop: "clamp(20px, 4vw, 40px)",
            position: "relative",
            zIndex: 10,
            flexWrap: "wrap",
            alignItems: "center"
          }}>
            <button
              onClick={handlePrev}
              style={{
                width: "clamp(40px, 6vw, 60px)",
                height: "clamp(40px, 6vw, 60px)",
                borderRadius: "50%",
                background: "rgba(232,184,64,0.1)",
                border: "1px solid rgba(232,184,64,0.3)",
                color: "#e8b840",
                fontSize: "clamp(18px, 3vw, 24px)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(232,184,64,0.2)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(232,184,64,0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label="Previous service"
            >
              ←
            </button>

            {/* Progress indicators */}
            <div style={{
              display: "flex",
              gap: "clamp(8px, 1.5vw, 12px)",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              {SERVICES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    width: index === activeIndex ? "clamp(20px, 4vw, 30px)" : "clamp(8px, 1.5vw, 10px)",
                    height: "clamp(8px, 1.5vw, 10px)",
                    borderRadius: 10,
                    background: index === activeIndex
                      ? "linear-gradient(90deg, #e8b840, #f5d060)"
                      : "rgba(232,184,64,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  aria-label={`Go to service ${index + 1}`}
                >
                  {index === activeIndex && (
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "30%",
                      background: "rgba(255,255,255,0.3)",
                      animation: "slide 2s linear infinite"
                    }} />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: "clamp(40px, 6vw, 60px)",
                height: "clamp(40px, 6vw, 60px)",
                borderRadius: "50%",
                background: "rgba(232,184,64,0.1)",
                border: "1px solid rgba(232,184,64,0.3)",
                color: "#e8b840",
                fontSize: "clamp(18px, 3vw, 24px)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(232,184,64,0.2)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(232,184,64,0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label="Next service"
            >
              →
            </button>
          </div>

          {/* Pause/Play button for mobile */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20
          }}>
            <button
              onClick={() => setIsPaused(!isPaused)}
              style={{
                padding: "8px 20px",
                background: "rgba(232,184,64,0.1)",
                border: "1px solid rgba(232,184,64,0.3)",
                borderRadius: 30,
                color: "#e8b840",
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                display: window.innerWidth < 768 ? "block" : "none"
              }}
            >
              {isPaused ? "▶ Play" : "⏸ Pause"}
            </button>
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "clamp(20px, 4vw, 60px)",
          marginTop: "clamp(40px, 6vw, 80px)",
          padding: "clamp(20px, 3vw, 30px)",
          background: "rgba(15,15,28,0.5)",
          backdropFilter: "blur(10px)",
          borderRadius: "clamp(30px, 5vw, 50px)",
          border: "1px solid rgba(232,184,64,0.1)"
        }}>
          {[
            { label: "Premium Services", value: "6+" },
            { label: "Years Experience", value: "8+" },
            { label: "Happy Clients", value: "1.2k" },
            { label: "Expert Detailers", value: "15+" }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="dB" style={{
                fontSize: "clamp(32px, 5vw, 42px)",
                color: "#e8b840",
                lineHeight: 1,
                marginBottom: 5
              }}>
                {stat.value}
              </div>
              <div className="dM" style={{
                fontSize: "clamp(9px, 1.5vw, 10px)",
                letterSpacing: 2,
                color: "rgba(240,234,208,0.4)"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatOrb {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        .service-card {
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .service-card:hover {
          box-shadow: 0 30px 60px -20px rgba(232,184,64,0.3) !important;
        }

        @media (max-width: 768px) {
          .service-card {
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
          }
        }

        @media (max-width: 480px) {
          .service-card {
            width: 260px !important;
            height: 380px !important;
            margin-left: -130px !important;
          }
        }
      `}</style>
    </section>
  );
}