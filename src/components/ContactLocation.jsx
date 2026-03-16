import { MapPin } from "lucide-react";

export default function ContactLocation() {
  const location = import.meta.env.VITE_LOCATION;
  const siteName = import.meta.env.VITE_SITE_NAME;

  const mapQuery = encodeURIComponent(location);

  return (
    <section className="bg-slate-50 py-12 sm:py-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sky-600 font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
            Our Office
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Visit <span className="text-sky-600">{siteName}</span>
          </h2>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            We're based in Delhi and help travelers plan comfortable journeys
            across North India with professional drivers and reliable vehicles.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* Address Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition text-center md:text-left flex flex-col justify-center">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-sky-100 text-sky-600 p-3 rounded-full">
                <MapPin size={22} />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">
              Office Address
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {location}
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center md:justify-start mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sky-700 transition"
            >
              View on Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <iframe
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-[320px] sm:h-[380px] md:h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
