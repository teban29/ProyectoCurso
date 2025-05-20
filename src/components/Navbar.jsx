import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/img/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <h2>Transportadora TC</h2>
        </div>

        <div
          className={`burger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
          aria-expanded={isOpen}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>

        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </a>
            </li>
            <li>
              <a
                id="login"
                href="http://31.97.10.251/"
                onClick={() => setIsOpen(false)}>
                Ingresar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
