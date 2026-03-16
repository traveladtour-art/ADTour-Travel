import {
  ShieldCheck,
  Car,
  Clock,
  BadgeIndianRupee,
  MapPin,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
        <span className="text-sky-600 font-semibold uppercase tracking-wider text-xs sm:text-sm">
          Our Advantage
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
          Why <span className="text-sky-600">Choose Us</span>
        </h2>

        <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded"></div>

        <p className="text-slate-600 mt-5 text-sm sm:text-base leading-relaxed">
          Reliable vehicle rental services designed to deliver comfortable,
          safe, and hassle-free travel experiences across North India.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
        {/* Drivers */}
        <div className="text-center p-5 sm:p-6 rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition duration-300">
          <ShieldCheck className="mx-auto text-sky-600 w-8 h-8 sm:w-10 sm:h-10 mb-3" />
          <h3 className="font-semibold text-sm sm:text-lg">
            Experienced Drivers
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Professional drivers ensuring safe and comfortable journeys.
          </p>
        </div>

        {/* Vehicles */}
        <div className="text-center p-5 sm:p-6 rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition duration-300">
          <Car className="mx-auto text-sky-600 w-8 h-8 sm:w-10 sm:h-10 mb-3" />
          <h3 className="font-semibold text-sm sm:text-lg">Clean Vehicles</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Well-maintained and sanitized vehicles for every trip.
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center p-5 sm:p-6 rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition duration-300">
          <BadgeIndianRupee className="mx-auto text-sky-600 w-8 h-8 sm:w-10 sm:h-10 mb-3" />
          <h3 className="font-semibold text-sm sm:text-lg">
            Affordable Pricing
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Transparent and budget-friendly rental prices.
          </p>
        </div>

        {/* GPS */}
        <div className="text-center p-5 sm:p-6 rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition duration-300">
          <MapPin className="mx-auto text-sky-600 w-8 h-8 sm:w-10 sm:h-10 mb-3" />
          <h3 className="font-semibold text-sm sm:text-lg">
            Live GPS Tracking
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            We track our drivers through GPS for added safety and reliability.
          </p>
        </div>

        {/* Support */}
        <div className="text-center p-5 sm:p-6 rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition duration-300">
          <Clock className="mx-auto text-sky-600 w-8 h-8 sm:w-10 sm:h-10 mb-3" />
          <h3 className="font-semibold text-sm sm:text-lg">24/7 Support</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Always available to assist you during your journey.
          </p>
        </div>
      </div>
    </section>
  );
}
