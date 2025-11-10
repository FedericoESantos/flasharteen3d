import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-footer">
            <img src={logo} alt="logo" />
        </div>

        <div className="enlaces">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>  
                <li>
                    <Link to="/productos">Productos</Link>
                </li>    
                <li>    
                    <Link to="/galeria">Galeria</Link>
                </li>
                <li>
                    <Link to="/mediosPago">Medios de Pago</Link>
                </li>
            </ul>
        </div>

        <div className="contacto-footer">
            <h3>Contacto</h3>
        </div>


    </div>
  )
}

export default Footer
