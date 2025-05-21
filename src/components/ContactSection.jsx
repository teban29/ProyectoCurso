import React from "react";
import { ContactForm } from "./ContactForm";
import "../styles/ContactSection.css";
import whatsappLogo from "../assets/img/whatsapp-logo.png";

export const ContactSection = () => {
  const whatsappLink =
    "https://wa.me/3197684885?text=Estoy+interesado+en+sus+servicios,+deseo+más+información.";

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contáctanos</h2>
          <p>
            Estamos aquí para ayudarte. Puedes comunicarte con nosotros de las
            siguientes maneras:
          </p>
          <ul className="contact-list">
            <li>
              <strong>Teléfonos:</strong>
              <ul className="phone-list">
                <li>+57 313 596 7831</li>
                <li>+57 312 294 8460</li>
              </ul>
            </li>
            <li>
              <strong>Correo Electrónico:</strong> info@transportadoratc.com
            </li>
          </ul>
          <a
            href={whatsappLink}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp Logo" />
            Enviar mensaje por WhatsApp
          </a>
        </div>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
