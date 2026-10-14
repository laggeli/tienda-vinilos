import { Form } from "react-bootstrap";
import  { generos }  from "../data/genres"; 

function SelectGenres({ value, onChange, label = "Género", incluirOpcionTodas = true, className = "mb-3" }) { 
    return (
        <Form.Group className={className}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Select value={generos} onChange={onChange}>
                {incluirOpcionTodas && <option value={"todas"}>Todos los géneros</option>}
                {generos.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}> 
                    {cat}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
      ); 
    } 
    
export default SelectGenres;