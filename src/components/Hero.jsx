import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/home_hero_banner1.webp";
import { Star, Car, Map } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex items-center justify-center text-center text-white min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen pt-28 sm:pt-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="AD Tour and Travel Taxi Service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="font-berkshire drop-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
          Experience the Beauty of India with{" "}
          <span className="text-sky-400 font-bold">AD Tour & Travel</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
          Travel comfortably with our premium vehicles available for rent across
          India for your tours and journeys.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8 max-w-md mx-auto">
          <button
            onClick={() => navigate("/rent-car")}
            className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 px-7 py-3 rounded-full font-semibold transition"
          >
            View Rental Cars
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto bg-white text-slate-800 hover:bg-gray-200 px-7 py-3 rounded-full font-semibold transition"
          >
            Enquiry Now
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mt-8 sm:mt-10 text-sm sm:text-base text-gray-200">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <p>500+ Happy Customers</p>
          </div>

          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-sky-400" />
            <p>25+ Comfortable Vehicles</p>
          </div>

          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-green-400" />
            <p>40+ Popular Routes Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
