
export default function AdvertisingBanner() {

    const ads = [
  "🎁 Custom Handmade Gifts",
  "✨ Premium Resin Art Collection",
  "🚚 Pan India Delivery Available",
  "💖 Personalized Gifts for Every Occasion",
  "🎨 100% Handmade Creations",
  "🔥 Special Festival Discounts",
];
  return (
    <div className="w-full bg-pink-600 text-white overflow-hidden ">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...ads, ...ads].map((ad, index) => (
          <span
            key={index}
            className="mx-10 text-sm md:text-base font-medium"
          >
            {ad}
          </span>
        ))}
      </div>
    </div>
  );
}