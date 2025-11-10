import React from "react";
import { Link } from "react-router-dom";

const CategoryMultimedia = () => {
  return (
    <div className="categories-mult">
      <h1 className="title">Categorías Multimedia</h1>

      <div className="categories-list-mult">

        <Link 
          to="/galeria/imagenes" 
          className="category-card-mult"
        >
          Imágenes
        </Link>

        <Link 
          to="/galeria/videos" 
          className="category-card-mult"
        >
          Videos
        </Link>

      </div>
    </div>
  );
};

export default CategoryMultimedia;
