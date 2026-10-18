import { NavLink } from "react-router";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <div className={styles.marca}>
          <div className={styles.disco} aria-hidden="true"> <span /> </div>

          <div>
            <h2 className={styles.logo}>Lado V</h2>
            //<small className={styles.subtitulo}>VINILOS CON HISTORIA</small> decidir si dejarlo o no
          </div>
        </div>

        <p className={styles.descripcion}>
          Discos que vuelven a sonar. Encontrá clásicos, redescubrí
          tus favoritos y sumá nuevas historias a tu colección.
        </p>

        <div className={styles.columnas}>
          <div>
            <h3>Explorá</h3>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Catálogo de vinilos</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </div>

          <div>
            <h3>Ayuda</h3>
            <NavLink to="/contacto">Consultas</NavLink>
            <NavLink to="/arrepentimiento">Botón de arrepentimiento</NavLink>
          </div>
        </div>
      </div>

      <div className={styles.pie}>
        <p> © {new Date().getFullYear()} Lado V. Todos los derechos reservados </p>
        <small> Proyecto académico de UNAHUR </small>
      </div>
    </footer>
  );
}

export default Footer;