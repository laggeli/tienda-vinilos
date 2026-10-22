import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Col, Button } from "react-bootstrap";
import styles from "./NotFound.module.css";

function NotFound() {
  useEffect(() => { document.title = "Lado V | No encontrado"; }, []);

  const navegar = useNavigate();
  const irAInicio = () => { navegar('/'); };

  return ( 
  <div className={styles.container}>
    <Col xs={12} className={styles.columna}>
      <div className={styles.noEncontrado}>
        <img src="/img/vinilo.png" alt="Vinilo buscando" className={styles.viniloVacioGif} />
        <h4>Página no encontrada</h4>
        <Button className={styles.btnNaranja} onClick={irAInicio}> Volver al inicio </Button>
      </div>
    </Col>
  </div> )
}

export default NotFound