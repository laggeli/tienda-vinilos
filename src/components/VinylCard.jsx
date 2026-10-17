import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router"; 
import styles from "./VinylCard.module.css";

function VinylCard({ producto, onAdd }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className={styles.columnaProducto}>
      <Card className={styles.tarjeta}>
        <Link
          to={`/producto/${producto.id}`}
          className={styles.enlaceDetalle}
          aria-label={`Ver detalle de ${producto.name}`}
        >
          <div className={styles.cajaImagenVinilo}>
            <img
              src={producto.image}
              alt={`Tapa de ${producto.name}`}
              className={`${styles.imagenVinilo} ${styles.imagenPrincipal}`}
            />
            {producto.imageVinyl && (
              <img
                src={producto.imageVinyl}
                alt={`Vinilo de ${producto.name}`}
                className={`${styles.imagenVinilo} ${styles.imagenAlternativa}`}
              />
            )}
            <span className={styles.verDetalle}> Ver disco </span>
          </div>

          <Card.Body className={styles.cuerpoTarjeta}>
            <span className={styles.tarjetaArtista}>{producto.artist}</span>
            <Card.Title className={styles.tarjetaNombre}>{producto.name}</Card.Title>
            <Card.Text className={styles.tarjetaPrecio}>
              <strong>${producto.price.toLocaleString("es-AR")}</strong>
            </Card.Text>
          </Card.Body>
        </Link>

        <div className={styles.containerBoton}>
          <Button
            className={styles.btnNaranja}
            disabled={producto.stock <= 0}
            onClick={() => onAdd(producto)}
          >
            {producto.stock > 0 ? "Agregar  +" : "Sin stock"}
          </Button>
        </div>
      </Card>
    </Col>
  );
}

export default VinylCard