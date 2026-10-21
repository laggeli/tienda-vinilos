import { Form } from 'react-bootstrap';
import { provincias } from "../../data/provincias.js";
import stylesErrores from "./FormularioDeEnvio.module.css";

function ComboProvincias({ value, onChange, error }) {
  return (
    <Form.Group className="mb-3">
    <Form.Label>Provincia *</Form.Label>
    <Form.Select
        name="provincia"
        value={value}
        onChange={onChange}
        className={`${stylesErrores.selectIngresado} ${error ? stylesErrores.errorInput : ""}`}
        required
    >
        <option value="">Seleccione una provincia</option>
        {provincias.map((prov, i) => (
        <option key={i} value={prov.nombre}>
            {prov.nombre}
        </option>
        ))}
    </Form.Select>
    {error && <div className={stylesErrores.errorMsg}>{error}</div>}
    </Form.Group>  
    )
}

export default ComboProvincias