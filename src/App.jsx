import { useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Slider } from "./components/Slider.jsx";
import { Services } from "./components/Services.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Slider />
        <Services />
        <AboutUs />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
export default App;
