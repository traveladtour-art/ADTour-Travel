import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="text-xl font-bold text-white">
            AD <span className="text-sky-500">Tour Travel</span>
          </h3>

          <p className="text-sm mt-4 text-slate-400 leading-relaxed">
            Reliable vehicle rental service for comfortable journeys across
            North India including Rajasthan, Himachal, Delhi, Uttar Pradesh and
            Uttarakhand.
          </p>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="text-white font-semibold mb-4">Service Areas</h4>

          <ul className="space-y-2 text-sm text-slate-400">
            <li>Delhi NCR</li>
            <li>Uttar Pradesh</li>
            <li>Uttarakhand</li>
            <li>Himachal Pradesh</li>
            <li>Haryana</li>
            <li>Rajasthan</li>
            <li>Madhya Pradesh</li>
            <li>Punjab</li>
            <li>Jammu & Kashmir</li>
          </ul>

          <p className="text-xs text-slate-500 mt-3">
            Taxi service with driver available for outstation and tour travel.
          </p>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Popular Destinations
          </h4>

          <ul className="space-y-2 text-sm text-slate-400">
            <li>Rajasthan Trips</li>
            <li>Himachal Trips</li>
            <li>Uttarakhand Trips</li>
            <li>Uttar Pradesh Trips</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>

          <div className="space-y-4 text-sm">
            <a
              href="tel:+919811950675"
              className="flex items-start gap-2 hover:text-white transition"
            >
              <Phone className="w-4 h-4 text-sky-500 mt-[2px]" />
              +91 98119 50675
            </a>

            <a
              href="mailto:traveladtour@gmail.com"
              className="flex items-start gap-2 hover:text-white transition"
            >
              <Mail className="w-4 h-4 text-sky-500 mt-[2px]" />
              traveladtour@gmail.com
            </a>

            <p className="flex items-start gap-2 text-slate-400 leading-relaxed">
              <MapPin className="w-5 h-5 text-sky-500 mt-[2px]" />
              5830, Gali No. 8, Block No. 4, Dev Nagar, Karol Bagh, New Delhi –
              110005
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-xs sm:text-sm text-slate-500 px-4">
        © {new Date().getFullYear()} AD Tour & Travel. All rights reserved.
      </div>
    </footer>
  );
}
