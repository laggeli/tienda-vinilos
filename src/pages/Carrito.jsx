import { useState } from "react";
import { Container } from "react-bootstrap";
import CarritoItem from "../components/CarritoItem";
import {
  obtenerCarrito,
  incrementarCantidad,
  restarCantidad,
  eliminarProducto,
  cantidadTotal,
  totalPesos
} from "../utils/operacionesCarrito";

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
    <Container className="py-4">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {carrito.map(producto => (
            <CarritoItem
              key={producto.id}
              producto={producto}
              aumentar={aumentar}
              disminuir={disminuir}
              eliminar={eliminar}
            />
          ))}

          <hr />
          {/* Totales */}
          <p><strong>Total de ítems:</strong> {cantidadTotal()}</p>
          <p><strong>Total a pagar:</strong> ${totalPesos()}</p>
        </>
      )}
    </Container>
  );
}
export default Carrito;