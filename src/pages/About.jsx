import React from "react";
import { Helmet } from "react-helmet-async";

import AboutHero from "../components/AboutHero";
import ServiceAreas from "../components/ServiceAreas";
import OurStory from "../components/OurStory";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustStats from "../components/TrustStats";
import CTA from "../components/CTA";

const About = () => {
  const siteName = import.meta.env.VITE_SITE_NAME;
  const website = import.meta.env.VITE_WEBSITE;

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>About Us | {siteName}</title>

        {/* Description */}
        <meta
          name="description"
          content="Learn about AD Tour Travel with 20+ years of experience providing reliable car rental with driver, taxi service, and tour & travel services across Delhi, Himachal Pradesh, Uttarakhand, Punjab, Rajasthan and North India."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Delhi car rental with driver, AD Tour Travel, taxi service Delhi, Delhi tour and travel service, Delhi to Manali cab, Delhi to Shimla taxi"
        />

        {/* Open Graph */}
        <meta property="og:title" content={`About Us | ${siteName}`} />
        <meta
          property="og:description"
          content="20+ years trusted car rental with driver and taxi service across North India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${website}/about`} />
        <meta property="og:image" content={`${website}/logo.png`} />

        {/* Canonical */}
        <link rel="canonical" href={`${website}/about`} />
      </Helmet>

      <AboutHero />
      <OurStory />
      <TrustStats />
      <WhyChooseUs />
      <ServiceAreas />
      <CTA />
    </>
  );
};

export default About;
