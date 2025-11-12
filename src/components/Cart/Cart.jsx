import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import flechaRoja from "../../assets/iconos/borrar.png"; 

const Cart = () => {
  const { cart, totalProductos, eliminarDelCarrito } = useCart();

  const totalCompra = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        El carrito está vacío 🛒
      </h2>
    );
  }

  const finalizarCompra = () => {
    alert(`Gracias por tu compra! Total: $${totalCompra}`);
  };

  return (
    <div style={{ padding: "20px" }} className="cart">
      <h2 className="title">Tu carrito ({totalProductos} productos)</h2>

      <ul style={{ listStyle: "none", padding: 0 }} className="cart-info">
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <div style={{ flexGrow: 1 }}>
              <p style={{ margin: 0, fontWeight: "bold" }}>{item.title}</p>
              <p style={{ margin: 0 }}>Cantidad: {item.cantidad}</p>
              <p style={{ margin: 0 }}>Precio unitario: ${item.price}</p>
            </div>

            <p style={{ fontWeight: "bold" }}>
              Subtotal: ${item.price * item.cantidad}
            </p>

            {/* 🔻 Botón eliminar */}
            <button
              onClick={() => eliminarDelCarrito(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              title="Eliminar producto"
            >
              <img
                src={flechaRoja}
                alt="Eliminar"
                style={{
                  width: "25px",
                  height: "25px",
                  transform: "rotate(180deg)",
                }}
              />
            </button>
          </li>
        ))}
      </ul>

      <h3 style={{ textAlign: "right" }}>Total: ${totalCompra}</h3>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/productos">
          <button
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Ver más productos
          </button>
        </Link>

        <button
          onClick={finalizarCompra}
          style={{
            backgroundColor: "#ff8c42",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
