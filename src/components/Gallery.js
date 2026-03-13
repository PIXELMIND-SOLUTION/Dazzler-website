export default function Gallery() {
  const items = [
    {
      label: "Ceramic Coating",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      col: "md:col-span-2 md:row-span-2",
    },
    {
      label: "Paint Correction",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      label: "Interior Detailing",
      img: "https://images.unsplash.com/photo-1617814076668-2e33b6c35f2c",
    },
    {
      label: "PPF Installation",
      img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    },
    {
      label: "Full Detail",
      img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98",
    },
  ];

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
            RESULTS THAT{" "}
            <span className="text-yellow-400">SPEAK</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">

          {items.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.col || ""}`}
            >
              {/* Image */}
              <img
                src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                alt={item.label}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-yellow-400/20 to-transparent"></div>

              {/* Label */}
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs tracking-widest text-yellow-400">
                  DAZZLER DETAILING
                </p>
                <h3 className="text-lg font-semibold">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}