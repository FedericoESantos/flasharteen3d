import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const { cart, vaciarCarrito } = useCart();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const enviarEmail = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío 🛒");
      return;
    }

    const codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
    const pedido = cart
      .map(item => `#${item.id} - ${item.title} (x${item.cantidad})`)
      .join(", ");
    const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0); // 👈 agregado

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      pedido,
      total: total.toFixed(2),
      codigo,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        console.log("Correo enviado ✅");
        alert("¡Correo enviado con éxito! En breve nos pondremos en contacto contigo. Revisa tu bandeja de entrada ✉️");
        vaciarCarrito();
        setFormData({ nombre: "", email: "", telefono: "" });
      })
      .catch((err) => {
        console.error("Error al enviar correo ❌", err);
        alert("Hubo un error al enviar el correo. Intentá nuevamente.");
      });
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>

      <form onSubmit={enviarEmail} className="checkout-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />

        <button type="submit" disabled={cart.length === 0}>
          Enviar pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
