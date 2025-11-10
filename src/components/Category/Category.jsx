import { Link } from "react-router-dom";
import Productos from "../Json/Productos.json";

const Category = () => {
  // Obtengo categorías únicas del JSON
  const categories = [...new Set(Productos.map(prod => prod.category))];

  return (
    <div className="categories">
      <h1 className="title">Categorías</h1>

      <div className="categories-list">
        {categories.map(cat => (
          <Link key={cat} to={`/productos/${cat}`} className="category-card">
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
