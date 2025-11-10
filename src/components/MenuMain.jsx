import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const MenuMain = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ cerrar al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div>
      {/* Ícono del menú */}
      <span className="menu-icon" onClick={() => setOpen(true)}>
        ☰
      </span>

      {/* Menú */}
      <nav
        ref={menuRef}
        className={`menu ${open ? "menu-open" : ""}`}
      >
        <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
        <Link to="/empresa" onClick={() => setOpen(false)}>Empresa</Link>
        <Link to="/promociones" onClick={() => setOpen(false)}>Promociones</Link>
        <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
      </nav>
    </div>
  );
};

export default MenuMain;
