import { useState, useEffect } from "react";
import { useParams, Link } from "react-router"; 
import { Container, Row, Col, Button } from "react-bootstrap";
import { productos } from "../data/products.js"; 
import { agregarProducto } from "../utils/operacionesCarrito"; 
import AvisoCarrito from "../components/AvisoCarrito.jsx"; 
import VinylCard from "../components/VinylCard.jsx"; 
import styles from "./ProductDetail.module.css";

function ProductDetails({ onActualizarCarrito }) {
  const { id } = useParams(); 
  const [avisoCarrito, setAvisoCarrito] = useState("");

  const producto = productos.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (producto) {
      document.title = `Lado V | ${producto.name} - ${producto.artist}`;
    }
  }, [producto]);

  if (!producto) {
    return (
      <Container className="py-5 text-center" style={{ minHeight: "60vh", marginTop: "100px" }}>
        <h2>Disco no encontrado</h2>
        <p>El vinilo que buscás no existe o fue retirado de la batea.</p>
        <Link to="/productos" className="btn btn-outline-dark mt-3">Volver al catálogo</Link>
      </Container>
    );
  }

  const sugeridos = productos
    .filter((p) => p.category === producto.category && String(p.id) !== String(producto.id))
    .slice(0, 4);

  const handleAgregarAlCarrito = (prod) => {
    if (prod.stock <= 0) return;
    agregarProducto(prod); 
    if (onActualizarCarrito) { onActualizarCarrito(); }
    setAvisoCarrito(`${prod.name} se agregó al carrito.`);
  };

  return (
    <section className={styles.detailSection}>
      <Container className="py-4">
        
        <nav className={styles.breadcrumb}>
          <Link to="/">Inicio</Link> / <Link to="/productos">Tienda</Link> / <span>{producto.category}</span>
        </nav>

        <AvisoCarrito 
          mensaje={avisoCarrito} 
          onClose={() => setAvisoCarrito("")} 
        />

        <Row className="mb-5 align-items-start">
          <Col md={6} className="mb-4 mb-md-0">
            {/* Contenedor Wrapper para limitar el ancho */}
            <div className={styles.coverWrapper}>
              <div className={styles.coverContainer}>
                <img 
                  src={producto.image || "https://via.placeholder.com/500"} 
                  alt={`Portada de ${producto.name}`} 
                  className={styles.coverImage}
                />
                <div className={styles.coverGlare}></div>
              </div>
            </div>
          </Col>

          <Col md={6} className={styles.infoContainer}>
            <span className={styles.artistName}>{producto.artist}</span>
            <h1 className={styles.albumName}>{producto.name}</h1>
            
            <div className={styles.metaData}>
              <span className={styles.metaBadge}>{producto.year || "Reedición"}</span>
              <span className={styles.metaBadge}>{producto.category}</span>
            </div>

            <p className={styles.price}>${producto.price.toLocaleString("es-AR")}</p>

            <div className={styles.stockInfo}>
              {producto.stock > 0 ? (
                <span className={styles.inStock}>● En stock ({producto.stock} disponibles)</span>
              ) : (
                <span className={styles.outOfStock}>● Agotado temporalmente</span>
              )}
            </div>
            
            <p className={styles.description}>
              {producto.description 
                ? producto.description 
                : "Edición indispensable en la batea de cualquier melómano. Sonido analógico puro que captura la esencia original de la grabación, conservando la calidez que solo el vinilo puede entregar."}
            </p>

            <Button 
              className={styles.btnAgregar} 
              onClick={() => handleAgregarAlCarrito(producto)}
              disabled={producto.stock <= 0}
            >
              {producto.stock > 0 ? "AGREGAR AL CARRITO" : "SIN STOCK"}
            </Button>
          </Col>
        </Row>
        
        {sugeridos.length > 0 && (
          <div className={styles.suggestedSection}>
            <div className={styles.suggestedHeader}>
              <h3 className={styles.suggestedTitle}>Joyas similares</h3>
              <p className={styles.suggestedSubtitle}>
                Si te gusta <strong>{producto.artist}</strong>, sumergite en estos sonidos.
              </p>
            </div>
            
            <Row className="g-4">
              {sugeridos.map((sugerido) => (
                <VinylCard 
                  key={sugerido.id} 
                  producto={sugerido} 
                  onAdd={handleAgregarAlCarrito} 
                />
              ))}
            </Row>
          </div>
        )}

      </Container>
    </section>
  );
}
export default ProductDetails