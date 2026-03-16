import { Award, Users, MapPin } from "lucide-react";

export default function OurStory() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-sky-600 font-semibold uppercase tracking-wide text-sm">
          Our Journey
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-slate-900">
          20+ Years of Trusted Taxi Service
        </h2>

        <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded"></div>

        <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
          With more than two decades of experience in the travel and taxi
          industry, we have proudly served thousands of travelers across North
          India. Our mission has always been simple — provide reliable,
          comfortable, and affordable taxi services for every journey.
        </p>
      </div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
        <p>
          Our journey began with a commitment to deliver safe and dependable
          transportation services. Over the years, we have expanded our network
          and built strong relationships with travelers who trust us for their
          trips across cities, hill stations, and pilgrimage destinations.
        </p>

        <p>
          Today, our professional drivers, well-maintained fleet, and customer
          first approach continue to make us a trusted travel partner for
          thousands of customers every year.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-3 gap-6 text-center mt-12 max-w-3xl mx-auto">
        <div>
          <Award className="mx-auto text-sky-600 w-7 h-7 mb-2" />
          <p className="text-sm font-medium text-slate-700">20+ Years</p>
          <p className="text-xs text-slate-500">Experience</p>
        </div>

        <div>
          <Users className="mx-auto text-sky-600 w-7 h-7 mb-2" />
          <p className="text-sm font-medium text-slate-700">5000+</p>
          <p className="text-xs text-slate-500">Happy Travelers</p>
        </div>

        <div>
          <MapPin className="mx-auto text-sky-600 w-7 h-7 mb-2" />
          <p className="text-sm font-medium text-slate-700">North India</p>
          <p className="text-xs text-slate-500">Coverage</p>
        </div>
      </div>
    </section>
  );
}
