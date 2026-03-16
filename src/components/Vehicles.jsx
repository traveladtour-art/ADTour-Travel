import { useNavigate } from "react-router-dom";
import { vehicles } from "../data/car";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Vehicles() {
  const navigate = useNavigate();
  const phone = import.meta.env.VITE_PHONE;

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-12">
        <p className="text-sky-600 font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
          Our Fleet
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Our <span className="text-sky-600">Rental Vehicles</span>
        </h2>

        <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Comfortable, clean, and well-maintained vehicles available for
          outstation travel, tours, and airport transfers across North India.
        </p>
      </div>

      {/* Cards */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar">
        {vehicles.slice(0, 3).map((vehicle) => {
          const whatsappMessage = encodeURIComponent(
            `Hello, I want to book the ${vehicle.name}. Please share trip details.`,
          );

          return (
            <div
              key={vehicle.id}
              className="w-[80%] min-w-[80%] sm:w-[65%] sm:min-w-[65%] md:w-auto md:min-w-0 flex-shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                <LazyLoadImage
                  src={vehicle.image}
                  alt={vehicle.name}
                  effect="blur"
                  className="max-h-40 w-auto object-contain"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-slate-800">
                  {vehicle.name}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {vehicle.specs.seats} Seats • {vehicle.category} •{" "}
                  {vehicle.specs.ac ? "AC" : "Non AC"}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  {vehicle.specs.passengers} Passengers •{" "}
                  {vehicle.specs.luggage} Bags
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                  <a
                    href={`tel:+${phone}`}
                    className="flex items-center gap-1 bg-sky-600 text-white px-3 py-2 rounded-full text-sm hover:bg-sky-700 transition"
                  >
                    <Phone size={16} />
                    Call
                  </a>

                  <a
                    href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 border border-slate-300 px-3 py-2 rounded-full text-sm hover:bg-slate-100 transition"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/rent-car")}
          className="flex items-center gap-2 bg-sky-600 text-white px-7 py-3 rounded-full font-medium hover:bg-sky-700 transition"
        >
          View All Rental Vehicles
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
