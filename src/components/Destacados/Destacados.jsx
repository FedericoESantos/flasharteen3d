import React from 'react'
import Item from '../Item/Item'

/*Destacados*/
import lapicero from '../../assets/images/destacados/lapicero.jfif'
import limpiador from '../../assets/images/destacados/limpiador-mesa.jfif'
import tateti from '../../assets/images/destacados/tateti.jfif'
import llavero from '../../assets/images/destacados/llavero-celular.jfif'

import mas from '../../assets/iconos/mas.png'

const Destacados = () => {
  return (
    <div className='destacados'>
        <div className="titulo">
            <h3>Productos Destacados</h3>
        </div>

        <div className="card-cont">

            <div className="card">
                <Item 
                    title='Lapicero Mario' 
                    img={lapicero} 
                    description={'Lapicero de Mario Bros'}
                />
            </div>

            <div className="card">
                <Item 
                    title='Limpiador' 
                    img={limpiador} 
                    description={'Limpiador de mesa recoge migas de Emoji'}
                />
            </div>

            <div className="card">
                <Item 
                    title='Ta Te Ti' 
                    img={tateti} 
                    description={'Juego de mesa de bolsillo Ta Te Ti con carcaza'}
                />
            </div>

            <div className="card">
                <Item 
                    title='Llavero y soporte de Celular' 
                    img={llavero} 
                    description={'Llavero que se ajusta como soporte de celular'}
                />
            </div>
            
        </div>

        <a href="">
            <img src={mas} alt="logo-mas" />
        </a>

    </div>
  )
}

export default Destacados
