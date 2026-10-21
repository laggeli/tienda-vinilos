import { Card } from "react-bootstrap";
import { Link } from "react-router"; 
import { Button } from "react-bootstrap";
import stylesResumen from "./ResumenCompraCard.module.css";
import {
  cantidadTotal,
  totalPesos
} from "../../utils/operacionesCarrito";

function ResumenCompraCard({ botonTexto = "Comprar", onBotonClick, botonLink = "/checkout" }) {
    const total = totalPesos();
    const mostrarGratis = total >= 100000;

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
                        <span>${total}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Descuento</strong>
                        <span className="text-success">-${calcularDescuento(total)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Envío</strong>
                        <span className="text-muted">
                            {mostrarGratis ? "Gratis" : `+$${calcularEnvio(total)}`}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Total</strong>
                        <span>
                            <span className={`text-muted ${stylesResumen.tachado} fs-6`}>
                                ${calcularTotalMasEnvio(total)}
                            </span>{" "}
                            <span className="fw-bold fs-5">
                                ${calcularTotal(total)}
                            </span>
                        </span>
                    </div>
                    <div>
                        {onBotonClick ? (
                            <Button className={stylesResumen.botonComprar} onClick={onBotonClick}>
                            {botonTexto}
                            </Button>
                        ) : (
                        <Link to={botonLink}>
                        <Button className={stylesResumen.botonComprar}>
                            {botonTexto}
                        </Button>
                        </Link>
                        )}
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ResumenCompraCard;