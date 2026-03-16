import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  const phone = import.meta.env.VITE_PHONE;
  const email = import.meta.env.VITE_MAIL;
  const location = import.meta.env.VITE_LOCATION;

  const secondPhone = "919650101453";

  return (
    <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Get In <span className="text-sky-600">Touch</span>
        </h2>

        <p className="text-slate-600 mt-3 text-sm sm:text-base">
          Have questions about routes, vehicles, or travel plans? Contact our
          team and we’ll help you plan your journey.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {/* Call */}
        <div className="bg-white p-5 sm:p-6 rounded-xl border hover:border-sky-500 hover:shadow-lg transition group text-center">
          <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto flex items-center justify-center rounded-full bg-sky-100 group-hover:bg-sky-600 transition">
            <Phone className="text-sky-600 group-hover:text-white" size={20} />
          </div>

          <h4 className="font-semibold text-slate-800 mt-3 sm:mt-4 text-sm sm:text-base">
            Call Us
          </h4>

          {/* Phone Numbers */}
          <div className="flex flex-col gap-1 mt-2">
            <a
              href={`tel:${phone}`}
              className="text-slate-500 text-xs sm:text-sm hover:text-sky-600"
            >
              +{phone}
            </a>

            <a
              href={`tel:${secondPhone}`}
              className="text-slate-500 text-xs sm:text-sm hover:text-sky-600"
            >
              +919650101453
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phone}?text=Hello%20I%20found%20you%20on%20your%20website%20and%20want%20to%20enquire%20about%20travel%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-5 sm:p-6 rounded-xl border hover:border-green-500 hover:shadow-lg transition group text-center"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-500 transition">
            <MessageCircle
              className="text-green-600 group-hover:text-white"
              size={20}
            />
          </div>

          <h4 className="font-semibold text-slate-800 mt-3 sm:mt-4 text-sm sm:text-base">
            WhatsApp
          </h4>

          <p className="text-slate-500 text-xs sm:text-sm mt-1">Chat with us</p>
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="bg-white p-5 sm:p-6 rounded-xl border hover:border-sky-500 hover:shadow-lg transition group text-center"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto flex items-center justify-center rounded-full bg-sky-100 group-hover:bg-sky-600 transition">
            <Mail className="text-sky-600 group-hover:text-white" size={20} />
          </div>

          <h4 className="font-semibold text-slate-800 mt-3 sm:mt-4 text-sm sm:text-base">
            Email
          </h4>

          <p className="text-slate-500 text-xs sm:text-sm mt-1 break-all">
            {email}
          </p>
        </a>

        {/* Location */}
        <div className="bg-white p-5 sm:p-6 rounded-xl border hover:border-sky-500 hover:shadow-lg transition text-center">
          <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto flex items-center justify-center rounded-full bg-sky-100">
            <MapPin className="text-sky-600" size={20} />
          </div>

          <h4 className="font-semibold text-slate-800 mt-3 sm:mt-4 text-sm sm:text-base">
            Location
          </h4>

          <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
            {location}
          </p>
        </div>
      </div>
    </section>
  );
}
