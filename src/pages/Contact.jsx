import React from "react";
import { Helmet } from "react-helmet-async";

import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactLocation from "../components/ContactLocation";
import WhyChooseUs from "../components/WhyChooseUs";

const Contact = () => {
  const siteName = import.meta.env.VITE_SITE_NAME;
  const website = import.meta.env.VITE_WEBSITE; // keep consistent

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Contact AD Tour Travel | Car Rental with Driver in Delhi</title>

        {/* Description */}
        <meta
          name="description"
          content="Contact AD Tour Travel for reliable car rental with driver, taxi service, and tour & travel services across Delhi, Manali, Shimla, Agra, Jaipur and North India."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="contact AD Tour Travel, Delhi taxi service contact, car rental with driver Delhi, outstation cab Delhi, tour and travel service Delhi"
        />

        {/* Open Graph */}
        <meta property="og:title" content={`Contact Us | ${siteName}`} />
        <meta
          property="og:description"
          content="Get in touch with AD Tour Travel for comfortable car rental with driver and taxi services across North India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${website}/contact`} />
        <meta property="og:image" content={`${website}/logo.png`} />

        {/* Canonical */}
        <link rel="canonical" href={`${website}/contact`} />
      </Helmet>

      <ContactHero />
      <ContactInfo />
      <ContactLocation />
      <WhyChooseUs />
    </>
  );
};

export default Contact;
