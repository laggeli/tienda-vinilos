import { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import EnvioCard from "../../components/checkoutSection/EnvioCard";
import MediosDePagoCard from "../../components/checkoutSection/MediosDePagoCard";
import FacturacionCard from "../../components/checkoutSection/FacturacionCard";
import ResumenCompraCard from "../../components/carritoItem/ResumenCompraCard";
import CompraExitosaModal from "../../components/resultadoPago/CompraExitosaModal";
import { cantidadTotal, totalPesos } from "../../utils/operacionesCarrito";
import styles from "./Checkout.module.css";

function Checkout() {
  const [showModal, setShowModal] = useState(false);
  const [metodoEnvio, setMetodoEnvio] = useState("envio");
  const mostrarGratis = totalPesos() >= 100000;  

  const resumen = {
    productos: cantidadTotal(),
    total: totalPesos(),
    descuento: totalPesos() * 0.1,
    envio: mostrarGratis ? 0 : totalPesos() * 0.05,
    totalFinal: totalPesos() - (totalPesos() * 0.1) + (mostrarGratis ? 0 : totalPesos() * 0.05),
    mostrarGratis
  };

  return (
    <Container>
        <h2 className={styles.titulo}>Finalizá tu compra</h2>
        <Row>
            <Col md={8}>
                <Accordion 
                alwaysOpen
                className={`${styles.accordionBase} ${styles.accordionVerde}`}
                >

                    <Accordion.Item eventKey="0" className={styles.item}>
                        <Accordion.Header>Forma de entrega</Accordion.Header>
                        <Accordion.Body>
                            <EnvioCard total={resumen.total} tipoEnvioCambia={setMetodoEnvio} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" >
                        <Accordion.Header>Medios de pago</Accordion.Header>
                        <Accordion.Body>
                            <MediosDePagoCard />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" >
                        <Accordion.Header>Facturación</Accordion.Header>
                        <Accordion.Body>
                            <FacturacionCard />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            {/* Totales */}
            <Col md={4}>
                <ResumenCompraCard 
                botonTexto="Pagar" 
                // onBotonClick={() => {
                //     alert("Procesando pago...");
                // }}
                onBotonClick={() => setShowModal(true)} 
                />

            </Col>
        </Row>
        <CompraExitosaModal 
            show={showModal} 
            onClose={() => setShowModal(false)} 
            resumen={resumen} 
            metodoEnvio={metodoEnvio} 
        />
    </Container>
  )
}

export default Checkout