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
        <title>
          {route.from} to {route.to} Taxi Service |{" "}
          {import.meta.env.VITE_SITE_NAME}
        </title>

        <meta
          name="description"
          content={`Book reliable taxi service from ${route.from} to ${route.to}. Comfortable cars, experienced drivers, and safe outstation travel.`}
        />

        <link
          rel="canonical"
          href={`${import.meta.env.VITE_WEBSITE}/routes/${slug}`}
        />

        <meta
          property="og:title"
          content={`${route.from} to ${route.to} Taxi Service`}
        />

        <meta
          property="og:description"
          content={`Comfortable taxi from ${route.from} to ${route.to} with professional drivers.`}
        />
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
