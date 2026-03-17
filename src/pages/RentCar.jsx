import { vehicles } from "../data/car";
import CarCard from "../components/CarCard";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

export default function RentCar() {
  return (
    <div className="pt-18">
      {/* SEO */}
      <Helmet>
        <title>Travel Cars | Car Rental with Driver | AD Tour & Travel</title>

        <meta
          name="description"
          content="Explore our fleet of comfortable travel cars including sedan, SUV and tempo traveller. Reliable car rental with driver for tours and outstation trips across North India."
        />

        <link
          rel="canonical"
          href={`${import.meta.env.VITE_WEBSITE}/rent-car`}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Travel Cars | Car Rental with Driver | AD Tour & Travel"
        />

        <meta
          property="og:description"
          content="Choose from our range of sedan, SUV and tempo traveller vehicles with professional drivers for comfortable tours and outstation journeys."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${import.meta.env.VITE_WEBSITE}/rent-car`}
        />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 to-white pt-28 pb-10 text-center">
        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Choose Your Perfect Vehicle
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-sky-600 mx-auto mt-4 rounded"></div>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Select from our range of comfortable cars with professional drivers,
            perfect for outstation trips, tours, and long-distance travel.
          </p>
        </div>
      </section>

      {/* Car Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {vehicles.map((vehicle) => (
            <CarCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <CTA />
    </div>
  );
}
