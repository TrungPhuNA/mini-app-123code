import React from "react";
import { Page, Box } from "zmp-ui";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

const HomePage = () => {
  return (
    <Page className="relative bg-white">
      <Box className="flex flex-col pb-24">
        <Hero />
        <TechStack />
        <Services />
        <Portfolio />
        <Testimonials />
      </Box>
      <ContactCTA />
    </Page>
  );
};

export default HomePage;
