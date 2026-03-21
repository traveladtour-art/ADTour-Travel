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
        {/* Title (High CTR + SEO) */}

        <title>
          {siteName} | Delhi Car Rental with Driver | Taxi Service in Delhi
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Book Delhi car rental with driver at best prices. AD Tour Travel offers taxi service, outstation cabs to Manali, Shimla, Agra, Jaipur and across North India with experienced drivers."
        />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`Delhi Car Rental with Driver | ${siteName}`}
        />
        <meta
          property="og:description"
          content="Affordable taxi service and car rental with driver from Delhi to Manali, Shimla, Agra, Jaipur and North India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/logo.png`} />

        {/* Twitter (extra boost 🔥) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Delhi Car Rental with Driver | ${siteName}`}
        />
        <meta
          name="twitter:description"
          content="Reliable taxi service and car rental with driver across North India."
        />
        <meta name="twitter:image" content={`${siteUrl}/logo.png`} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: siteName,
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            telephone: phone,
            areaServed: "North India",
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
