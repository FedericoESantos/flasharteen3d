import Videos from "../Json/Videos.json";
import { Link } from "react-router-dom";
import Volver from '../../assets/iconos/volver.png';

const Video = () => {
  return (
    <div className="galeria-list-mult">
      <h1 className="title">VIDEOS DE NUESTRAS CREACIONES</h1>

      <div className="galeria-grid">
        {Videos.map(item => (
          <video
            key={item.id}
            src={item.src}
            alt={item.title}
            className="galeria-item"
            controls
          />
        ))}
      </div>

      <Link to='/galeria' className="volver">
        <img src={Volver} alt="volver" />
      </Link>
    </div>
  );
};

export default Video;