// Key Idea:
// Professional responsive slider using Lucide icons for arrows.

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/images/customers/image1.webp";
import img2 from "../assets/images/customers/image2.webp";
import img3 from "../assets/images/customers/image3.webp";
import img4 from "../assets/images/customers/image4.webp";

export default function CustomerSlider() {
  const images = [img1, img2, img3, img4];

  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <section className="py-18 bg-gray-50">
      {/* title */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
        <span className="text-sky-600 font-semibold uppercase tracking-wider text-xs sm:text-sm">
          Our Customers
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
          Happy <span className="text-sky-600">Travel Memories</span>
        </h2>

        <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded"></div>

        <p className="text-slate-600 mt-5 text-sm sm:text-base leading-relaxed">
          Moments captured with travelers who trusted AD Travels for their
          journeys across Agra, Delhi, Jaipur, and North India.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto px-4">
        {/* slider */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full flex-shrink-0 relative group">
                <img
                  src={img}
                  alt="Customer"
                  className="w-full h-[260px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm md:text-lg font-semibold">
                    Happy Travel Moments
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* left arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-3 md:left-5 
          bg-white/70 hover:bg-white
          p-2 md:p-3 rounded-full shadow-lg
          transition hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        {/* right arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-3 md:right-5 
          bg-white/70 hover:bg-white
          p-2 md:p-3 rounded-full shadow-lg
          transition hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
