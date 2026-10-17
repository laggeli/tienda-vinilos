import { Container, Row, Carousel as BootstrapCarousel } from 'react-bootstrap';
import { Link } from 'react-router';
import VinylCard from './VinylCard'; 
import RetroCarousel from './RetroCarousel'; 
import { productos } from '../data/products'; 
import styles from './FeaturedSection.module.css';

function FeaturedSection() {
  const discosDestacados = productos.filter(producto => producto.destacado);

  const agruparDiscos = (array, tamañoGrupo) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamañoGrupo) {
      grupos.push(array.slice(i, i + tamañoGrupo));
    }
    return grupos;
  };

  const gruposDeDiscos = agruparDiscos(discosDestacados, 4);

  const handleAgregarAlCarrito = (producto) => {
    alert(`¡${producto.name} agregado a tu batea!`);
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

