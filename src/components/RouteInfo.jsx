import { MapPin, Clock, Calendar } from "lucide-react";

export default function RouteInfo({ route }) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sky-600 font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
          Route Details
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          {route.from} to <span className="text-sky-600">{route.to}</span>{" "}
          Travel Route
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Traveling from {route.from} to {route.to} by road offers a comfortable
          and scenic journey. Our well-maintained cars with experienced drivers
          ensure a smooth ride for families, tourists, and business travelers
          heading to {route.to}.
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="flex items-center gap-4 p-5 rounded-xl border border-sky-100 bg-sky-50 hover:bg-sky-100 transition">
          <MapPin className="text-sky-600 flex-shrink-0" size={22} />

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Distance
            </p>
            <p className="font-semibold text-slate-800">{route.distance}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 rounded-xl border border-sky-100 bg-sky-50 hover:bg-sky-100 transition">
          <Clock className="text-sky-600 flex-shrink-0" size={22} />

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Travel Time
            </p>
            <p className="font-semibold text-slate-800">{route.travelTime}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 rounded-xl border border-sky-100 bg-sky-50 hover:bg-sky-100 transition">
          <Calendar className="text-sky-600 flex-shrink-0" size={22} />

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Best Time to Visit
            </p>
            <p className="font-semibold text-slate-800">{route.bestTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
