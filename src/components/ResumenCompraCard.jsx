import { Card, Button } from "react-bootstrap";
import styles from "./CarritoItem.module.css";
import {
  cantidadTotal,
  totalPesos
} from "../utils/operacionesCarrito";

function ResumenCompraCard() {
    function calcularDescuento(total) {
        // Ejemplo: 10% de descuento
        return total * 0.1;
    }

    function calcularEnvio(total) {
        // Ejemplo: 5% de costo de envío
        return total * 0.05;
    }

    function calcularTotalMasEnvio(total) {
        return total + calcularEnvio(total);
    }

    function calcularTotal(total) {
        return total - calcularDescuento(total) + calcularEnvio(total);
    }

  return (
    <div>
        <Card className={`mb-3 ${styles.item}`}>
            <Card.Body className="text-center">
                <div>
                    <h4 className={styles.tituloResumenCompra}>Resumen de compra</h4>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <strong>Productos ({cantidadTotal()})</strong>
                        <span>${totalPesos()}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Descuento</strong>
                        <span className="text-success">-${calcularDescuento(totalPesos())}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Envio</strong>
                        <span className="text-muted">+${calcularEnvio(totalPesos())}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Total</strong>
                        <span>
                            <span className={`text-muted ${styles.tachado} fs-6`}>
                                ${calcularTotalMasEnvio(totalPesos())}
                            </span>{" "}
                            <span className="fw-bold fs-5">
                                ${calcularTotal(totalPesos())}
                            </span>
                        </span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ResumenCompraCard;