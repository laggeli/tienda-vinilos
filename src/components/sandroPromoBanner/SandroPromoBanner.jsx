import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from './SandroPromoBanner.module.css';

function SandroPromoBanner() {
  return (
    <section className={styles.promoSection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className={styles.textContainer}>
              <span className={styles.badgeRetro}>Especial Lado V</span>
              
              <h2 className={`display-4 fw-bold mb-3 ${styles.tituloPromo}`}>
                El Fuego <br/> Sigue Intacto.
              </h2>
              
              <p className="lead mb-4">
                Descubrí nuestra nueva sección exclusiva dedicada a Roberto Sánchez, El Gitano. 
                Toda su discografía analógica para que la magia no termine nunca y el tocadiscos siga girando.
              </p>
              
              <div className={styles.cuponBox}>
                <p className="mb-1 small text-uppercase fw-bold">Usá el código en tu carrito:</p>
                <span className={styles.codigoDescuento}>GITANO15</span>
                <p className="mb-0 mt-1 small">Para obtener un 15% OFF en toda su colección.</p>
              </div>

              <Button as={Link} to="/dame-fuego" className={styles.btnRetro}>
                Ver la colección Dame Fuego
              </Button>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className={styles.imageWrapper}>
              <img 
                src="/img/sandro-sandroDeAmerica.jpg" 
                alt="Sandro de América" 
                className={styles.imagenSandro}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SandroPromoBanner;