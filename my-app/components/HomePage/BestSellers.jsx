"use client";

const products = [
  {
    name: "Resin Clock",
    price: "₹1499",
    image: "/products/clock.jpg",
  },
  {
    name: "Custom Frame",
    price: "₹999",
    image: "/products/frame.jpg",
  },
  {
    name: "Gift Box",
    price: "₹699",
    image: "/products/gift.jpg",
  },
  {
    name: "Keychain",
    price: "₹299",
    image: "/products/keychain.jpg",
  },
];

export default function BestSellers() {
  return (
    <section className="py-20 bg-pink-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Best Sellers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>

                <p className="text-pink-600 font-bold mt-2">
                  {product.price}
                </p>

                <button className="w-full mt-4 bg-pink-600 text-white py-3 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}