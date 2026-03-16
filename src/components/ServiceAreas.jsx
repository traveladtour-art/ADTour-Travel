import { MapPin } from "lucide-react";
import { serviceAreas } from "../data/serviceAreas";

export default function ServiceAreas() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 font-semibold tracking-wide uppercase text-sm">
            Coverage
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our Service Areas
          </h2>

          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed">
            Explore the destinations we cover across North India with safe,
            comfortable, and reliable taxi services designed for every journey.
          </p>
        </div>

        {/* Cards */}
        <div className="flex md:grid md:grid-cols-3 sm:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar px-2">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="relative h-64 w-[85%] md:w-auto min-w-[85%] md:min-w-0 rounded-2xl overflow-hidden group flex-shrink-0 snap-start"
            >
              {/* Background Image */}
              <img
                src={area.image}
                alt={area.state}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} />
                  <h3 className="text-lg font-semibold">{area.state}</h3>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {area.cities.map((city, i) => (
                    <span
                      key={i}
                      className="bg-white/20 backdrop-blur px-3 py-1 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
