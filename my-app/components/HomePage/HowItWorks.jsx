"use client";

export default function HowItWorks() {
  const steps = [
    "Browse Our Collection",
    "Contact Us On WhatsApp",
    "Receive Your Order",
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>

              <h3 className="font-semibold text-lg">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}