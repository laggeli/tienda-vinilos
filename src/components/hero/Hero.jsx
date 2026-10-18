import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Capa oscura para dar legibilidad al texto */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          
          <p className={styles.heroEyebrow}>
            Discos de vinilo
          </p>

          <h1 className={styles.heroTitle}>
            El sonido
            <br />
            que nunca
            <br />
            pasa de moda
          </h1>

          <p className={styles.heroDescription}>
            Clásicos, rarezas y nuevas joyas para quienes
            sienten la música. Entrá, explorá y llevate
            un pedazo de historia.
          </p>

          <Button
            as={Link}
            to="/productos"
            className={styles.heroCta}
          >
            Explorá la tienda <span aria-hidden="true" className="ms-2">→</span>
          </Button>
        </div>

        {/* Nota flotante a la derecha */}
        <p className={styles.heroNote}>
          Más música.
          <br />
          Menos pantallas.
        </p>
        
      </Container>
    </section>
  );
}

export default Hero;