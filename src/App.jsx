import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductsDetail from "./pages/productDetail/ProductDetail";
import Contact from "./pages/contact/Contact";
import Carrito from "./pages/Carrito";
import NotFound from "./pages/notFound/NotFound";
import AppNavBar from "./components/navBar/AppNavBar";
// import Footer from "./components/footer/Footer"; apenas esté terminado, lo implemento
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;