import React from "react";
import { Helmet } from "react-helmet";

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
        <title>About Us | {siteName}</title>

        <meta
          name="description"
          content="Learn about AD Tour Travel with 20+ years of experience providing reliable car rental with driver and tour & travel services across Delhi, Himachal Pradesh, Uttarakhand, Punjab, Rajasthan and North India."
        />

        <meta
          name="keywords"
          content="Delhi car rental with driver, AD Tour  Travel, Delhi tour and travel service, Delhi to Manali car with driver, Delhi to Shimla car with driver"
        />

        {/* Open Graph */}
        <meta property="og:title" content={`About Us | ${siteName}`} />
        <meta
          property="og:description"
          content="20+ years trusted car rental with driver and tour & travel service across North India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${website}/about`} />

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
