"use client";

export default function FullScreenVideo() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/craft-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Handmade With Love
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
            Discover unique handcrafted gifts, resin art, and personalized
            creations made specially for you.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/HbT9krCD5qgFcbiDM6iP5W",
                "_blank"
              )
            }
            className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full font-semibold transition"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}