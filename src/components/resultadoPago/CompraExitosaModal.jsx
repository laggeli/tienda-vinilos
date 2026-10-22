import { Modal, Button } from "react-bootstrap";
import styles from "../../components/resultadoPago/CompraExitosaModal.module.css";

function CompraExitosaModal({ show, onClose, resumen, metodoEntrega }) {
  return (
    <Modal show={show} onHide={onClose} centered className="modalCompraExitosa">
      <Modal.Header closeButton className={styles.titulo}>
        <Modal.Title>Compra exitosa!</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.texto}>
        <p><strong>Productos:</strong> {resumen.productos} - ${resumen.total}</p>
        <p><strong>Descuento:</strong><span className="text-success"> -${resumen.descuento}</span></p>
        <p><strong>Envío:</strong> {resumen.mostrarGratis ? "Gratis" : `+$${resumen.envio}`}</p>
        <p><strong>Total:</strong> ${resumen.totalFinal}</p>
        <hr className={styles.hr}/>
        <p><strong>Forma de entrega:</strong> {metodoEntrega.toUpperCase()}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} className={styles.boton}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CompraExitosaModal;
