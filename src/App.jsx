import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Novedades from './components/Novedades';
import Login from './components/Login';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito';
import CrudProductos from './components/CrudProductos';


function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="administracion" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/crud" element={<CrudProductos />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App;


