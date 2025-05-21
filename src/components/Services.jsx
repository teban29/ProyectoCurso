import React from "react";
import "../styles/Services.css";

const services = [
  {
    id: 1,
    icon: "📊",
    title: "Gestion Logistica de Inventario",
    description:
      "Gestionamos tu inventario con procesos eficientes. Garantizamos un seguimiento en tiempo real, reducción de errores y optimización de tus existencias, para que siempre tengas el stock necesario cuando lo necesites.",
  },

  {
    id: 2,
    icon: "📦",
    title: "Almacenamiento Seguro de Cargas",
    description:
      "Nuestras bodegas están equipadas con altos estándares de seguridad y climatización. Ofrecemos espacio flexible para guardar tus mercancías, ya sean perecederas, frágiles o de alto valor, con acceso ágil y controlado.",
  },

  {
    id: 3,
    icon: "🚛",
    title: "Transporte Rapido y Confiable",
    description:
      "Llevamos tus cargas a cualquier parte con flotas modernas y rutas optimizadas. Garantizamos entregas seguras, a tiempo y con trazabilidad total, para que tu mercancía llegue en perfecto estado.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="services-title">Nuestros Servicios</h2>
      <p className="services-subtitle">
        Brindamos soluciones logisticas y de transporte de mercancia de manera
        eficiente para tu empresa.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <a
        className="services-cta-button"
        href="http://31.97.10.251/despachos/seguimiento/">
        <h2>Consulta el estado de tu envío</h2>
      </a>
    </section>
  );
};
