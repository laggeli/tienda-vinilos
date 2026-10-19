import { Card } from "react-bootstrap";
import { Link } from "react-router"; 
import { Button } from "react-bootstrap";
import stylesResumen from "./ResumenCompraCard.module.css";
import {
  cantidadTotal,
  totalPesos
} from "../../utils/operacionesCarrito";

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
        <Card className={`mb-3 ${stylesResumen.item}`}>
            <Card.Body className="text-center">
                <div className={stylesResumen.textoResumenCompra}>
                    <h4 className={stylesResumen.tituloResumenCompra}>Resumen de compra</h4>
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
                        <strong>Envío</strong>
                        <span className="text-muted">+${calcularEnvio(totalPesos())}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Total</strong>
                        <span>
                            <span className={`text-muted ${stylesResumen.tachado} fs-6`}>
                                ${calcularTotalMasEnvio(totalPesos())}
                            </span>{" "}
                            <span className="fw-bold fs-5">
                                ${calcularTotal(totalPesos())}
                            </span>
                        </span>
                    </div>
                    <div>
                        <Link to="/checkout">
                        <Button className={stylesResumen.botonComprar}>
                            Comprar
                        </Button>
                        </Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ResumenCompraCard;