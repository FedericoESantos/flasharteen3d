import { Link } from 'react-router-dom'

import carrito from '../../assets/images/carrito.png'
const CartWidget = ({contador}) => {
  return (
    <div className='cart'>
      <Link to='/cart'>
        <img src={carrito} alt="carrito" className='carrito'/>
      </Link>
        {contador}
    </div>
  )
}

export default CartWidget
