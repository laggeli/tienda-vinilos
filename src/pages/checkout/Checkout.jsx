import { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import EnvioCard from "../../components/checkoutSection/EnvioCard";
import MediosDePagoCard from "../../components/checkoutSection/MediosDePagoCard";
import FacturacionCard from "../../components/checkoutSection/FacturacionCard";
import ResumenCompraCard from "../../components/carritoItem/ResumenCompraCard";
import CompraExitosaModal from "../../components/resultadoPago/CompraExitosaModal";
import { cantidadTotal, totalPesos, obtenerCarrito, calcularDescuento } from "../../utils/operacionesCarrito";
import { CUPONES_VALIDOS } from "../../utils/cupones";
import styles from "./Checkout.module.css";
import stylesAcordeon from "../../components/acordeonCustom/AcordeonCustomStyles.module.css";

function Checkout() {
useEffect(() => { document.title = "Lado V | Finalizar compra"; }, []);
  const [showModal, setShowModal] = useState(false);
  const [metodoEntrega, setMetodoEntrega] = useState("envio");
  const [infoEnvio, setInfoEnvio] = useState({ metodo: null, precio: 0 });
  const [carrito, setCarrito] = useState(obtenerCarrito());
  
  //cupones
  const [codigoInput, setCodigoInput] = useState("");   
  const [cuponActivo, setCuponActivo] = useState(localStorage.getItem("cuponActivo") || null);

  const [mensajeCupon, setMensajeCupon] = useState("");
  
  //condicion de envio gratis
  const mostrarGratis = totalPesos() >= 100000; 

  //calculo importe envio  
  let costoEnvio = 0;
  if (metodoEntrega === "envio") {
    costoEnvio = mostrarGratis ? 0 : infoEnvio.precio;
  } else if (metodoEntrega === "retiro") {
    costoEnvio = 0;
  }

  // calculo importe descuento
  const valorDescuento = calcularDescuento(cuponActivo, carrito);

  const resumen = {
    productos: cantidadTotal(),
    total: totalPesos(),
    descuento: valorDescuento, 
    envio: costoEnvio,
    totalFinal: totalPesos() - valorDescuento + costoEnvio,
    mostrarGratis
  };

    const aplicarCupon = () => {
        const codigo = codigoInput.trim().toUpperCase();
        if (CUPONES_VALIDOS[codigo]) {
        const descuento = CUPONES_VALIDOS[codigo].calcularDescuento(carrito);
        if (descuento > 0) {
            setCuponActivo(codigo);
            localStorage.setItem("cuponActivo", codigo);
            setMensajeCupon(CUPONES_VALIDOS[codigo].mensaje);
        } else {
            setCuponActivo(null);
            localStorage.removeItem("cuponActivo");
            setMensajeCupon("Este cupón no aplica a los productos del carrito.");
        }
        } else {
        setCuponActivo(null);
        localStorage.removeItem("cuponActivo");
        setMensajeCupon("Código inválido o expirado.");
        }
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
                            <EnvioCard 
                                total={resumen.total} 
                                tipoEntregaCambia={setMetodoEntrega} tipoEnvioCambia={setInfoEnvio} />
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
                carrito={carrito} 
                botonTexto="Pagar" 
                onBotonClick={() => setShowModal(true)} 
                resumen={resumen} 
                metodoEntrega={metodoEntrega}
                codigoInput={codigoInput}
                setCodigoInput={setCodigoInput}
                aplicarCupon={aplicarCupon}
                mensajeCupon={mensajeCupon}
                cuponActivo={cuponActivo}
                />
            </Col>
        </Row>
        
        <CompraExitosaModal 
            show={showModal} 
            onClose={() => setShowModal(false)} 
            resumen={resumen} 
            metodoEntrega={metodoEntrega} 
        />
    </Container>
  )
}

export default Checkout