import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Greeting from './components/Greeting/Greeting'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

/*RUTAS*/
import Category from './components/Category/Category'
import ProductsId from './components/ItemListContainer/ItemListContainer'
import Empresa from './components/Empresa/Empresa'
import Promociones from './components/Promociones/Promociones'
import Contacto from './components/Contacto/Contacto'
import MediosPago from './components/MediosPago/MediosPago'
import Home from './components/Home/Home'
import CategoryMultimedia from './components/CategoryMultimedia/CategoryMultimedia'
import Imagenes from './components/Imagenes/Imagenes'
import Videos from './components/Videos/Videos'
import GaleriaImagenes from './components/Imagenes/GaleriaImagenes'
import GaleriaVideos from './components/Videos/GaleriaVideos'


function App() {

  return (
  <div className='color-fondo'>

    <BrowserRouter>
    
      <NavBar />

      <div className="content">

        <Routes>
          {/* HOME */}
          <Route 
              path='/' 
              element={
                <>
                  <Greeting greeting='Bienvenidos al rincón del arte en 3D.' />
                  <Home />
                </>
              } 
            />

          {/* PÁGINAS */}
          <Route path='/productos' element={ <Category /> } />
          <Route path='/productos/:categoryId' element={<ProductsId />} />
          <Route path='/galeria' element={ <CategoryMultimedia /> } />
          {/* IMAGENES */}
          <Route path="/galeria/imagenes" element={<Imagenes />} />
          <Route path="/galeria/imagenes/:categoryId" element={<GaleriaImagenes />  } />
          {/* VIDEOS */}
          <Route path="/galeria/videos" element={<Videos />} />
          <Route path="/galeria/videos/:categoryId" element={<GaleriaVideos />} />

          <Route path='/empresa' element={ <Empresa /> } />
          <Route path='/promociones' element={ <Promociones /> } />
          <Route path='/contacto' element={ <Contacto /> } />
          <Route path='/mediosPago' element={ <MediosPago /> } />

          {/* ERROR */}
          <Route path='*' element={ <Error /> } />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>

  </div>
  )
}

export default App
