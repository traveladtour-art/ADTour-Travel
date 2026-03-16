import Fort from "../assets/images/Fort.jpg";
import GoldenTemple from "../assets/images/Golden_temple.avif";
import TajMahal from "../assets/images/Taj_mahal.avif";
import { ArrowRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PopularRoutes({
  setRoutesOpen,
  setMobileRoutesOpen,
  setMenuOpen,
}) {
  return (
    <section className="py-16 bg-slate-50">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-12">
        <p className="text-sky-600 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2">
          Popular Routes
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          Explore Our Most Loved{" "}
          <span className="text-sky-600">Travel Destinations</span>
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Discover some of our most popular travel routes across North India.
          From heritage cities to spiritual destinations, we provide comfortable
          taxi services for memorable journeys.
        </p>
      </div>

      {/* Destinations */}
      <div className="flex gap-5 md:h-[380px] w-full max-w-6xl mx-auto px-4 sm:px-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar pb-2">
        {/* Rajasthan */}
        <div className="relative group w-[78%] min-w-[78%] sm:w-[60%] sm:min-w-[60%] md:w-56 md:min-w-0 flex-shrink-0 md:flex-grow transition-all duration-500 h-[220px] sm:h-[240px] md:h-full md:hover:w-full rounded-xl overflow-hidden snap-start">
          <LazyLoadImage
            src={Fort}
            alt="Rajasthan trips"
            loading="lazy"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
            <h3 className="text-lg md:text-2xl font-semibold">
              Rajasthan Trips
            </h3>
            <p className="text-xs md:text-sm">
              Jaipur • Jodhpur • Udaipur • Jaisalmer
            </p>
          </div>
        </div>

        {/* Punjab */}
        <div className="relative group w-[78%] min-w-[78%] sm:w-[60%] sm:min-w-[60%] md:w-56 md:min-w-0 flex-shrink-0 md:flex-grow transition-all duration-500 h-[220px] sm:h-[240px] md:h-full md:hover:w-full rounded-xl overflow-hidden snap-start">
          <LazyLoadImage
            src={GoldenTemple}
            alt="Punjab trips"
            loading="lazy"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
            <h3 className="text-lg md:text-2xl font-semibold">Punjab Trips</h3>
            <p className="text-xs md:text-sm">
              Amritsar • Golden Temple • Wagah Border
            </p>
          </div>
        </div>

        {/* Uttar Pradesh */}
        <div className="relative group w-[78%] min-w-[78%] sm:w-[60%] sm:min-w-[60%] md:w-56 md:min-w-0 flex-shrink-0 md:flex-grow transition-all duration-500 h-[220px] sm:h-[240px] md:h-full md:hover:w-full rounded-xl overflow-hidden snap-start">
          <LazyLoadImage
            src={TajMahal}
            alt="Uttar Pradesh trips"
            loading="lazy"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
            <h3 className="text-lg md:text-2xl font-semibold">
              Uttar Pradesh Trips
            </h3>
            <p className="text-xs md:text-sm">Agra • Varanasi • Mathura</p>
          </div>
        </div>
      </div>

      {/* Swipe hint for mobile */}
      <p className="text-center text-sm text-gray-500 mt-5 md:hidden">
        ← Swipe to explore destinations →
      </p>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });

            if (window.innerWidth < 768) {
              setMenuOpen(true);
              setMobileRoutesOpen(true);
            } else {
              setRoutesOpen(true);
            }
          }}
          className="flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-medium hover:bg-sky-700 transition"
        >
          View All Routes
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
