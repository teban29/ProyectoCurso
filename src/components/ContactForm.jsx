import React, { useState } from "react";
import "../styles/ContactForm.css";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1fplbgv",
        "template_cc8z5vr",
        formData,
        "YYnYuuPCELA6O3Fll"
      )
      .then(
        (response) => {
          setStatus("¡Mensaje enviado con éxito!");
          setFormData({
            nombre: "",
            apellido: "",
            empresa: "",
            correo: "",
            telefono: "",
            mensaje: "",
          });
        },
        (error) => {
          setStatus(
            "¡Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo!"
          );
          console.error("EmailJS Error: ", error);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h2>Formulario de Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
};
