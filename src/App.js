// src/App.js

import React from "react";
import "./App.css";
import ServicesPage from "./pages/Services/ServicesPage";
import ServicesCard from "./pages/Service card/ServiceCard";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service_card" element={<ServicesCard />} />
          {/* <Route path="/subscription" element={<ResourcesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
