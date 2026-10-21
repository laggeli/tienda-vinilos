import { useState, useEffect } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router"; 
import stylesResumen from "./ResumenCompraCard.module.css";
import { cantidadTotal, totalPesos, obtenerEnvio } from "../../utils/operacionesCarrito";
import { CUPONES_VALIDOS } from "../../utils/cupones";

function ResumenCompraCard({ carrito = [], botonTexto = "Comprar", onBotonClick, botonLink = "/checkout" }) {


    const cuponGuardado = localStorage.getItem("cuponActivo") || null;
    const [codigoInput, setCodigoInput] = useState(cuponGuardado || "");
    const [cuponActivo, setCuponActivo] = useState(() => localStorage.getItem("cuponActivo") || null); 
    const [mensajeCupon, setMensajeCupon] = useState("");

    const total = totalPesos();
    const mostrarGratis = total >= 100000;
    
    const costoEnvioBase = obtenerEnvio();
    const costoEnvio = mostrarGratis ? 0 : costoEnvioBase;

    let montoDescuento = 0;
    if (cuponActivo && CUPONES_VALIDOS[cuponActivo]) {
        montoDescuento = CUPONES_VALIDOS[cuponActivo].calcularDescuento(carrito);
    }

    const totalFinal = total - montoDescuento + costoEnvio;
    const totalSinDescuento = total + costoEnvio;

    const aplicarCupon = () => {
        const codigo = codigoInput.trim().toUpperCase();
        
        if (CUPONES_VALIDOS[codigo]) {
            setCuponActivo(codigo);
            localStorage.setItem("cuponActivo", codigo);
            setMensajeCupon(CUPONES_VALIDOS[codigo].mensaje);
        } else {
            setCuponActivo(null);
            localStorage.removeItem("cuponActivo");
            setMensajeCupon("Código inválido o expirado.");
        }
    };

    useEffect(() => {
        if (carrito.length === 0) {
            setCuponActivo(null);
            localStorage.removeItem("cuponActivo");
            setCodigoInput("");
            setMensajeCupon("");
        }
    }, [carrito.length]);

  return (
    <div>
        <Card className={`mb-3 ${stylesResumen.item}`}>
            <Card.Body className="text-center">
                <div className={stylesResumen.textoResumenCompra}>
                    <h4 className={stylesResumen.tituloResumenCompra}>Resumen de compra</h4>
                    <hr />
                    
                    <div className="d-flex justify-content-between mb-2">
                        <strong>Productos ({cantidadTotal()})</strong>
                        <span>${total}</span>
                    </div>

                    <div className="text-start my-3 p-3 border rounded" style={{ backgroundColor: "#fdf8ef", borderColor: "#dfcfb3" }}>
                        <Form.Label className="small fw-bold mb-1 text-uppercase" style={{ letterSpacing: "1px", color: "#29251f" }}>
                            Código de descuento
                        </Form.Label>
                        <InputGroup size="sm">
                            <Form.Control 
                                placeholder="Ingresá tu código"
                                value={codigoInput}
                                onChange={(e) => setCodigoInput(e.target.value.toUpperCase())}
                            />
                            <Button variant="dark" onClick={aplicarCupon} style={{ backgroundColor: "#29251f" }}>
                                Aplicar
                            </Button>
                        </InputGroup>
                        
                        {mensajeCupon && (
                            <div className={`small mt-2 fw-bold ${cuponActivo ? "text-success" : "text-danger"}`}>
                                {mensajeCupon}
                            </div>
                        )}

                        {cuponActivo && montoDescuento === 0 && (
                            <div className="small mt-1 text-warning fw-bold">
                                * Este cupón no aplica a los productos que tenés en el carrito.
                            </div>
                        )}
                    </div>
                    
                    {montoDescuento > 0 && (
                        <div className="d-flex justify-content-between mb-2">
                            <strong>Descuento cupón</strong>
                            <span className="text-success">-${montoDescuento}</span>
                        </div>
                    )}
                    
                    <div className="d-flex justify-content-between mb-3">
                        <strong>Envío</strong>
                        <span className="text-muted">
                            {mostrarGratis ? "Gratis" : `+$${costoEnvio}`}
                        </span>
                    </div>
                    
                    <hr />
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <strong className="fs-5">Total</strong>
                        <div className="text-end">
                            {montoDescuento > 0 && (
                                <span className={`text-muted text-decoration-line-through fs-6 me-2`}>
                                    ${totalSinDescuento}
                                </span>
                            )}
                            <span className="fw-bold fs-4" style={{ color: "#c71f25" }}>
                                ${totalFinal}
                            </span>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        {onBotonClick ? (
                            <Button 
                                className={`${stylesResumen.botonComprar} w-100`} 
                                onClick={onBotonClick}
                            >
                                {botonTexto}
                            </Button>
                        ) : (
                            <Button 
                                as={Link} 
                                to={botonLink} 
                                className={`${stylesResumen.botonComprar} w-100`}
                            >
                                {botonTexto}
                            </Button>
                        )}
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ResumenCompraCard;