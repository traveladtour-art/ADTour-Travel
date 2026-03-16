import { Users, Route, Headphones, ShieldCheck, Award } from "lucide-react";

export default function TrustStats() {
  const stats = [
    {
      icon: <Award className="text-sky-600 w-7 h-7 sm:w-8 sm:h-8" />,
      number: "20+",
      label: "Years of Experience",
    },
    {
      icon: <Users className="text-sky-600 w-7 h-7 sm:w-8 sm:h-8" />,
      number: "5000+",
      label: "Happy Customers",
    },
    {
      icon: <Route className="text-sky-600 w-7 h-7 sm:w-8 sm:h-8" />,
      number: "50+",
      label: "Popular Routes",
    },
    {
      icon: <Headphones className="text-sky-600 w-7 h-7 sm:w-8 sm:h-8" />,
      number: "24/7",
      label: "Customer Support",
    },
    {
      icon: <ShieldCheck className="text-sky-600 w-7 h-7 sm:w-8 sm:h-8" />,
      number: "100%",
      label: "Safe Travel",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm">
            Our Achievements
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Trusted by Thousands of Travelers
          </h2>

          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed">
            With over two decades of experience in intercity taxi services, we
            have built a strong reputation for reliability, comfort, and
            customer satisfaction across North India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="flex justify-center mb-2 sm:mb-3">
                {stat.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold">{stat.number}</h3>

              <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
