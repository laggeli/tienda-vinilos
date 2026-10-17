import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Carrito from "./pages/Carrito";
import NotFound from "./pages/NotFound";
import AppNavBar from "./components/AppNavBar";
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
        <Route path="/productos/:id" element={<ProductsDetails onActualizarCarrito={actualizarTotal} />} />
        <Route path="/contacto" element={<Contact onActualizarCarrito={actualizarTotal}/>} />
        <Route path="/carrito" element={<Carrito onActualizarCarrito={actualizarTotal}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;