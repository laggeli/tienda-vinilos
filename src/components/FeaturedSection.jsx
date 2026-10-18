import { useState } from "react";
import { Container, Row, Carousel as BootstrapCarousel } from 'react-bootstrap';
import { Link } from 'react-router';
import VinylCard from './VinylCard'; 
import RetroCarousel from './RetroCarousel'; 
import { productos } from '../data/products'; 
import { agregarProducto } from "../utils/operacionesCarrito";
import AvisoCarrito from './AvisoCarrito';
import styles from './FeaturedSection.module.css';

function FeaturedSection({onActualizarCarrito}) {
  const discosDestacados = productos.filter(producto => producto.destacado).slice(0, 8);

  const agruparDiscos = (array, tamañoGrupo) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamañoGrupo) {
      grupos.push(array.slice(i, i + tamañoGrupo));
    }
    return grupos;
  };

  const gruposDeDiscos = agruparDiscos(discosDestacados, 4);
  
  const [avisoCarrito, setAvisoCarrito] = useState("");
  const handleAgregarAlCarrito = (producto) => {
    // alert(`¡${producto.name} agregado al carrito!`);
    if (producto.stock <= 0) return;
        console.log("Producto seleccionado:", producto);
        agregarProducto(producto); 
        if (onActualizarCarrito) { onActualizarCarrito(); }
        setAvisoCarrito(`${producto.name} se agregó al carrito.`);
  };

  return (
    <section className={`py-5 ${styles.featuredSection}`}>
      <Container className="py-4">
        
        <div className={`d-flex justify-content-between align-items-end mb-4 ${styles.headerContainer}`}>
          <div className={styles.textColumn}>
            <span className={styles.preTitle}>Novedades</span>
            <h2 className={styles.title}>Joyas de la semana</h2>
            <p className={styles.description}>
              Llegaron nuevos discos. Algunas ediciones son únicas.<br/>
              No te quedes sin el tuyo.
            </p>
          </div>
          
          <div className={styles.linkColumn}>
            <Link to="/productos?filtro=novedades" className={styles.linkAll}>
                Ver todas las novedades →
            </Link>
        </div>
        </div>
        {avisoCarrito && (
          <AvisoCarrito 
            mensaje={avisoCarrito} 
            onClose={() => setAvisoCarrito("")} 
          />
        )}

        {discosDestacados.length > 0 ? (
          <RetroCarousel>
            {gruposDeDiscos.map((grupo, index) => (
              <BootstrapCarousel.Item key={index}>
                <Row className="g-4 justify-content-center px-4">
                  {grupo.map((producto) => (
                    <VinylCard 
                      key={producto.id} 
                      producto={producto} 
                      onAdd={handleAgregarAlCarrito} 
                    />
                  ))}
                </Row>
              </BootstrapCarousel.Item>
            ))}
          </RetroCarousel>
        ) : (
          <p className="text-muted">Próximamente nuevas joyas...</p>
        )}
        
      </Container>
    </section>
  );
}

export default FeaturedSection;

