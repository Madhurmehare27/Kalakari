"use client";

const steps = [
  {
    icon: "🌸",
    title: "Flower Crafts",
    desc: "Beautiful handcrafted floral creations",
  },
  {
    icon: "✨",
    title: "Resin Art",
    desc: "Premium resin handmade products",
  },
  {
    icon: "🎁",
    title: "Gift Boxes",
    desc: "Personalized gifts for every occasion",
  },
  {
    icon: "🏡",
    title: "Home Decor",
    desc: "Elegant handmade décor pieces",
  },
  {
    icon: "💝",
    title: "Custom Gifts",
    desc: "Made specially for your loved ones",
  },
];

export default function CraftFlow() {
  return (
    <section className="bg-[#F8F6F1] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-20">
          <span className="inline-flex items-center rounded-full bg-[#556B2F]/10 px-4 py-2 text-sm font-medium text-[#556B2F]">
            Handmade Process
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-[#233603]">
            Our Creative Journey
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Every Kalakari creation is carefully handcrafted with passion,
            creativity, and attention to detail.
          </p>
        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-2 md:-translate-x-1/2 rounded-full bg-[#556B2F]/10 overflow-hidden">

            <div className="gradient-line absolute inset-0" />

            <div className="shine-line absolute inset-0" />

          </div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex items-center mb-16 md:mb-24 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

                <div className="relative">

                  <div className="absolute inset-0 rounded-full bg-[#556B2F] animate-ping opacity-30" />

                  <div className="relative h-6 w-6 rounded-full bg-[#556B2F] shadow-[0_0_20px_#556B2F]" />

                </div>

              </div>

              {/* Card */}
              <div
                className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                  index % 2 === 0
                    ? "md:mr-auto"
                    : "md:ml-auto"
                }`}
              >
                <div className="group ">

                  {/* Shimmer */}
                  <div className="shine-card absolute inset-0" />

                  <div className="relative z-10 flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#556B2F]/10 text-3xl animate-pulse">
                      {step.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#233603]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-gray-600">
                        {step.desc}
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}