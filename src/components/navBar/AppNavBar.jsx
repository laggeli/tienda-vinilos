import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router";
import CarritoIcono from "../carritoIcono/CarritoIcono";
import styles from "./AppNavBar.module.css";

function AppNavBar({ cantidadProductosEnCarrito }) {
  return (
    <BootstrapNavbar expand="lg" className={styles.navbar}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className={styles.logo} >
          <span className={styles.logoDisco} aria-hidden="true"> <span /> </span>

          <span className={styles.logoTexto}>
            Lado V
            <small>VINILOS CON HISTORIA</small>
          </span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="menu-principal" className={styles.menuToggle} />

        <BootstrapNavbar.Collapse id="menu-principal">
          <Nav className={styles.navItems}>

            <Nav.Link as={NavLink} to="/" end className={styles.navLink}>
              Inicio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/productos" className={styles.navLink}>
              Vinilos
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacto" className={styles.navLink} >
              Contacto
            </Nav.Link>

            <Nav.Link as={NavLink} to="/preguntasFrecuentes" className={styles.navLink}>
              Preguntas frecuentes
            </Nav.Link>

          </Nav>

          <Nav className={styles.navCarrito}>
            <Nav.Link as={NavLink} to="/carrito" title="Carrito"
              aria-label={`Carrito: ${cantidadProductosEnCarrito} productos`}
              className={styles.carrito}
            >
              <CarritoIcono total={cantidadProductosEnCarrito} />
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default AppNavBar;