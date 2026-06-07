"use client";

export default function WhatsAppCTA() {
  return (
    <section className="py-20 bg-pink-600">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold text-white">
          Ready To Create Something Special?
        </h2>

        <p className="text-pink-100 mt-4 text-lg">
          Contact us today and get your handmade creation.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://chat.whatsapp.com/HbT9krCD5qgFcbiDM6iP5W",
              "_blank"
            )
          }
          className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold"
        >
          Order On WhatsApp
        </button>
      </div>
    </section>
  );
}