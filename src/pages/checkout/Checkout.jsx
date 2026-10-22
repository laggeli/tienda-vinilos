import { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import EnvioCard from "../../components/checkoutSection/EnvioCard";
import MediosDePagoCard from "../../components/checkoutSection/MediosDePagoCard";
import FacturacionCard from "../../components/checkoutSection/FacturacionCard";
import ResumenCompraCard from "../../components/carritoItem/ResumenCompraCard";
import CompraExitosaModal from "../../components/resultadoPago/CompraExitosaModal";
import { cantidadTotal, totalPesos, obtenerCarrito } from "../../utils/operacionesCarrito";
import styles from "./Checkout.module.css";
import stylesAcordeon from "../../components/acordeonCustom/AcordeonCustomStyles.module.css";

function Checkout() {
useEffect(() => { document.title = "Lado V | Finalizar compra"; }, []);
  const [showModal, setShowModal] = useState(false);
  const [metodoEnvio, setMetodoEnvio] = useState("envio");
  
  const [carrito, setCarrito] = useState(obtenerCarrito());
  
  const mostrarGratis = totalPesos() >= 100000;  

  const costoEnvio = totalPesos() * 0.05;
  const resumen = {
    productos: cantidadTotal(),
    total: totalPesos(),
    descuento: totalPesos() * 0.1, 
    envio: mostrarGratis ? 0 : costoEnvio,
    totalFinal: totalPesos() - (totalPesos() * 0.1) + (mostrarGratis ? 0 : costoEnvio),
    mostrarGratis
  };

  return (
    <Container>
        <h2 className={styles.titulo}>Finalizá tu compra</h2>
        <Row>
            <Col md={8}>
                <Accordion 
                alwaysOpen
                className={`${stylesAcordeon.accordionBase} ${stylesAcordeon.accordionCrema}`}
                >
                    <Accordion.Item eventKey="0" className={stylesAcordeon.item}>
                        <Accordion.Header className="custom-accordion-header">Forma de entrega</Accordion.Header>
                        <Accordion.Body className="custom-accordion-body">
                            <EnvioCard total={resumen.total} tipoEnvioCambia={setMetodoEnvio} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className={stylesAcordeon.item}>
                        <Accordion.Header className="custom-accordion-header">Medios de pago</Accordion.Header>
                        <Accordion.Body className="custom-accordion-body">
                            <MediosDePagoCard />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className={stylesAcordeon.item}>
                        <Accordion.Header className="custom-accordion-header">Facturación</Accordion.Header>
                        <Accordion.Body className="custom-accordion-body">
                            <FacturacionCard />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            
            {/* Totales */}
            <Col md={4}>
                <ResumenCompraCard 
                // 3. Le pasamos los productos a la tarjeta
                carrito={carrito} 
                botonTexto="Pagar" 
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