import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Categories from "../../components/Categories/Categories";
import CareerAdvisor from "../../components/CareerAdvisor/CareerAdvisor";
import WhyDTMA from "../../components/WhyDTMA/WhyDTMA";
import ExpertiseSection from "../../components/ExpertiseSection/ExpertiseSection";
import Services1 from "../../components/Services1/Services1";
import LearningPlatform1 from "../../components/LearningPlatform1/LearningPlatform1";
import CallToAction from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <CareerAdvisor />
      <WhyDTMA />
      <ExpertiseSection />
      <Services1 />
      <LearningPlatform1 />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomePage;
