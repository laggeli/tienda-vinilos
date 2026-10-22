import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import PuntosRetiroList from "../metodoEnvioSection/PuntosRetiroList";
import TiposEnvioList from "../metodoEnvioSection/TiposEnvioList";
import stylesEnvio from "../../pages/checkout/Checkout.module.css";

function EnvioCard({ total, tipoEnvioCambia }) {
    const [metodoEnvio, setMetodoEnvio] = useState("envio");
    const mostrarGratis = total >= 100000;   

    const handleMetodoEnvio = (nuevoTipoEnvio) => {
        setMetodoEnvio(nuevoTipoEnvio);
        if (tipoEnvioCambia) tipoEnvioCambia(nuevoTipoEnvio); 
    };
    return (
        <Card className={`mb-3 ${stylesEnvio.itemEnvio}`}>
            <Card.Body className="d-flex flex-column">
                <div className={stylesEnvio.opciones}>
                    <button 
                        className={`${stylesEnvio.opcion} ${metodoEnvio === "envio" ? stylesEnvio.activo : ""}`} 
                        onClick={() => handleMetodoEnvio("envio")}
                    > <span>Envío</span> 
                    {mostrarGratis && <span className={stylesEnvio.gratis}>Gratis</span>}
                    </button>
                    <button 
                        className={`${stylesEnvio.opcion} ${metodoEnvio === "retiro" ? stylesEnvio.activo : ""}`}
                        onClick={() => handleMetodoEnvio("retiro")}
                    >
                     <span>Retiro</span> 
                     {mostrarGratis && <span className={stylesEnvio.gratis}>Gratis</span>}
                    </button>
                </div>
                {metodoEnvio === "retiro" && (<PuntosRetiroList />)}
                {metodoEnvio === "envio" && (<TiposEnvioList total={total}/>)}
            </Card.Body>
        </Card>
    )
}

export default EnvioCard