import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import ws from '../../assets/iconos/whatsapp.png'


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

            <span>
                <p>Cualquier consulta no dude en enviarnos un mail</p>
                <h4>boomartsfs@gmail.com</h4>
                <p>o nos puede contactar por Whatsapp</p>
                <div className="whatsapp">
                          <img src={ws} alt="logo-whats" />
                          <a
                            href="https://wa.me/59893938018?text=Hola%20quiero%20más%20info"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Consulta al Whatsapp
                          </a>
                        </div>
            </span>
        </div>


    </div>
  )
}

export default Footer
