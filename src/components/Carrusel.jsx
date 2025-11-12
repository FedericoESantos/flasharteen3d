import { useEffect, useState } from 'react'

import logo from '../assets/images/carrusel/logo.png'
import img1 from '../assets/images/carrusel/1.png'
import img2 from '../assets/images/carrusel/2.png'
import img3 from '../assets/images/carrusel/3.png'
import img4 from '../assets/images/carrusel/4.png'
import img5 from '../assets/images/carrusel/5.png'
import img6 from '../assets/images/carrusel/6.png'

const Carrusel = () => {

  const images = [logo, img1, img2, img3,img4,img5,img6];
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
