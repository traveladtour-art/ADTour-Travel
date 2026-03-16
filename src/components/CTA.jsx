import { Phone, MessageCircle } from "lucide-react";

export default function MoreRoutes() {
  const phone = import.meta.env.VITE_PHONE;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-10 text-center shadow-sm">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Planning a Trip to{" "}
          <span className="text-sky-600">Another Destination</span>?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          We provide comfortable cars with professional drivers for trips across
          North India. If your destination is not listed on our website, contact
          us for a custom travel plan and quote.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href={`tel:+${phone}`}
            className="flex items-center justify-center gap-2 bg-white border px-5 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(
              "Hello, I want to plan a trip with a car and driver. Please share details.",
            )}`}
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-green-600 transition"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
