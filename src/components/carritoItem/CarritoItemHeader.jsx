import { Button } from "react-bootstrap";
import { FaTrashAlt } from 'react-icons/fa';
import itemStyles from "./CarritoItem.module.css";

function CarritoItemHeader({ producto, eliminar }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
          <h5 className="mb-1">{producto.name}</h5>
          <p className={itemStyles.artistName}>
          {producto.artist} 
          </p>
          
      </div>
      <Button 
        className={itemStyles.botonEliminar} 
        variant="danger" 
        size="sm" 
        onClick={() => eliminar(producto.id)}
      >
        <FaTrashAlt className="me-2" />
        Eliminar
      </Button>
    </div>
  )
}

export default CarritoItemHeader