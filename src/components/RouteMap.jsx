import { MapPin } from "lucide-react";

export default function RouteMap({ route }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sky-600 font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
          Route Map
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          {route.from} to <span className="text-sky-600">{route.to}</span>{" "}
          Travel Route
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Explore the major stops and scenic locations you will pass during your
          road journey from {route.from} to {route.to}. Our experienced drivers
          ensure a smooth and comfortable ride throughout the trip.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT : Route Timeline */}
        <div className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-slate-800 mb-6">
            Major Stops on the Route
          </h3>

          <div className="space-y-6">
            {route.highlights.map((stop, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon + Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <MapPin className="text-sky-600" size={20} />

                  {index !== route.highlights.length - 1 && (
                    <span className="w-[2px] h-10 bg-sky-200 mt-1"></span>
                  )}
                </div>

                {/* Stop */}
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  {stop}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT : Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border">
          <iframe
            src={`https://www.google.com/maps?q=${route.from}+to+${route.to}&output=embed`}
            loading="lazy"
            className="w-full h-[320px] sm:h-[380px] lg:h-[420px]"
            title={`${route.from} to ${route.to} route map`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
