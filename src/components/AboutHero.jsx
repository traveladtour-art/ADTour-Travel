import { Link } from "react-router-dom";
import About_Hero from "../assets/images/AboutHero.webp";

export default function AboutHero() {
  return (
    <section
      className="relative h-[300px] sm:h-[340px] md:h-[450px] flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${About_Hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 max-w-3xl">
        {/* Breadcrumb */}
        <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>{" "}
          / <span className="text-sky-400">About</span>
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
          About Our Taxi Service
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          Your trusted partner for safe, comfortable, and reliable intercity
          taxi services across North India.
        </p>
      </div>
    </section>
  );
}
