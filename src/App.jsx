
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Reviews from './Components/Reviews/Reviews'
import Cart from './Components/Cart/Cart'
import Singup from './Components/Singup/Singup'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { CartProvider } from './CartContext';

function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
     <Navbar/>
     <Routes>
    <Route path="/" element={<Home />} />
    <Route  path="/reviews" element={<Reviews/>} />
    <Route path="/cart" element={<Cart />} />
    <Route  path="/singup" element={<Singup />} />
    </Routes>
    </CartProvider>
     </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
