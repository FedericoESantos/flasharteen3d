import { Link } from "react-router-dom";
import Imagenes from "../Json/Imagenes.json";
import Volver from '../../assets/iconos/volver.png'

const CategoriasImagenes = () => {
  const categorias = [...new Set(Imagenes.map(img => img.category))];

  return (
    <div className="categories-mult">
      <h1 className="title">Categorías de Imágenes</h1>

      <div className="categories-list-mult">
        {categorias.map(cat => (
          <Link
            key={cat}
            to={`/galeria/imagenes/${cat}`}
            className="category-card-mult"
          >
            {cat}
          </Link>
        ))}
      </div>

      <Link to='/galeria' className="volver"> <img src={Volver} alt="volver" /></Link>

    </div>
  );
};

export default CategoriasImagenes;
