import { Container, Row, Col } from 'react-bootstrap';
import VinylCard from '../../components/vinylCard/VinylCard';
import { productos } from '../../data/products'; 
import styles from './DameFuego.module.css';

function DameFuego() {
  const discosSandro = productos.filter(producto => producto.dameFuego === true);

  return (
    <div className={styles.dameFuegoPage}>
      <section className={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-light mb-5 mb-lg-0">
              <h1 className={`display-2 mb-3 ${styles.tituloSandro}`}>
                Dame Fuego
              </h1>
              <div className={styles.tributoBox}>
                <h2 className="h4 text-uppercase fw-bold mb-3">La Inspiración Detrás de Lado V</h2>
                <p className="lead">
                  Esta sección se la dedicamos al artista que inspiró la creación de esta disquería así cómo los suspiros 
                  de nuestras madres y abuelas, cuyo legado sigue aquí presente aun después de mas de 15 años desde que se
                  <em> fue a la eternidad</em>. Con este humilde homenaje queremos seguir recordándolo como a <em>la misma felicidad</em>; 
                  pues sigue <em>presente en el aire, entre las piedras y en el palmar</em>; el legado de <strong>Roberto Sánchez, El Gitano.</strong>
                </p>
                <p>
                  Porque el sonido analógico y el crepitar de la aguja son los únicos capaces de 
                  transmitir el verdadero temblor de su voz. 
                </p>
                <span className={styles.firma}>— Más música. Más Sandro.</span>
              </div>
            </Col>
            
            <Col lg={6} className="text-center">
              <div className={styles.imagenContainer}>
                <img 
                  src="/img/sandro-espectacular-df.jpg" 
                  alt="Sandro Espectacular" 
                  className={styles.imagenGitano}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.catalogoSection}>
        <Container>
          <div className={styles.separadorRetro}>
            <h3 className="text-center text-light mb-0">La Colección</h3>
          </div>
          
          <div className="mt-5">
            <Row className={styles.grilla}>
              {discosSandro.length > 0 ? (
                discosSandro.map((disco) => (
                  <VinylCard 
                    key={disco.id} 
                    producto={disco} 
                    //onAdd={agregarAlCarrito} 
                  />
                ))
              ) : (
                <p className="text-center text-light">No hay discos disponibles por el momento.</p>
              )}
            </Row>
          </div>

        </Container>
      </section>
    </div>
  );
}

export default DameFuego;