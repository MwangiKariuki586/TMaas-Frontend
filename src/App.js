// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Categories from './components/Categories/Categories';
import CareerAdvisor from './components/CareerAdvisor/CareerAdvisor';
import WhyDTMA from './components/WhyDTMA/WhyDTMA';
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection';
import LearningPlatform1 from './components/LearningPlatform1/LearningPlatform1';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import ServicesPage from "./pages/Services/ServicesPage"
import ServicesCard from './pages/Service card/ServiceCard';

function App() {
    return (
        <div className="App">
            {/* <ServicesCard/> */}
            <ServicesPage/>
        </div>
    );
}

export default App;
