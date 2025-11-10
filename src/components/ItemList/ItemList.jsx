import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="card-cont">
      {products.map(prod => (
        <Item
          key={prod.id}
          id={prod.id}
          img={prod.img}
          title={prod.title}
          price={prod.price}
          description={prod.description}
        />
      ))}
    </div>
  );
};

export default ItemList;