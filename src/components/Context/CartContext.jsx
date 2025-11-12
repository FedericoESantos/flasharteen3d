import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    setCart(prevCart => {
      const existe = prevCart.find(item => item.id === producto.id);
      if (existe) {
        // si ya está, sumamos cantidades
        return prevCart.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        // si no está, lo agregamos
        return [...prevCart, { ...producto, cantidad }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const totalProductos = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito, totalProductos }}>
      {children}
    </CartContext.Provider>
  );
};
