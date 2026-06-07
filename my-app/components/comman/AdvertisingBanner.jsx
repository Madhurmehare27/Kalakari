export default function AdvertisingBanner() {
  const ads = [
    "🎁 Custom Handmade Gifts",
    "✨ Premium Resin Art Collection",
    "🔥 Special Festival Discounts",
  ];

  return (
    <section
      className="w-full py-4 overflow-hidden border-y border-white/10"
      style={{ backgroundColor: "#233603" }}
    >
      <div className="py-2 md:py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...ads, ...ads].map((ad, index) => (
  <span
  key={index}
  style={{ fontStyle: "italic" }}
  className="mx-6 md:mx-10 text-xs sm:text-sm md:text-base font-medium tracking-wide text-white"
>
  {ad}
</span>
          ))}
        </div>
      </div>
    </section>
  );
}