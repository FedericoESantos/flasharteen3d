import { Link } from "react-router-dom";
import Videos from "../Json/Videos.json";
import Volver from '../../assets/iconos/volver.png'

const CategoriasVideos = () => {
  const categorias = [...new Set(Videos.map(vid => vid.category))];

  return (
    <div className="categories-mult">
      <h1 className="title">Categorías de Videos</h1>

      <div className="categories-list-mult">
        {categorias.map(cat => (
          <Link
            key={cat}
            to={`/galeria/videos/${cat}`}
            className="category-card-mult"
          >
            {cat}
          </Link>
        ))}
      </div>

      <Link to='/galeria/' className="volver"> <img src={Volver} alt="volver" /></Link>
    </div>
  );
};

export default CategoriasVideos;
