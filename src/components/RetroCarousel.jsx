import { Carousel } from 'react-bootstrap';
import styles from './RetroCarousel.module.css';

export default function RetroCarousel({ children }) {
  const IconoAnterior = <span className={`${styles.botonRetro} ${styles.previo}`} />;
  const IconoSiguiente = <span className={`${styles.botonRetro} ${styles.siguiente}`} />;

  return (
    <Carousel
      className={styles.contenedorCarrusel}
      prevIcon={IconoAnterior}
      nextIcon={IconoSiguiente}
      indicators={true}
      interval={6000}
      pause="hover"
    >
      {children}
    </Carousel>
  );
}