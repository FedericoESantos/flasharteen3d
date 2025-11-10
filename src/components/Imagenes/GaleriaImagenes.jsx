import { Link, useParams } from "react-router-dom";
import Imagenes from "../Json/Imagenes.json";
import Volver from '../../assets/iconos/volver.png'

const GaleriaImagenes = () => {
  const { categoryId } = useParams();

  const filtradas = Imagenes.filter(img => img.category === categoryId);

  return (
    <div className="galeria-list-mult">
      <h1 className="title">Imágenes - {categoryId}</h1>

      <div className="galeria-grid">
        {filtradas.map(item => (
          <img
            key={item.id}
            src={item.url}
            alt={item.title}
            className="galeria-item"
          />
        ))}
      </div>
      
      <Link to='/galeria/imagenes' className="volver"> <img src={Volver} alt="volver" /></Link>

    </div>
  );
};

export default GaleriaImagenes;
