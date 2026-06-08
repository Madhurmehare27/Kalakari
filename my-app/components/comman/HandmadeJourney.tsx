export default function HandmadeJourney() {
  const steps = [
    {
      icon: "🎨",
      title: "Choose Design",
      description: "Browse unique handcrafted creations for every occasion.",
    },
    {
      icon: "✂️",
      title: "Handcrafted",
      description: "Each product is carefully handmade with attention to detail.",
    },
    {
      icon: "✨",
      title: "Quality Check",
      description: "Every craft is inspected to ensure premium quality.",
    },
    {
      icon: "🎁",
      title: "Delivered With Love",
      description: "Beautifully packed and delivered to your doorstep.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[#233603]/10 px-4 py-2 text-sm font-medium text-[#233603]">
            Our Process
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Handmade Journey
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Every Kalakari creation is crafted with creativity, care, and love.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden md:block absolute top-14 left-0 w-full h-1 bg-[#556B2F]/20"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mx-auto w-28 h-28 rounded-full bg-[#F8F6F1] shadow-lg flex items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#233603]">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}