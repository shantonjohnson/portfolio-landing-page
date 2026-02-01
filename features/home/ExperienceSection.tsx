export default function Experience() {
  const experiences = [
    {
      role: "Product Designer",
      company: "Company A",
      period: "Jan 2023 - Present",
    },
    {
      role: "Sr. UI Designer",
      company: "Company B",
      period: "Jan 2022 - Des 2022",
    },
    {
      role: "Jr. UI Designer",
      company: "Company C",
      period: "Jan 2017 - Des 2021",
    },
  ];

  return (
    <section className="bg-[#FAFAF0] px-[6vw] py-[6vw] text-black">
      {/* Header */}
      <div className="flex items-center gap-[2vw] mb-[5vw]">
        <h2 className="font-bold text-[clamp(1.6rem,3vw,2.5rem)]">
          Experience
        </h2>
        <div className="relative flex-1 h-[2px] bg-black">
          <span className="absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-black" />
        </div>
      </div>

      {/* Experience list */}
      <div className="divide-y divide-black">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-[3vw]"
          >
            {/* Role */}
            <h3 className="font-bold text-[clamp(1.3rem,2.4vw,1.9rem)]">
              {item.role}
            </h3>

            {/* Company & date */}
            <div className="text-right">
              <p className="font-semibold italic text-[clamp(1.1rem,2vw,1.4rem)]">
                {item.company}
              </p>
              <p className="text-[clamp(0.95rem,1.6vw,1.1rem)]">
                {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}