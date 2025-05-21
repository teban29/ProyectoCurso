import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Transportadora TC</h2>
          <p>
            Soluciones rapidas y confiables para tus necesidades de transporte y
            logistica
          </p>
        </div>

        <div className="footer-links">
          <h3>Enlaces Rapidos</h3>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="http://31.97.10.251/despachos/seguimiento/">
                Estado de Envio
              </a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy: 2025 Transportadora TC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
