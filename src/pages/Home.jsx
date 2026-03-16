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
        <title>Delhi Taxi Service | {siteName}</title>

        <meta
          name="description"
          content="Book reliable taxi service from Delhi to Manali, Shimla, Agra, Jaipur and more. Professional drivers and comfortable cars for safe travel."
        />

        <meta
          name="keywords"
          content="Delhi taxi service, Delhi cab booking, Delhi to Manali taxi, Delhi to Shimla taxi, outstation taxi Delhi"
        />

        <link rel="canonical" href={siteUrl} />

        {/* Social sharing */}
        <meta
          property="og:title"
          content={`Delhi Taxi Service | ${siteName}`}
        />
        <meta
          property="og:description"
          content="Reliable taxi service from Delhi to Manali, Shimla, Agra and more."
        />
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
