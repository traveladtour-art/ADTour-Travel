import { useParams } from "react-router-dom";
import { routesDetails } from "../data/routesDetails";
import { Helmet } from "react-helmet-async";

import RouteHero from "../components/RouteHero";
import RouteInfo from "../components/RouteInfo";
import RouteFAQ from "../components/RouteFAQ";
import WhyChooseUs from "../components/WhyChooseUs";
import RouteMap from "../components/RouteMap";
import CTA from "../components/CTA";
import EnquiryForm from "../components/EnquiryForm";

export default function RouteDetails() {
  const { slug } = useParams();

  const route = routesDetails[slug];
  const [from, to] = slug.split("-to-"); //sentence.split(" "); // Split by space → ["React", "is", "awesome"]

  if (!route) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-semibold">Route not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* SEO */}
      <Helmet>
        {/* Title (High Ranking Power) */}
        <title>
          {route.from} to {route.to} Taxi Service | Car Rental with Driver |{" "}
          {import.meta.env.VITE_SITE_NAME}
        </title>

        {/* Description */}
        <meta
          name="description"
          content={`Book ${route.from} to ${route.to} taxi service with driver. Safe, affordable car rental for outstation travel with sedan, SUV, and tempo traveller options.`}
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_WEBSITE}/routes/${slug}`}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${route.from} to ${route.to} Taxi Service | ${import.meta.env.VITE_SITE_NAME}`}
        />

        <meta
          property="og:description"
          content={`Affordable ${route.from} to ${route.to} car rental with driver for tours and outstation trips across North India.`}
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${import.meta.env.VITE_WEBSITE}/routes/${slug}`}
        />
        <meta
          property="og:image"
          content={`${import.meta.env.VITE_WEBSITE}/logo.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${route.from} to ${route.to} Taxi Service`}
        />
        <meta
          name="twitter:description"
          content={`Book reliable taxi from ${route.from} to ${route.to} with driver.`}
        />
        <meta
          name="twitter:image"
          content={`${import.meta.env.VITE_WEBSITE}/logo.png`}
        />

        {/* Structured Data (VERY POWERFUL 🔥) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${route.from} to ${route.to} Car Rental Service`,
            provider: {
              "@type": "TravelAgency",
              name: import.meta.env.VITE_SITE_NAME,
            },
            areaServed: "North India",
            description: `Car rental with driver from ${route.from} to ${route.to}`,
          })}
        </script>
      </Helmet>
      {/* HERO */}
      <RouteHero route={route} />
      {/* ROUTE INFO */}
      <RouteInfo route={route} />
      {/* MAP */}
      <RouteMap route={route} />
      <WhyChooseUs />
      {/*Enquiry form */}
      <EnquiryForm pickup={from} destination={to} /> {/* FAQ */}
      <RouteFAQ route={route} />
      <CTA />
    </div>
  );
}
