import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { Container, Row, Col, Card, Button, Form, Offcanvas } from "react-bootstrap";
import { productos } from "../data/products.js";
import styles from "./Products.module.css";

function Products() {
  useEffect(() => { document.title = "Lado V | Catálogo"; }, []);

  const [busqueda, setBusqueda] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("todos");
  const [orden, setOrden] = useState("nombre-az");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [mostrarOffcanvas, setMostrarOffcanvas] = useState(false);

  const cerrarOffcanvas = () => setMostrarOffcanvas(false);
  const abrirOffcanvas = () => setMostrarOffcanvas(true);

  const productosFiltrados = productos.filter((producto) => {
    const texto = busqueda.trim().toLowerCase();

    const coincideBusqueda =
      producto.name.toLowerCase().includes(texto) ||
      producto.artist.toLowerCase().includes(texto);

    const coincideDisponibilidad =
      disponibilidad === "todos" ||
      (disponibilidad === "disponibles" && producto.stock > 0);

    const coincidePrecio =
      (precioMin === "" || producto.price >= Number(precioMin)) &&
      (precioMax === "" || producto.price <= Number(precioMax));

    return (
      coincideBusqueda &&
      coincideDisponibilidad &&
      coincidePrecio
    );
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    switch (orden) {
      case "precio-menor": return a.price - b.price;
      case "precio-mayor": return b.price - a.price;
      case "nombre-az": return a.name.localeCompare(b.name, "es");
      case "nombre-za": return b.name.localeCompare(a.name, "es");
      default: return 0;
    }
  });

  function limpiarFiltros() {
    setBusqueda("");
    setDisponibilidad("todos");
    setOrden("nombre-az");
    setPrecioMin("");
    setPrecioMax("");
  }

  // function agregarAlCarrito(producto) { console.log("Producto seleccionado:", producto); }

  return (
    <Container className={styles.container}>
      <div className="mb-4">
        <h1>Nuestros vinilos</h1>
        <p className="text-muted">Encontrá el vinilo que estás buscando.</p>
      </div>

      <Row className="align-items-center mb-4 g-3">
        <Col xs={12} md={8}>
          <Form.Control type="search" placeholder="Buscar por nombre o artista..." 
            value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
          className={styles.search}/>
        </Col>

        <Col xs={12} md={4} className="text-md-end">
          <Button variant="outline-dark" className={styles.btnBoton} onClick={abrirOffcanvas}> ⇅ Ordenar y filtrar </Button>
        </Col>
      </Row>

      <Offcanvas show={mostrarOffcanvas} onHide={cerrarOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Ordenar y filtrar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Ordenar por</Form.Label>
              <Form.Select value={orden} onChange={(e) => setOrden(e.target.value)}>
                <option value="nombre-az">Nombre: A-Z</option>
                <option value="nombre-za">Nombre: Z-A</option>
                <option value="precio-menor">Precio: menor a mayor</option>
                <option value="precio-mayor">Precio: mayor a menor</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Disponibilidad</Form.Label>
              <Form.Select value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)}>
                <option value="todos">Todos los productos</option>
                <option value="disponibles">Solo con stock</option>
              </Form.Select>
            </Form.Group>

            <Row className="g-2 mb-4">
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Precio desde</Form.Label>
                  <Form.Control type="number" min="0"
                    placeholder="Mínimo" value={precioMin}
                    onChange={(e) => setPrecioMin(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Precio hasta</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="Máximo"
                    value={precioMax}
                    onChange={(e) => setPrecioMax(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>

      <Row>
        {productosOrdenados.length > 0 ? (
          productosOrdenados.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className={styles.vinylCard}>
                <div className={styles.vinylImageBox}>
                  <Card.Img variant="top" src={producto.image} alt={`Tapa de ${producto.name}`}
                    style={{ height: "260px", objectFit: "contain" }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-0">
                  <span className={styles.artistCard}>{producto.artist} </span>
                  <Card.Title className={styles.nameCard}>{producto.name}</Card.Title>

                  <Card.Text className={styles.priceCard}> 
                    <strong>${producto.price.toLocaleString("es-AR")}</strong>
                  </Card.Text>

                  <div className={styles.containerButton}>
                    <Button as={Link} to={`/producto/${producto.id}`} 
                    variant="outline-dark" className={styles.btnBoton}>
                      Ver detalle
                    </Button>

                    <Button className={styles.btnNaranja}
                      disabled={producto.stock <= 0}
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      {producto.stock > 0 ? "Agregar 🛒" : "Sin stock"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="text-center py-5">
              <h4>No encontramos vinilos</h4>
              <p className="text-muted">Probá con otra búsqueda o modificá los filtros.</p>
              <Button variant="outline-dark" onClick={limpiarFiltros}>
                Ver todos los vinilos
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Products;