import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      city: "Delhi",
      text: "Very comfortable journey and professional driver. Highly recommended.",
    },
    {
      name: "Neha Gupta",
      city: "Noida",
      text: "Clean vehicle and smooth travel experience. Will book again.",
    },
    {
      name: "Amit Verma",
      city: "Ghaziabad",
      text: "Affordable pricing and great service for our Manali trip.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        <p className="text-sky-600 font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
          Testimonials
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          What Our <span className="text-sky-600">Customers Say</span>
        </h2>

        <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Travelers trust our taxi services for safe, comfortable, and reliable
          journeys across North India.
        </p>
      </div>

      {/* Reviews */}
      <div className="flex md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-[80%] min-w-[80%] sm:w-[65%] sm:min-w-[65%] md:w-auto md:min-w-0 flex-shrink-0 snap-start bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            {/* Stars */}
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400" />
              ))}
            </div>

            {/* Review */}
            <p className="text-slate-600 text-sm leading-relaxed">
              “{review.text}”
            </p>

            {/* User */}
            <div className="mt-5">
              <p className="font-semibold text-slate-800">{review.name}</p>

              <p className="text-sm text-slate-500">{review.city}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-sm text-gray-500 mt-6 md:hidden">
        ← Swipe to see more reviews →
      </p>
    </section>
  );
}
