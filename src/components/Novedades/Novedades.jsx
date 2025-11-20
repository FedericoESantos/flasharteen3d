import souv1 from '../../assets/images/souvenir1.jfif'
import souv2 from '../../assets/images/souvenir2.jpg'
import souv3 from '../../assets/images/souvenir3.jpg'

const Novedades = () => {
    return (
        <div className="novedades">
            <h2 className="titulo"> Ultimas novedades!!!</h2>
            <h3>
                Preparativos para el cumple de Candelaria!!!
            </h3>
            <p>Muy lindos Souvenir de "<strong>Labubu</strong>"</p>
            <div className="cards">
                <div className="card">
                    <img src={souv1} alt="lapicero" />
                </div>

                <div className="card">
                    <img src={souv2} alt="lapicero" />
                </div>

                <div className="card">
                    <img src={souv3} alt="lapicero" />
                </div>

            </div>
        </div>
    )
}

export default Novedades
