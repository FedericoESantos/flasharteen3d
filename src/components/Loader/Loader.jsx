import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mancha from "../../assets/images/manchaFlash.png";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]); // 🔥 Se ejecuta cada vez que cambia la ruta

  return (
    loading && (
      <div className="loader">
        <img src={mancha} alt="mancha flash" />
        <strong>Cargando</strong>
        <img src={mancha} alt="mancha flash" />
      </div>
    )
  );
};

export default Loader;
