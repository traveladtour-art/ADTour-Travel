import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RouteFAQ({ route }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sky-600 font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
          FAQ
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Frequently Asked <span className="text-sky-600">Questions</span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Everything you need to know about the {route.from} to {route.to} trip,
          including travel time, booking process, and available cars with
          professional drivers.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {route.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden
              ${
                isOpen
                  ? "border-sky-200 shadow-md"
                  : "border-gray-200 hover:border-sky-200 hover:shadow-sm"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-slate-800"
              >
                <span className="text-sm sm:text-base">{item.q}</span>

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 text-sky-600 flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
