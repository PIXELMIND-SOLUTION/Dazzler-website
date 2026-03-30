import React, { useRef, useState } from "react";

const items = [
  {
    label: "Ceramic Coating",
    video: new URL("../assets/IMG_2367.MOV", import.meta.url).href,
    col: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Paint Correction",
    video: new URL("../assets/IMG_2369.MOV", import.meta.url).href,
  },
  {
    label: "Interior Detailing",
    video: new URL("../assets/IMG_2371.MOV", import.meta.url).href,
  },
  {
    label: "PPF Installation",
    video: new URL("../assets/IMG_2373.MOV", import.meta.url).href,
  },
  {
    label: "Full Detail",
    video: new URL("../assets/IMG_2374.MOV", import.meta.url).href,
  },
];

function VideoCard({ item }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.col || ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        autoPlay={true}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
      />

      {/* Play icon shown when not hovered */}
      {!hovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm border border-yellow-400/40 rounded-full p-3">
            <svg
              className="w-6 h-6 text-yellow-400 fill-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition duration-500 ${
          hovered ? "bg-black/30" : "bg-black/50"
        }`}
      />

      {/* Glow effect */}
      <div
        className={`absolute inset-0 transition duration-500 bg-gradient-to-tr from-yellow-400/20 to-transparent ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Label */}
      <div className="absolute bottom-5 left-5 text-white z-10">
        <p className="text-xs tracking-widest text-yellow-400">
          DAZZLER DETAILING
        </p>
        <h3 className="text-lg font-semibold">{item.label}</h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-gradient-to-b from-[#06060e] to-[#0c0c18]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[4px] text-yellow-400 mb-4">
            — OUR WORK —
          </p>
          <h2 className="text-[clamp(36px,6vw,72px)] font-bold text-[#f0ead0] leading-tight">
            RESULTS THAT <span className="text-yellow-400">SPEAK</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {items.map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}