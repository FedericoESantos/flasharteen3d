import Carrusel from '../Carrusel'
import InfoMain from '../InfoMain/InfoMain'
import Destacados from '../Destacados/Destacados'
import QuienesMain from '../QuienesMain'
import Novedades from '../Novedades/Novedades'

const Home = () => {
  return (
    <>
      <Carrusel />
      <hr />
      <InfoMain />
      <hr />
      <Novedades />
      <hr />
      <Destacados />
      <hr />
      <QuienesMain />
    </>
  )
}

export default Home



