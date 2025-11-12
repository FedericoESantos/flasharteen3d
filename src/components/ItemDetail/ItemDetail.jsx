import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import productos from "../Json/Productos.json";
import { useCart } from "../Context/CartContext";
import Volver from "../../assets/iconos/volver.png";

const ItemDetail = () => {
  const { productId } = useParams();
  const product = productos.find(p => p.id === Number(productId));
  const [cantidad, setCantidad] = useState(1);
  const { agregarAlCarrito } = useCart();

  if (!product) return <h2>Producto no encontrado</h2>;

  const aumentar = () => setCantidad(prev => prev + 1);
  const disminuir = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  const handleAgregar = () => {
    agregarAlCarrito(product, cantidad);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img src={product.img} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>

        <div className="contador">
          <button onClick={disminuir}>-</button>
          <span>{cantidad}</span>
          <button onClick={aumentar}>+</button>
        </div>

        <div className="acciones">
          <button onClick={handleAgregar}>Agregar al carrito</button>

          <Link to="/cart">
            <button>Ir al carrito 🛒</button>
          </Link>

          <Link to="/productos">
            <button>Volver a productos 🔙</button>
          </Link>
        </div>
      </div>

      <Link to={`/productos/${product.category}`} className="volver">
        <img src={Volver} alt="volver" />
      </Link>
    </div>
  );
};

export default ItemDetail;
