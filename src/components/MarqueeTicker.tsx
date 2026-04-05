const items = [
  "ALUMINIUM FLANGES",
  "CUSTOM CASTINGS",
  "PRECISION MACHINING",
  "ISO 9001:2015",
  "ON-TIME DELIVERY",
  "CUSTOM ENGINEERING",
  "ZED BRONZE CERTIFIED",
  "BHEL APPROVED VENDOR",
  "ADITYA BIRLA PARTNER",
];

const TickerContent = () => (
  <>
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-4 flex-shrink-0">
        <span className="text-white text-sm font-bold tracking-[0.2em] uppercase font-body whitespace-nowrap">
          {item}
        </span>
        <span className="text-white/60 text-xs">◆</span>
      </span>
    ))}
  </>
);

export default function MarqueeTicker() {
  return (
    <div className="w-full bg-[#E05A1E] py-3 overflow-hidden relative z-10">
      <div className="marquee-track">
        <TickerContent />
        <TickerContent />
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
