export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#06060e] flex-col gap-6">

      <img
        src="/logo.png"
        alt="Dazzler Car Detailing"
        className="w-28 animate-pulse"
      />

      <div className="w-40 h-[3px] bg-gray-700 rounded overflow-hidden">
        <div className="h-full w-full bg-yellow-400 animate-loading"></div>
      </div>

      <p className="text-yellow-400 tracking-[4px] text-xs">
        DAZZLER CAR DETAILING
      </p>

    </div>
  );
}