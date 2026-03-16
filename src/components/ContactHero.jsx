import { Phone, MessageCircle } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import Contact_Hero from "../assets/images/Contact_Hero.webp";
export default function ContactHero() {
  const phone = import.meta.env.VITE_PHONE;

  return (
    <section
      className="relative pt-28 pb-20 min-h-[560px] flex items-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Contact_Hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Plan Your <span className="text-sky-400">Next Journey</span>
          </h1>

          <p className="mt-5 text-gray-200 max-w-lg mx-auto md:mx-0">
            Contact our travel experts for comfortable car journeys with
            professional drivers across North India.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href={`tel:+${phone}`}
              className="flex items-center gap-2 bg-sky-600 px-6 py-3 rounded-full font-medium hover:bg-sky-700 transition"
            >
              <Phone size={18} />
              Call Us
            </a>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-full font-medium hover:bg-green-600 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-lg mx-auto md:mx-0">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
