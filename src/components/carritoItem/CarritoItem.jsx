import { Card, Button } from "react-bootstrap";
import itemStyles from "./CarritoItem.module.css";
import CarritoItemHeader from "./CarritoItemHeader";
import CarritoItemBody from "./CarritoItemBody";

function CarritoItem({ producto, aumentar, disminuir, eliminar }) {
  return (
    <Card className={`mb-3 ${itemStyles.item}`}>
      <Card.Body className="d-flex flex-column">
        <CarritoItemHeader 
          producto={producto} 
          eliminar={eliminar}
          />
        <hr/>
        <CarritoItemBody 
          producto={producto} 
          aumentar={aumentar} 
          disminuir={disminuir}
        />
      </Card.Body>
    </Card>
  );
}

export default CarritoItem;
