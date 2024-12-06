import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services1/Services";
import AgilityServices from "../../components/Agility4.0 services/AgilityServices";
import Footer from "../../components/Footer/Footer";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <Services />
      <AgilityServices />
      <Footer />
    </>
  );
};

export default ServicesPage;
