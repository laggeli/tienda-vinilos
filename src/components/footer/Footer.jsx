import { NavLink } from "react-router";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <div className={styles.columnas}>
          <div className={styles.columna}>
            <h3>Explorá</h3>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Catálogo</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </div>

          <div className={styles.columna}>
            <h3>Ayuda</h3>
            <NavLink to="/contacto">Consultanos</NavLink>
            <NavLink to="/preguntasFrecuentes">Preguntas frecuentes</NavLink>
            <NavLink to="/devoluciones">Devoluciones</NavLink>
          </div>
        </div>
      </div>

      <div className={styles.pie}>
        <div className={styles.legales}>
          <p>© 2026 Lado V. Todos los derechos reservados.</p>
          <small>Proyecto académico de UNAHUR</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;