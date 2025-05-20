import React, { useState, useEffect } from "react";
import "../styles/Slider.css";
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import slider3 from "../assets/img/slider3.jpg";

const images = [
  {
    src: slider1,
    alt: "Slider 1",
    caption: "Soluciones rápidas y confiables para transporte terrestre",
  },
  {
    src: slider2,
    alt: "Slider 2",
    caption: "Entregas internacionales con transporte aéreo eficiente",
  },
  {
    src: slider3,
    alt: "Slider 3",
    caption: "Transporte marítimo para cargas grandes y voluminosas",
  },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="slider-image"
        />
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}></button>
        ))}
      </div>
    </div>
  );
};
