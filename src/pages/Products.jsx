import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { Container, Row, Col, Card, Button, Form, Offcanvas } from "react-bootstrap";
import { productos } from "../data/products.js";
import styles from "./Products.module.css";
import { agregarProducto } from "../utils/operacionesCarrito";

function Products() {
  useEffect(() => { document.title = "Lado V | Catálogo"; }, []);
  
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [disponibilidad, setDisponibilidad] = useState("todos");
  const [orden, setOrden] = useState("nombre-az");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [mostrarOffcanvas, setMostrarOffcanvas] = useState(false);
  const [avisoCarrito, setAvisoCarrito] = useState("");

  const cerrarOffcanvas = () => setMostrarOffcanvas(false);
  const abrirOffcanvas = () => setMostrarOffcanvas(true);

  const categoriasUnicas = [...new Set(productos.map((p) => p.category))];

  const productosFiltrados = productos.filter((producto) => {
    const texto = busqueda.trim().toLowerCase();

    const coincideBusqueda =
      producto.name.toLowerCase().includes(texto) ||
      producto.artist.toLowerCase().includes(texto);

    const coincideCategoria =
      categoria === "todas" || producto.category === categoria;

    const coincideDisponibilidad =
      disponibilidad === "todos" ||
      (disponibilidad === "disponibles" && producto.stock > 0);

    const coincidePrecio =
      (precioMin === "" || producto.price >= Number(precioMin)) &&
      (precioMax === "" || producto.price <= Number(precioMax));

    return (
      coincideBusqueda &&
      coincideCategoria &&
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

  function agregarAlCarrito(producto) {
    if (producto.stock <= 0) return;
    console.log("Producto seleccionado:", producto);
    agregarProducto(producto); 
    setAvisoCarrito(`${producto.name} se agregó al carrito.`);
  }

  function limpiarFiltros() {
    setBusqueda("");
    setCategoria("todas");
    setDisponibilidad("todos");
    setOrden("nombre-az");
    setPrecioMin("");
    setPrecioMax("");
  }

  return (
    <Container className={styles.container}>
      <div className={styles.encabezado}>
        <div>
          <h1 className={styles.titulo}>Nuestros vinilos</h1>
          <p className={styles.subtitulo}>
            Encontrá el vinilo que estás buscando.
          </p>
        </div>
        <div className={styles.discoDecorativo} aria-hidden="true">
          <span>●</span>
        </div>
      </div>

      <Row className={`align-items-center mb-4 g-3 ${styles.barraHerramientas}`}>
        <Col xs={12} md={8}>
          <Form.Control
            type="search"
            placeholder="⌕  Buscar por nombre o artista..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className={styles.buscador}
            aria-label="Buscar vinilos por nombre o artista"
          />
        </Col>

        <Col xs={12} md={4} className="text-md-end">
          <Button
            variant="outline-dark"
            className={styles.btnBoton}
            onClick={abrirOffcanvas}
          >
            ⇅ Ordenar y filtrar
          </Button>
        </Col>
      </Row>

      <Offcanvas
        show={mostrarOffcanvas}
        onHide={cerrarOffcanvas}
        placement="end"
        style={{ backgroundColor: "#f4ead5", color: "#29251f" }} 
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.tituloPanel}>
            Ordenar y filtrar
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body style={{ backgroundColor: "#f4ead5" }}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className={styles.etiquetaFiltro}>
                Género musical
              </Form.Label>
              <Form.Select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className={styles.controlFiltro}
              >
                <option value="todas">Todos los géneros</option>
                {categoriasUnicas.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className={styles.etiquetaFiltro}>
                Ordenar por
              </Form.Label>
              <Form.Select
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
                className={styles.controlFiltro}
              >
                <option value="nombre-az">Nombre: A-Z</option>
                <option value="nombre-za">Nombre: Z-A</option>
                <option value="precio-menor">Precio: menor a mayor</option>
                <option value="precio-mayor">Precio: mayor a menor</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className={styles.etiquetaFiltro}> Disponibilidad </Form.Label>
              <Form.Select
                value={disponibilidad}
                onChange={(e) => setDisponibilidad(e.target.value)}
                className={styles.controlFiltro}
              >
                <option value="todos">Todos los productos</option>
                <option value="disponibles">En stock</option>
              </Form.Select>
            </Form.Group>

            <Row className="g-2 mb-4">
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className={styles.etiquetaFiltro}> Precio desde </Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="Mínimo"
                    value={precioMin}
                    onChange={(e) => setPrecioMin(e.target.value)}
                    className={styles.controlFiltro}
                  />
                </Form.Group>
              </Col>

              <Col xs={6}>
                <Form.Group>
                  <Form.Label className={styles.etiquetaFiltro}> Precio hasta </Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="Máximo"
                    value={precioMax}
                    onChange={(e) => setPrecioMax(e.target.value)}
                    className={styles.controlFiltro}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button type="button" className={styles.btnLimpiar} onClick={limpiarFiltros}>
              Limpiar filtros
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>

      {avisoCarrito && (
        <div className={styles.avisoCarrito} role="status">
          <span>✓ {avisoCarrito}</span>
          <button type="button" onClick={() => setAvisoCarrito("")}
            aria-label="Cerrar aviso" className={styles.cerrarAviso}>
            ×
          </button>
        </div>
      )}

      <Row className={styles.grilla}>
        {productosOrdenados.length > 0 ? (
          productosOrdenados.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4}
              lg={3} className={styles.columnaProducto}>
              <Card className={styles.tarjeta}>
                <Link
                  to={`/producto/${producto.id}`}
                  className={styles.enlaceDetalle}
                  aria-label={`Ver detalle de ${producto.name}`}>
                  <div className={styles.cajaImagenVinilo}>
                    <img src={producto.image} alt={`Tapa de ${producto.name}`}
                      className={`${styles.imagenVinilo} ${styles.imagenPrincipal}`}
                    />

                    {producto.imageVinyl && (
                      <img src={producto.imageVinyl} alt={`Vinilo de ${producto.name}`}
                        className={`${styles.imagenVinilo} ${styles.imagenAlternativa}`}
                      />
                    )}

                    <span className={styles.verDetalle}> Ver disco </span>
                  </div>

                  <Card.Body className={styles.cuerpoTarjeta}>
                    <span className={styles.tarjetaArtista}> {producto.artist} </span>

                    <Card.Title className={styles.tarjetaNombre}> {producto.name} </Card.Title>

                    <Card.Text className={styles.tarjetaPrecio}>
                      <strong> ${producto.price.toLocaleString("es-AR")} </strong>
                    </Card.Text>
                  </Card.Body>
                </Link>

                <div className={styles.containerBoton}>
                  <Button className={styles.btnNaranja}
                    disabled={producto.stock <= 0} onClick={() => agregarAlCarrito(producto)}
                  >
                    {producto.stock > 0 ? "Agregar  +" : "Sin stock"}
                  </Button>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className={styles.sinResultados}>
              <h4>No encontramos vinilos</h4>
              <p>Probá con otra búsqueda o modificá los filtros.</p>
              <Button
                className={styles.btnBoton}
                onClick={limpiarFiltros}
              >
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