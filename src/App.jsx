import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <> 
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos" element={<ProductsDetails />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;