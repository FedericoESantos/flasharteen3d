import { Link, useParams } from "react-router-dom";
import Productos from '../Json/Productos.json'
import ItemList from "../ItemList/ItemList";
import Volver from '../../assets/iconos/volver.png'

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const filtered = Productos.filter(p => p.category === categoryId);

  return (
    <div className='itemlistcontainer'>
      <h1 className="title-prod">Productos {categoryId}</h1>
      <ItemList products={filtered} />
      <Link to='/productos' className="volver"> <img src={Volver} alt="volver" /></Link>
    </div>
  )
}

export default ItemListContainer;