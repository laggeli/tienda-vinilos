import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";

function AppNavBar() {
  return (
    <BootstrapNavbar
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: "#201C18",
        padding: "18px 0"
      }}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/"> Lado V </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="menu-principal" />

        <BootstrapNavbar.Collapse id="menu-principal">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link as={NavLink} to="/"> Inicio </Nav.Link>
            <Nav.Link as={NavLink} to="/productos"> Vinilos </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto"> Contacto </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/carrito"
              aria-label="Ir al carrito"
              title="Carrito"
              className="d-flex align-items-center"
            >
              <IoCartOutline size={24} />
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default AppNavBar;
