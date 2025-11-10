import { Link, useParams } from "react-router-dom";
import Videos from "../Json/Videos.json";
import Volver from '../../assets/iconos/volver.png';

const GaleriaVideos = () => {
  const { categoryId } = useParams();

  const filtrados = Videos.filter(vid => vid.category === categoryId);

  return (
    <div className="galeria-list-mult">
      <h1 className="title">Videos - {categoryId}</h1>

      <div className="galeria-grid">
        {filtrados.map(item => (
          <video
            key={item.id}
            controls
            className="galeria-item"
          >
            <source src={item.url} type="video/mp4" />
          </video>
        ))}
      </div>

      <Link to='/galeria/videos' className="volver">
        <img src={Volver} alt="volver" />
      </Link>
    </div>
  );
};

export default GaleriaVideos;

