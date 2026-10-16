import { Badge, } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5"; 
import styles from "./AppNavBar.module.css"; 

function CarritoIcono({ total }) { 
    
	return ( 
		<div className={styles.iconoContenedor}>
			<IoCartOutline size={25} />
			{total > 0 && 
            <Badge className={styles.badge} pill>
				{total}
			</Badge>}
		</div>
	); 
} 

export default CarritoIcono;