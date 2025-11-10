import React from 'react'
import ws from '../../assets/iconos/whatsapp.png'
import { Link } from 'react-router-dom'

const Contacto = () => {
  return (
    <div className='contacto'>
      <h1 className='title'>Contacto</h1>

      <div className="contacto-info">
        <h2>Nos pueden contactar por cualquier consulta al siguiente mail:</h2>
        <br />
        <h3 className='mail'> boomartsfs@gmail.com</h3>
        <br />
        <span>En el caso de comprar algún producto, nos entaremos poniendo en contacto con usted para coordinar la compra.
          No pierda el número de ID que se genera con la misma.
        </span>

        <br />

        <span>
          Si desea ponerse en contacto con nosotros por medio de Whatsapp:
        </span>
        <br />
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

      </div>

    </div>
  )
}

export default Contacto
