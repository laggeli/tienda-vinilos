import { useState } from "react";
import { Container } from "react-bootstrap";
import CarritoItem from "../components/CarritoItem";

function Carrito() {
  const [carrito, setCarrito] = useState([
    // ejemplo prueba, despues hay que llenarlo desde Productos.jsx
    { id: 1, name: "Vinilo A", artist: "Artista X", price: 2000, cantidad: 1 },
    { id: 2, name: "Vinilo B", artist: "Artista Y", price: 2500, cantidad: 2 }
  ]);

  function sumarProducto(id) {
  setCarrito(carritoActual =>
    carritoActual.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    )
  );
}

function restarProducto(id) {
  setCarrito(carritoActual =>
    carritoActual.map(item =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    )
  );
}

function eliminarProducto(id) {
  setCarrito(carritoActual => carritoActual.filter(item => item.id !== id));
}

  return (
    <Container className="py-4">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        carrito.map(producto => (
          <CarritoItem
            key={producto.id}
            producto={producto}
            sumar={sumarProducto}
            restar={restarProducto}
            eliminar={eliminarProducto}
          />
        ))
      )}
    </Container>
  );
}

export default Carrito;
