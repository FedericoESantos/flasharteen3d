import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import carrito from '../assets/images/carrito.png'

const Carrusel = () => {

  const images = [logo, carrito,logo, carrito,logo];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrusel">
      {images.map((img, i) => (
        <img 
          key={i}
          src={img}
          className={`slide ${i === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Carrusel;
