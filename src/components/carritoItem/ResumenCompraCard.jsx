// import { useState, useEffect } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router"; 
import stylesResumen from "./ResumenCompraCard.module.css";
// import { cantidadTotal, totalPesos, obtenerEnvio } from "../../utils/operacionesCarrito";
// import { CUPONES_VALIDOS } from "../../utils/cupones";

function ResumenCompraCard({ 
    carrito = [], 
    botonTexto = "Comprar", 
    onBotonClick, 
    botonLink = "/checkout", 
    resumen = {}, 
    metodoEntrega = "envio",
    codigoInput = "",
    setCodigoInput = () => {},
    aplicarCupon = () => {},
    mensajeCupon = "",
    cuponActivo = null
})

{ 
  return (
    <div>
        <Card className={`mb-3 ${stylesResumen.item}`}>
            <Card.Body className="text-center">
                <div className={stylesResumen.textoResumenCompra}>
                    <h4 className={stylesResumen.tituloResumenCompra}>
                        Resumen de compra</h4>
                    <hr />
                    {/* Cantidad de productos */}
                    <div className="d-flex justify-content-between mb-2">
                        <strong>Productos ({resumen.productos})</strong>
                        <span>${resumen.total}</span>
                    </div>

                    {/* Código de descuento */}
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
                        
                        {mensajeCupon && codigoInput !== "" && (
                            <div className={`small mt-2 fw-bold ${cuponActivo ? "text-success" : "text-danger"}`}>
                                {mensajeCupon}
                            </div>
                        )}

                        {mensajeCupon && cuponActivo && resumen.descuento === 0 && (
                            <div className="small mt-1 text-warning fw-bold">
                                * Este cupón no aplica a los productos que tenés en el carrito.
                            </div>
                        )}
                    </div>

                    {/* Importe de descuento */}

                    <div className="d-flex justify-content-between mb-2">
                    <strong>Descuento</strong>
                    <span className={resumen.descuento > 0 ? "text-success" : "text-muted"}>
                        -${resumen.descuento || 0}
                    </span>
                    </div>
                    
                    {/* Importe de envio según forma de entrega*/}
                    <div className="d-flex justify-content-between mb-3">
                        <strong>{metodoEntrega === "envio" ? "Envío" : "Retiro"}</strong>
                        <span className="text-muted">
                        {metodoEntrega === "envio"
                            ? resumen.mostrarGratis
                            ? "Gratis"
                            : `+$${resumen.envio}`
                            : "Gratis"}
                        </span>
                    </div>
                    <hr />

                    {/* Importe Total */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <strong className="fs-5">Total</strong>
                        <div className="text-end">
                            {resumen.descuento > 0 && (
                                <span className={`text-muted text-decoration-line-through fs-6 me-2`}>
                                    ${resumen.total + resumen.envio}
                                </span>
                            )}
                            <span className="fw-bold fs-4" style={{ color: "#c71f25" }}>
                                ${resumen.totalFinal}
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