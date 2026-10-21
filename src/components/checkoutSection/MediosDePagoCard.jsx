import { Card, Accordion } from "react-bootstrap";
import PagoTarjeta from "../formaPago/PagoTarjeta";
import PagoEfectivo from "../formaPago/PagoEfectivo";
import styles from "../../pages/checkout/Checkout.module.css";

function MediosDePagoCard() {

  return (
    <Card >
      <Card.Body className={styles.item}>
        <Accordion 
          flush
        >
          <Accordion.Item eventKey="0" >
            <Accordion.Header>Tarjetas</Accordion.Header>
            <Accordion.Body>
              <PagoTarjeta />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Efectivo</Accordion.Header>
            <Accordion.Body>
              <PagoEfectivo />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>        
      </Card.Body>
    </Card>
  )
}

export default MediosDePagoCard