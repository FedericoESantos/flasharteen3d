import React from 'react'
import fedeFlash from '../assets/images/fede-flash.png'

const QuienesMain = () => {
  return (
    <div className='quienes-main'>
        <div className="quienes-info">
            <h2>Empresa</h2>
            <br />
            <span><strong>Flash Arte en 3D</strong> es un espacio en donde nos esforzamos para deslumbrar nuestras obras de arte en 3D.</span>
            
        </div>
      
        <img src={fedeFlash} alt="fede-flash" />
    </div>
  )
}

export default QuienesMain
