import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import PuntosRetiroList from "../../components/listadoFormasEnvio/PuntosRetiroList";
import TiposEnvioList from "../../components/listadoFormasEnvio/TiposEnvioList";
import stylesEnvio from "../../components/checkout/Checkout.module.css";

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
                    <button className={`${stylesEnvio.opcion} 
                        ${metodoEnvio === "envio" ? stylesEnvio.activo : ""}`
                        } 
                        onClick={() => handleMetodoEnvio("envio")}
                    > Envío {mostrarGratis && <span className={stylesEnvio.gratis}>Gratis</span>}
                    </button>
                    <button className={`${stylesEnvio.opcion} 
                            ${metodoEnvio === "retiro" ? stylesEnvio.activo : ""}`
                            }
                        onClick={() => handleMetodoEnvio("retiro")}
                    > Retiro {mostrarGratis && <span className={stylesEnvio.gratis}>Gratis</span>}
                    </button>
                </div>
                {metodoEnvio === "retiro" && (<PuntosRetiroList />)}
                {metodoEnvio === "envio" && (<TiposEnvioList />)}
            </Card.Body>
        </Card>
    )
}

export default EnvioCard