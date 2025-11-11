import Img from "../Json/Imagenes.json";
import { Link } from "react-router-dom";
import Volver from '../../assets/iconos/volver.png';

const Imagenes = () => {
  return (
    <div className="galeria-list-mult">
      <h1 className="title">IMÁGENES DE NUESTRAS CREACIONES</h1>

      <div className="galeria-grid">
        {Img.map(item => (
          <img
            key={item.id}
            src={item.src}
            alt={item.title}
            className="galeria-item"
          />
        ))}
      </div>

      <Link to='/galeria' className="volver">
        <img src={Volver} alt="volver" />
      </Link>
    </div>
  );
};

export default Imagenes;
