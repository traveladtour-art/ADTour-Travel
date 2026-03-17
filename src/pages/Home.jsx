import CTA from "../components/CTA";
import CustomerSlider from "../components/CustomerSlider";
import Hero from "../components/Hero";
import PopularRoutes from "../components/PopularRoutes";
import Testimonials from "../components/Testimonials";
import TravelInfo from "../components/TravelInfo";
import Vehicles from "../components/Vehicles";
import WhyChooseUs from "../components/WhyChooseUs";
import { Helmet } from "react-helmet-async";

const siteUrl = import.meta.env.VITE_WEBSITE;
const siteName = import.meta.env.VITE_SITE_NAME;

export default function Home({
  setRoutesOpen,
  setMobileRoutesOpen,
  setMenuOpen,
}) {
  return (
    <div className="w-full">
      <Helmet>
        <title>
          Delhi Car Rental with Driver | Tour & Travel Service | {siteName}
        </title>

        <meta
          name="description"
          content="Book reliable car rental with driver and tour & travel services from Delhi to Manali, Shimla, Agra, Jaipur and across North India. Comfortable cars and professional drivers for safe journeys."
        />

        <meta
          name="keywords"
          content="Delhi car rental with driver, Delhi tour and travel service, Delhi to Manali car with driver, Delhi to Shimla car service, outstation car rental Delhi"
        />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content={`Delhi Car Rental with Driver | ${siteName}`}
        />

        <meta
          property="og:description"
          content="Reliable car rental with driver and tour & travel services from Delhi to Manali, Shimla, Agra, Jaipur and across North India."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
      </Helmet>
      <Hero />
      <Vehicles />

      <PopularRoutes
        setRoutesOpen={setRoutesOpen}
        setMobileRoutesOpen={setMobileRoutesOpen}
        setMenuOpen={setMenuOpen}
      />

      <WhyChooseUs />
      <Testimonials />
      <CustomerSlider />
      <CTA />
      <TravelInfo />
    </div>
  );
}
