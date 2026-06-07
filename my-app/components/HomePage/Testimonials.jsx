"use client";

const reviews = [
  {
    name: "Priya",
    review:
      "Amazing craftsmanship and beautiful packaging.",
  },
  {
    name: "Rahul",
    review:
      "The custom gift was exactly what I wanted.",
  },
  {
    name: "Sneha",
    review:
      "Excellent quality and timely delivery.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <p className="text-yellow-500 mb-4">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-600 mb-4">
                {review.review}
              </p>

              <h4 className="font-semibold">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}