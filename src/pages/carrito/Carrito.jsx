import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarritoItem from "../../components/carritoItem/CarritoItem";
import ResumenCompraCard from "../../components/carritoItem/ResumenCompraCard";
import {
  obtenerCarrito,
  incrementarCantidad,
  restarCantidad,
  eliminarProducto
} from "../../utils/operacionesCarrito";
import styles from "./Carrito.module.css"
import itemStyles from "../../components/carritoItem/CarritoItem.module.css";

function Carrito({onActualizarCarrito}) {
  // Se obtiene el carrito inicial desde el módulo de operaciones
  const [carrito, setCarrito] = useState(obtenerCarrito());

  // Refrescar carrito
  const refrescarCarrito = () => {
    setCarrito([...obtenerCarrito()]);
    if (onActualizarCarrito) { onActualizarCarrito(); }
  };

  // Operaciones del carrito se importan desde el módulo de operaciones 
  function aumentar(id) {
    incrementarCantidad(id);
    refrescarCarrito();
  }

  function disminuir(id) {
    restarCantidad(id);
    refrescarCarrito();
  }

  function eliminar(id) {
    eliminarProducto(id);
    refrescarCarrito();
  }

  return (
    <Container className={`py-4 ${carrito.length === 0 ? styles.contenedorVacio : styles.contenedorCarrito}`}>
      {carrito.length === 0 ? (
        <div className={styles.carritoVacioBox}>
          <img src="/img/vinilo.png" alt="Vinilo girando" className={styles.viniloVacioGif} />
          <h2>Tu carrito</h2>
          <p>No hay productos en el carrito.</p>
        </div>
        ) : (
          <>
            <h2 className={styles.carritoLleno}>Tu carrito</h2>
            <Row>
              <Col md={8}>
                {carrito.map(producto => (
                  <CarritoItem
                    key={producto.id}
                    producto={producto}
                    aumentar={aumentar}
                    disminuir={disminuir}
                    eliminar={eliminar}
                  />
                ))}
              </Col>
              {/* Totales */}
              <Col md={4}>
                <ResumenCompraCard />
              </Col>
            </Row>
          </>
          
      )}
    </Container>
  );
}
export default Carrito;