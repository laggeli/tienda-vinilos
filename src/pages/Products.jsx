import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { productos } from "../data/products.js";

function Products() {
  return (
    <Container>
      <h1>Nuestros vinilos</h1>
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img src={producto.image} alt={producto.name} style={{ height: "220px" }} />

              <Card.Body>
                <Card.Title> {producto.name} </Card.Title>
                <Card.Subtitle> {producto.artist} </Card.Subtitle>
                <Card.Text> {producto.description} </Card.Text>
                <Card.Text> <strong>Precio:</strong> ${producto.price} </Card.Text>
                <Card.Text> <strong>Categoría:</strong> {producto.category} </Card.Text>
                {producto.stock > 0 ? (
                  <Button> Agregar al carrito </Button>
                ) : (
                  <Button disabled> Sin stock </Button> // el disabled vi q es para q no se pueda apretar 
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;