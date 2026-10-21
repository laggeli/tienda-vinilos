import { Card, Accordion } from "react-bootstrap";
import PagoTarjeta from "../formaPagoOption/PagoTarjeta";
import PagoEfectivo from "../formaPagoOption/PagoEfectivo";
import styles from "../../pages/checkout/Checkout.module.css";
import stylesAcordeon from "../../components/acordeonCustom/AcordeonCustomStyles.module.css";

function MediosDePagoCard() {

  return (
    <Card className={styles.itemPago}>
      <Card.Body >
        <Accordion 
          flush
          className={`${stylesAcordeon.accordionBase} ${stylesAcordeon.accordionVerde}`}
        >
          <Accordion.Item eventKey="0" className={stylesAcordeon.item}>
            <Accordion.Header className="custom-accordion-header">Tarjetas</Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              <PagoTarjeta />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={stylesAcordeon.item}>
            <Accordion.Header className="custom-accordion-header">Efectivo</Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              <PagoEfectivo />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>        
      </Card.Body>
    </Card>
  )
}

export default MediosDePagoCard