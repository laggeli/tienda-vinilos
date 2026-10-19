import { Button } from "react-bootstrap";
import { Link } from "react-router"; 
import itemStyles from "./CarritoItem.module.css";

function CarritoItemBody({ producto, aumentar, disminuir }) {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center gap-2">
            <Link to={`/producto/${producto.id}`}>
                <img 
                    src={producto.image} 
                    alt={producto.name} 
                    title={producto.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }} 
                />
            </Link>
            <div className={itemStyles.botonCantidad}>
                <Button variant="light" size="sm" onClick={() => disminuir(producto.id)}>-</Button>
                <span className="mx-2">{producto.cantidad}</span>
                <Button variant="light" size="sm" onClick={() => aumentar(producto.id)}>+</Button>
            </div>
        </div>

        <div className={itemStyles.precio}>${producto.price}</div>
    </div>
  )
}

export default CarritoItemBody