import {
  Phone,
  MessageCircle,
  Users,
  Snowflake,
  Briefcase,
} from "lucide-react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function CarCard({ vehicle }) {
  const phone = import.meta.env.VITE_PHONE;

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to book the ${vehicle.name}. Please share trip details.`,
  );

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden border border-slate-100">
      {/* Image */}
      <div className="w-full h-36 sm:h-40 bg-slate-100 flex items-center justify-center">
        <LazyLoadImage
          src={vehicle.image}
          alt={vehicle.name}
          effect="blur"
          className="max-h-28 sm:max-h-32 object-contain"
        />
      </div>

      <div className="p-4 sm:p-5 text-center">
        {/* Vehicle Name */}
        <h3 className="text-base sm:text-lg font-semibold text-slate-800">
          {vehicle.name}
        </h3>

        {/* Category */}
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {vehicle.category}
        </p>

        {/* Specs */}
        <div className="flex justify-center gap-3 text-xs sm:text-sm text-slate-500 mt-3 flex-wrap">
          <span className="flex items-center gap-1">
            <Users size={14} />
            {vehicle.specs.passengers}
          </span>

          <span className="flex items-center gap-1">
            <Briefcase size={14} />
            {vehicle.specs.luggage}
          </span>

          <span className="flex items-center gap-1">
            <Snowflake size={14} />
            {vehicle.specs.ac ? "AC" : "Non AC"}
          </span>
        </div>

        {/* Seats */}
        <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
          {vehicle.specs.seats} Seats
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {/* Call */}
          <a
            href={`tel:+${phone}`}
            className="flex items-center gap-1 bg-sky-600 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm hover:bg-sky-700 transition"
          >
            <Phone size={14} />
            Call
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-full text-xs sm:text-sm hover:bg-green-100 transition"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
