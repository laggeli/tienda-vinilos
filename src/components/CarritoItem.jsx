// import React from 'react'

// function CarritoItem() {
//   return (
//     <div>CarritoItem</div>
//   )
// }

// export default CarritoItem
import { Card, Button } from "react-bootstrap";
import styles from "./CarritoItem.module.css";

function CarritoItem({ producto, sumar, restar, eliminar }) {
  return (
    <Card className={`mb-3 ${styles.item}`}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1">{producto.name}</h5>
          <p className="text-muted mb-0">
            {producto.artist} — ${producto.price}
          </p>
          <small>Cantidad: {producto.cantidad}</small>
        </div>
        <div className="d-flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => restar(producto.id)}>
            -
          </Button>
          <Button variant="secondary" size="sm" onClick={() => sumar(producto.id)}>
            +
          </Button>
          <Button variant="danger" size="sm" onClick={() => eliminar(producto.id)}>
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CarritoItem;
