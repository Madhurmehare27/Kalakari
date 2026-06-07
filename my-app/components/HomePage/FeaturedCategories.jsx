"use client";

const categories = [
  {
    title: "Resin Art",
    image: "/categories/resin.jpg",
  },
  {
    title: "Personalized Gifts",
    image: "/categories/gifts.jpg",
  },
  {
    title: "Photo Frames",
    image: "/categories/frame.jpg",
  },
  {
    title: "Home Decor",
    image: "/categories/decor.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Collections
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5 bg-white">
                <h3 className="font-semibold text-xl">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}