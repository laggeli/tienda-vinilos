import { Navbar as BootstrapNavbar, Nav, Container, } from "react-bootstrap";
import { NavLink, Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import styles from "./AppNavBar.module.css";

function AppNavBar() {
  return (
    <BootstrapNavbar expand="lg" className={styles.navbar} >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className={styles.logo}>
          <span className={styles.logoDisco} aria-hidden="true">
            <span />
          </span>

          <span className={styles.logoTexto}>
            Lado V
            <small>VINILOS CON HISTORIA</small>
          </span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="menu-principal"
          className={styles.menuToggle}
        />

        <BootstrapNavbar.Collapse id="menu-principal">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end className={styles.navLink}> Inicio </Nav.Link>
            <Nav.Link as={NavLink} to="/productos" className={styles.navLink} > Vinilos </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className={styles.navLink} > Contacto </Nav.Link>

            <div className={styles.separador} />

            <Nav.Link as={NavLink} to="/carrito"
              title="Carrito" className={styles.carrito}>
              <IoCartOutline size={25} />
              <span>Carrito</span>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default AppNavBar;