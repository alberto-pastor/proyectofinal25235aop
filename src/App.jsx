import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Novedades from './components/Novedades';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="administracion" element={<Login />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/novedades" element={<Novedades />}/>
        <Route path="/ofertas" element={<Ofertas />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;


