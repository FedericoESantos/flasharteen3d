import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import emailjs from "emailjs-com";

const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, totalProductos, vaciarCarrito } = useCart();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generarCodigo = () => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    let codigo = "";
    for (let i = 0; i < 3; i++) codigo += letras[Math.floor(Math.random() * letras.length)];
    for (let i = 0; i < 3; i++) codigo += numeros[Math.floor(Math.random() * numeros.length)];
    for (let i = 0; i < 3; i++) codigo += letras[Math.floor(Math.random() * letras.length)];
    return codigo;
  };

  const enviarEmail = (formData, cart, codigo) => {
    const pedido = cart.map(item => `${item.title} (x${item.cantidad})`).join(", ");

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      pedido,
      codigo,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,      // 🔹 tu Service ID de EmailJS
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,     // 🔹 tu Template ID
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY     // 🔹 tu Public Key
      )
      .then(() => {
        console.log("Correo enviado ✅");
        alert("¡Correo enviado con éxito! Revisa tu bandeja de entrada ✉️");
        vaciarCarrito(); // Vacía el carrito solo si el correo se envió correctamente
      })
      .catch((err) => {
        console.error("Error al enviar correo ❌", err);
        alert("Hubo un error al enviar el correo. Intentá nuevamente.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const codigo = generarCodigo();
    setOrderId(codigo);
    enviarEmail(formData, cart, codigo);
  };

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h2>¡Gracias por tu compra, {formData.nombre}! 🎉</h2>
        <p>Tu código de validación es:</p>
        <h3 style={{ color: "green", fontSize: "1.5rem" }}>{orderId}</h3>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "60px auto", textAlign: "center" }}>
      <h2>Finalizar compra 🧾</h2>
      <p>Tenés {totalProductos} productos en el carrito.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            backgroundColor: "#ff8c42",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Enviar pedido
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
