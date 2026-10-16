import { Badge, } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5"; 
import styles from "./CarritoIcono.module.css";

function CarritoIcono({ total }) { 
    
	return ( 
		<div className={styles.iconoContenedor}>
			{total > 0 && 
            <Badge className={styles.badge} bg="danger" pill>
				{total}
			</Badge>}
			<IoCartOutline size={25} />
		</div>
	); 
} 

export default CarritoIcono;