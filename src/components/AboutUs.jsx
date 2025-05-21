import React, { useEffect, useState, useRef } from "react";
import aboutusimg from "../assets/img/aboutus.jpg";
import "../styles/AboutUs.css";

export const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const topPosition = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (topPosition < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="nosotros" className="about-us">
      <div
        className={`about-us-container ${isVisible ? "visible" : ""}`}
        ref={ref}>
        <div className="about-us-text">
          <h2>¿Quién somos?</h2>
          <p>
            Somos una empresa comprometida con brindar soluciones de transporte
            y logistica de alta calidad. Con mas de 10 años de experiencia en el
            sector, hemos establecido una reputacion de confianza, eficiencia y
            excelencia.
          </p>
          <p>
            Nuestro objetivo es es conectar a personas y empresas, asegurando
            que sus mercancias lleguen a destino de forma segura y puntual.
          </p>
        </div>
        <div className="about-us-image">
          <img src={aboutusimg} alt="Imagen" />
        </div>
      </div>
    </section>
  );
};
