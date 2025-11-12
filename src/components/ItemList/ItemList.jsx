import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div className="card-cont">
      {products.map(prod => (
        <div key={prod.id} className="item">
          <Item
            id={prod.id}
            img={prod.img}
            title={prod.title}
            price={prod.price}
          />

          <Link to={`/producto/${prod.id}`} className="btn-detalle">
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
