export default function Skills() {
  const skills = [
    "UX DESIGN",
    "PRODUCT DESIGN",
    "WIREFRAMING",
    "USABILITY TESTING",
    "UI DESIGN",
  ];

  return (
    <section className="bg-[#ECFF8F] px-[6vw] py-[5vw] overflow-hidden text-black">
      {/* Header */}
      <div className="flex items-center gap-[2vw] mb-[4vw]">
        <h2 className="font-bold tracking-tight text-black text-[clamp(1.5rem,3vw,2.4rem)]">
          Skills
        </h2>

        <div className="relative flex-1 h-[2px] bg-black">
          <span className="absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-black" />
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-[1.5vw]">
        {[0, 1].map((row) => (
          <div key={row} className="overflow-hidden">
            <div
              className="flex w-max whitespace-nowrap text-black"
              style={{
                animation: `marquee ${
                  row === 0 ? "28s" : "32s"
                } linear infinite`,
                animationDirection: row === 1 ? "reverse" : "normal",
              }}
            >
              {[...skills, ...skills, ...skills].map((skill, i) => (
                <span
                  key={i}
                  className="font-medium uppercase tracking-[0.15em] mr-[2vw]
                             text-black text-[clamp(1.1rem,2.5vw,2rem)]"
                >
                  {skill} <span className="mx-[1vw] text-black">*</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}