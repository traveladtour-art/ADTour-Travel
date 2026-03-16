import React from "react";
import { Helmet } from "react-helmet-async";

import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactLocation from "../components/ContactLocation";
import WhyChooseUs from "../components/WhyChooseUs";

const Contact = () => {
  const siteName = import.meta.env.VITE_SITE_NAME;

  return (
    <>
      <Helmet>
        <title>Contact Us | {siteName}</title>

        <meta
          name="description"
          content="Contact AD Tour & Travel for comfortable car travel with professional drivers across Delhi, Manali, Shimla, Agra, Jaipur and North India."
        />

        <meta
          name="keywords"
          content="contact travel agency delhi, car with driver delhi, outstation taxi contact, AD Tour & Travel contact"
        />

        <meta property="og:title" content={`Contact Us | ${siteName}`} />

        <meta
          property="og:description"
          content="Get in touch with AD Tour & Travel to plan your next journey with experienced drivers and comfortable vehicles."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <ContactHero />
      <ContactInfo />
      <ContactLocation />
      <WhyChooseUs />
    </>
  );
};

export default Contact;
