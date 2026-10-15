import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router';

function Hero() {
  return (
    <section className="vinilo-hero">
      <div className="vinilo-hero__overlay" aria-hidden="true" />

      <Container className="vinilo-hero__container">
        <div className="vinilo-hero__content">
          <p className="vinilo-hero__eyebrow">
            Discos de vinilo
          </p>

          <h1>
            El sonido
            <br />
            que nunca
            <br />
            pasa de moda
          </h1>

          <p className="vinilo-hero__description">
            Clásicos, rarezas y nuevas joyas para quienes
            sienten la música. Entrá, explorá y llevate
            un pedazo de historia.
          </p>

          <Button
            as={Link}
            to="/productos"
            className="btn-vinilo vinilo-hero__cta"
          >
            Explorá la tienda <span aria-hidden="true">→</span>
          </Button>
        </div>

        <p className="vinilo-hero__note">
          Más música.
          <br />
          Menos pantallas.
        </p>
      </Container>
    </section>
  );
}

export default Hero
