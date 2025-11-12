import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './components/Context/CartContext';


import './App.css'
import NavBar from './components/NavBar/NavBar'
import Greeting from './components/Greeting/Greeting'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

/*RUTAS*/
import Category from './components/Category/Category'
import ProductsId from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Empresa from './components/Empresa/Empresa'
import Promociones from './components/Promociones/Promociones'
import Contacto from './components/Contacto/Contacto'
import MediosPago from './components/MediosPago/MediosPago'
import Home from './components/Home/Home'
import CategoryMultimedia from './components/CategoryMultimedia/CategoryMultimedia'
import Imagenes from './components/Imagenes/Imagenes'
import Video from './components/Videos/Videos'

/*CARRITO*/
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className='color-fondo'>

      <CartProvider>

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
              <Route path='/productos' element={<Category />} />
              <Route path='/productos/:categoryId' element={<ProductsId />} />
              <Route path="/producto/:productId" element={<ItemDetail />} />

              {/* GALERIA DE IMAGENES Y VIDEO */}
              <Route path='/galeria' element={<CategoryMultimedia />} />
              {/* IMAGENES */}
              <Route path="/galeria/imagenes" element={<Imagenes />} />

              {/* VIDEOS */}
              <Route path="/galeria/videos" element={<Video />} />

              <Route path='/empresa' element={<Empresa />} />
              <Route path='/promociones' element={<Promociones />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/mediosPago' element={<MediosPago />} />

              {/* CARRITO */}
              <Route path="/cart" element={<Cart />} />

              {/* ERROR */}
              <Route path='*' element={<Error />} />

            </Routes>

          </div>
          <Footer />

        </BrowserRouter>
      </CartProvider>

    </div>
  )
}

export default App
