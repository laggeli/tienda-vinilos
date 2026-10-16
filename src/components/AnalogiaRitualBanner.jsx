import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './AnalogiaRitualBanner.module.css';

function AnalogRitualBanner() {
  const pilares = [
    {
      numero: "01",
      titulo: "El Ritual de la Aguja",
      descripcion: "Sacar el disco de su funda, colocar la aguja con cuidado y ver girar el vinilo. La música deja de ser un archivo digital y vuelve a ser un objeto tangible."
    },
    {
      numero: "02",
      titulo: "Calidez e Imperfección",
      descripcion: "Ese leve 'crack' antes de la primera canción no es un error, es la firma del sonido físico. Dinámica pura y frecuencias sin compresión digital."
    },
    {
      numero: "03",
      titulo: "Escucha Consciente",
      descripcion: "Un álbum en vinilo está pensado para escucharse de principio a fin, apreciando el arte de tapa, los créditos y la intención original del artista."
    }
  ];

  return (
    <section className={`py-5 text-light font-sans-custom position-relative overflow-hidden ${styles.ritualSection}`}>
      <Container className="py-3">
        
        {/* Cabecera del Banner */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <span className="badge bg-warning text-dark text-uppercase tracking-wider px-3 py-2 mb-3 rounded-0 font-sans-custom fw-bold">
              Cultura & Experiencia
            </span>
            <h2 className="font-display fw-bold display-5 text-warning mb-3">
              ¿Por qué el sonido analógico?
            </h2>
            <p className="lead text-light opacity-90 m-0">
              En un mundo dominado por el algoritmo y la prisa, el vinilo nos invita a frenar, conectar y volver a disfrutar la música como un arte.
            </p>
          </Col>
        </Row>

        {/* Tarjetas de Contenido Informativo */}
        <Row className="g-4">
          {pilares.map((pilar, index) => (
            <Col key={index} md={4}>
              {/* Uso de styles.ritualCard */}
              <Card className={`h-100 border-2 border-dark text-dark p-3 shadow-sm rounded-0 ${styles.ritualCard}`}>
                <Card.Body className="d-flex flex-column justify-content-between p-2">
                  <div>
                    {/* Uso de styles.ritualNumber y styles.ritualTextOrange */}
                    <span className={`font-display fw-black display-4 d-block leading-none mb-2 ${styles.ritualNumber} ${styles.ritualTextOrange}`}>
                      {pilar.numero}
                    </span>
                    
                    {/* Uso de styles.ritualTextDark */}
                    <h3 className={`font-display fw-bold h4 mb-3 ${styles.ritualTextDark}`}>
                      {pilar.titulo}
                    </h3>

                    <p className="text-muted small m-0 lh-lg">
                      {pilar.descripcion}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pie del Banner */}
        <Row className="mt-5 pt-3 border-top border-light border-opacity-25 text-center">
          <Col>
            <p className="font-display fst-italic text-warning h5 m-0">
              "Más música. Menos pantallas."
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default AnalogRitualBanner;