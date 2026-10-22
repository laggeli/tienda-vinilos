import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import PuntosRetiroList from "../metodoEnvioSection/PuntosRetiroList";
import TiposEnvioList from "../metodoEnvioSection/TiposEnvioList";
import stylesEnvio from "../../pages/checkout/Checkout.module.css";

function EnvioCard({ total, tipoEntregaCambia, tipoEnvioCambia }) {
    const [metodoEntrega, setMetodoEntrega] = useState("envio");
    const [metodoEnvio, setMetodoEnvio] = useState("");
    const mostrarGratis = total >= 100000;   

    const handleMetodoEntrega = (nuevoTipoEntrega) => {
        setMetodoEntrega(nuevoTipoEntrega);
        if (tipoEntregaCambia) tipoEntregaCambia(nuevoTipoEntrega); 
    };
    const handleMetodoEnvio = (nuevoTipoEnvio) => {
        setMetodoEnvio(nuevoTipoEnvio);
        if (tipoEnvioCambia) tipoEntregaCambia(nuevoTipoEnvio); 
    };

    return (
        <Card className={`mb-3 ${stylesEnvio.itemEnvio}`}>
            <Card.Body className="d-flex flex-column">
                <div className={stylesEnvio.opciones}>
                    <button 
                        className={`${stylesEnvio.opcion} ${metodoEntrega === "envio" ? stylesEnvio.activo : ""}`} 
                        onClick={() => handleMetodoEntrega("envio")}
                    > <span>Envío</span> 
                    {mostrarGratis && <span className={stylesEnvio.gratis}>Gratis</span>}
                    </button>
                    <button 
                        className={`${stylesEnvio.opcion} ${metodoEntrega === "retiro" ? stylesEnvio.activo : ""}`}
                        onClick={() => handleMetodoEntrega("retiro")}
                    >
                     <span>Retiro</span> 
                     {mostrarGratis && <span className={stylesEnvio.gratis}>Gratis</span>}
                    </button>
                </div>
                {metodoEntrega === "retiro" && (<PuntosRetiroList />)}
                {metodoEntrega === "envio" && 
                (<TiposEnvioList 
                    total={total} 
                    tipoEnvioCambia={tipoEnvioCambia}
                />)
                }
            </Card.Body>
        </Card>
    )
}

export default EnvioCard