import logo from '../../assets/images/logo.png'
import Menu from '../MenuMain'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='header'>

      <div className="titulo">
      <Menu />

      <div className="logo">
        <Link to='/'>
          <img src={logo} alt="logo" /> 
        </Link>
        <div className="logo-titulo">
          <p>Hacemos realidad tus sueños ... <br />
          a la velocidad de la luz!!!</p>
        </div>
      </div>
      </div>

      <div className="navbar">
        <ul>
          <li>
            <Link to="/productos">Productos</Link>
            <p> | </p>
            <Link to="/galeria">Galeria</Link>
            <p> | </p>
            <Link to="/contacto">Contacto</Link>
            <p> | </p>

            <CartWidget contador='0' />
          </li>
        </ul>
      </div>

    <hr />
      
    </div>
  )
}

export default NavBar;
