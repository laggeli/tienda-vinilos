import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from './CommunitySection.module.css';

export default function CommunitySection() {
  return (
    <section className={styles.communitySection}>
      <Container>
        <Row className="align-items-center">
    
          <Col lg={5} className="mb-4 mb-lg-0 p-0">
            <img 
              src="/img/comunidad.png"
              alt="Personas en la tienda de vinilos" 
              className={styles.mainImage}
            />
          </Col>
          
          <Col lg={7} className={styles.contentCol}>
            <div className={styles.contentWrapper}>
              <span className={styles.preTitle}>Nuestra comunidad</span>
              <h2 className={styles.title}>Más que discos,<br />una comunidad</h2>
              <p className={styles.description}>
                Amamos el vinilo, la buena música y las historias que se esconden en cada surco. Sumate a nuestro club y sé parte de esta cultura.
              </p>
              
              <ul className={styles.benefitsList}>
                <li><span className={styles.icon}>🎟️</span> Novedades y preventas exclusivas</li>
                <li><span className={styles.icon}>🤝</span> Eventos y encuentros</li>
                <li><span className={styles.icon}>📀</span> Contenido musical curado</li>
                <li><span className={styles.icon}>🏷️</span> Descuentos especiales para miembros</li>
              </ul>
              
              <Link to="/nosotros#comunidad-form" className={styles.ctaButton}>
                UNIRME AL CLUB DE VINILOS →
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}