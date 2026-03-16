import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function RouteHero({ route }) {
  const phone = import.meta.env.VITE_PHONE;

  return (
    <section
      className="relative min-h-[420px] md:min-h-[520px] flex items-center bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${route.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/70"></div>{" "}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full text-white">
        {/* Breadcrumb */}
        <p className="text-xs sm:text-sm text-gray-300 mb-3">
          Home / Routes /{" "}
          <span className="text-white">
            {route.from} → {route.to}
          </span>
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
          {route.title}
        </h1>

        {/* Description */}
        <p className="text-gray-200 max-w-2xl mb-6 text-sm sm:text-base">
          Comfortable cars with professional drivers for your trip from{" "}
          {route.from} to {route.to}. Enjoy a safe and relaxing journey with
          well-maintained vehicles and experienced drivers.
        </p>

        {/* Info Cards */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-white/20">
            <MapPin size={18} />
            <div>
              <p className="text-[11px] sm:text-xs text-gray-300">Distance</p>
              <p className="font-semibold text-sm">{route.distance}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-white/20">
            <Clock size={18} />
            <div>
              <p className="text-[11px] sm:text-xs text-gray-300">
                Travel Time
              </p>
              <p className="font-semibold text-sm">{route.travelTime}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href={`tel:+${phone}`}
            className="flex justify-center items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(
              `Hello, I want to plan a trip from ${route.from} to ${route.to}. Please share car options and details.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-green-500 px-5 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
