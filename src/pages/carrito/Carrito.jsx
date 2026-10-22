import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarritoItem from "../../components/carritoItem/CarritoItem";
import ResumenCompraCard from "../../components/carritoItem/ResumenCompraCard";
import {
  obtenerCarrito,
  incrementarCantidad,
  restarCantidad,
  eliminarProducto,
  cantidadTotal,
  totalPesos,
  calcularDescuento
} from "../../utils/operacionesCarrito";
import { CUPONES_VALIDOS } from "../../utils/cupones";
import styles from "./Carrito.module.css"


function Carrito({onActualizarCarrito}) {
  useEffect(() => { document.title = "Lado V | Carrito"; }, []);
  // Se obtiene el carrito inicial desde el módulo de operaciones
  const [carrito, setCarrito] = useState(obtenerCarrito());
  const [codigoInput, setCodigoInput] = useState("");   
  // const [cuponActivo, setCuponActivo] = useState(localStorage.getItem("cuponActivo") || null);
  const [cuponActivo, setCuponActivo] = useState(null);
  const [mensajeCupon, setMensajeCupon] = useState("");

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

  const valorDescuento = calcularDescuento(cuponActivo, carrito);

  // armo el resumen
  const resumen = {
    productos: cantidadTotal(),
    total: totalPesos(),
    descuento: valorDescuento, // acá podrías integrar cupones si querés
    envio: 0,
    totalFinal: totalPesos() - valorDescuento,
    mostrarGratis: false
  };

  const aplicarCupon = () => {
    const codigo = codigoInput.trim().toUpperCase();
    if (CUPONES_VALIDOS[codigo]) {
      const descuento = CUPONES_VALIDOS[codigo].calcularDescuento(carrito);
      if (descuento > 0) {
        setCuponActivo(codigo);
        localStorage.setItem("cuponActivo", codigo);
        setMensajeCupon(CUPONES_VALIDOS[codigo].mensaje);
      } else {
        setCuponActivo(null);
        localStorage.removeItem("cuponActivo");
        setMensajeCupon("Este cupón no aplica a los productos del carrito.");
      }
    } else {
      setCuponActivo(null);
      localStorage.removeItem("cuponActivo");
      setMensajeCupon("Código inválido o expirado.");
    }
  };

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
                <ResumenCompraCard 
                carrito={carrito}
                resumen={resumen}
                codigoInput={codigoInput}
                setCodigoInput={setCodigoInput}
                aplicarCupon={aplicarCupon}
                mensajeCupon={mensajeCupon}
                cuponActivo={cuponActivo}
                />
              </Col>
            </Row>
          </>
          
      )}
    </Container>
  );
}
export default Carrito;