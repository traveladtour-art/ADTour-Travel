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
const phone = import.meta.env.VITE_PHONE;

export default function Home({
  setRoutesOpen,
  setMobileRoutesOpen,
  setMenuOpen,
}) {
  return (
    <div className="w-full">
      <Helmet>
        {/* Page Title */}
        <title>
          Delhi Car Rental with Driver | Tour & Travel Service | {siteName}
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Book reliable car rental with driver and tour & travel services from Delhi to Manali, Shimla, Agra, Jaipur and across North India. Comfortable cars and professional drivers for safe journeys."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Delhi car rental with driver, Delhi tour and travel service, Delhi to Manali car with driver, Delhi to Shimla car service, outstation car rental Delhi"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
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
        <meta property="og:image" content={`${siteUrl}/logo.png`} />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: siteName,
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            telephone: phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressCountry: "India",
            },
          })}
        </script>
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
