export default function TravelInfo() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Label */}
        <p className="text-sky-600 font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
          Travel Information
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          India <span className="text-sky-600">Tour Car Rental</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-slate-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
          AD Tour Travel provides reliable taxi and car rental services for
          comfortable road journeys across North India. Whether you are planning
          a trip to the deserts of Rajasthan, the beautiful hills of Himachal
          Pradesh, the spiritual cities of Uttar Pradesh, or the scenic
          destinations of Uttarakhand, we offer well-maintained vehicles with
          experienced drivers for a smooth and safe travel experience.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
          Our fleet includes popular vehicles like Dzire, Ertiga, Innova Crysta,
          and Tempo Traveller — ideal for family trips, group tours, and
          long-distance travel.
        </p>

        {/* Destinations */}
        <div className="mt-6 text-sm sm:text-base text-slate-600">
          <p className="font-medium text-slate-800 mb-2">
            Popular destinations we serve:
          </p>

          <p className="leading-relaxed">
            Jaipur • Udaipur • Jodhpur • Manali • Shimla • Haridwar • Rishikesh
            • Mussoorie • Agra • Varanasi
          </p>
        </div>
      </div>
    </section>
  );
}
