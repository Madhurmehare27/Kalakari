"use client";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Resin Name Plate",
      price: "₹799",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=800&q=80",
    },
    {
      id: 2,
      name: "Customized Photo Frame",
      price: "₹999",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    },
    {
      id: 3,
      name: "Handmade Gift Box",
      price: "₹599",
      tag: "Trending",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
    {
      id: 4,
      name: "Decorative Candle Set",
      price: "₹499",
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
    },
    {
      id: 5,
      name: "Resin Wall Clock",
      price: "₹1499",
      tag: "Premium",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    },
    {
      id: 6,
      name: "Personalized Keychain",
      price: "₹299",
      tag: "Hot",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    },
  ];

  const whatsappNumber = "917820941097";

  const handleOrder = (productName) => {
    const message = encodeURIComponent(
      `Hello 👋

I am interested in *${productName}*.
Can you please share more details?`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
            Handmade Collection
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Best Creations
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted products designed with creativity,
            passion, and attention to detail.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] md:text-xs px-2 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-lg text-gray-900 line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-pink-600 font-bold text-sm md:text-xl">
                    {product.price}
                  </p>

                  <button
                    onClick={() => handleOrder(product.name)}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs md:text-sm px-3 py-2 rounded-lg transition"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}