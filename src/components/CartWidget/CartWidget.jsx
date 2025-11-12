import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import carrito from '../../assets/images/carrito.png';

const CartWidget = () => {
  const { totalProductos } = useCart();

  return (
    <div className='cart'>
      <Link to='/cart'>
        <img src={carrito} alt="carrito" className='carrito'/>
        {totalProductos > 0 && <span>{totalProductos}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
