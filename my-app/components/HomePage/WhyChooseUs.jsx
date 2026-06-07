"use client";

const features = [
  {
    title: "100% Handmade",
    desc: "Every product is crafted with care.",
  },
  {
    title: "Custom Designs",
    desc: "Personalized according to your needs.",
  },
  {
    title: "Premium Quality",
    desc: "Made using high-quality materials.",
  },
  {
    title: "Fast Delivery",
    desc: "Delivered safely across India.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}