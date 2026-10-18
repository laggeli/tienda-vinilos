import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductsDetail from "./pages/productDetail/ProductDetail";
import Contact from "./pages/contact/Contact";
import Carrito from "./pages/Carrito";
import Nosotros from "./pages/nosotros/Nosotros";
import FrequentQuestions from "./pages/frecuentQuestions/FrequentQuestions";
import Devolutions from "./pages/devolutions/Devolutions";
import NotFound from "./pages/notFound/NotFound";
import AppNavBar from "./components/navBar/AppNavBar";
import Footer from "./components/footer/Footer"; 
import { cantidadTotal } from "./utils/operacionesCarrito";

function App() {
  const [total, setTotal] = useState(() => cantidadTotal());
  const actualizarTotal = () => { setTotal(cantidadTotal()); };

  return (
    <> 
    <AppNavBar cantidadProductosEnCarrito={total} />
      <Routes>
        <Route path="/" element={<Home onActualizarCarrito={actualizarTotal}/>} />
        <Route path="/productos" element={<Products onActualizarCarrito={actualizarTotal}/>} />
        <Route path="/producto/:id" element={<ProductsDetail onActualizarCarrito={actualizarTotal} />} />
        <Route path="/contacto" element={<Contact onActualizarCarrito={actualizarTotal}/>} />
        <Route path="/carrito" element={<Carrito onActualizarCarrito={actualizarTotal}/>} />
        <Route path="/nosotros" element={<Nosotros onActualizarCarrito={actualizarTotal} />} />
        <Route path="/preguntasFrecuentes" element={<FrequentQuestions onActualizarCarrito={actualizarTotal} />} />
        <Route path="/devoluciones" element={<Devolutions onActualizarCarrito={actualizarTotal} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;