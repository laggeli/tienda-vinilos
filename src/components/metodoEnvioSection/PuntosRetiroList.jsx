import { Form } from "react-bootstrap";
import { useState } from "react";
import { opcionesRetiro } from "../../data/opciones-retiro.js";
import stylesBuscador from "../../pages/products/Products.module.css";
import stylesListado from "./PuntosRetiroList.module.css";
import stylesFormulario from "../../pages/contact/Contact.module.css";

function PuntosRetiroList() {
  const [cpostal, setCpIngresado] = useState("");
  const [error, setError] = useState("");

  const getOpcionesRetiroByCP = (cpostal) => 
        opcionesRetiro.filter(op => op.cp === cpostal);

  const resultados = getOpcionesRetiroByCP(cpostal);

  const [seleccionado, setSeleccionado] = useState(null);

  const validarCP = (cpostal) => {
    if (!cpostal.trim()) return "";
    if (isNaN(cpostal.trim())) return "* El código postal debe contener únicamente números";
    if (cpostal.trim().length !== 4) return "* El código postal debe tener 4 dígitos";
    return "";
  } 
  return (
    <div>
        <Form>
            <Form.Group>
                <Form.Control
                    type="search"
                    placeholder="⌕  Buscar punto de retiro por código postal"
                    value={cpostal}
                    onChange={(e) => {
                        const valor = e.target.value;
                        setCpIngresado(valor);
                        const mensajeError = validarCP(valor);
                        setError(mensajeError);
                    }}
                    className={`${stylesBuscador.buscador} ${error || (cpostal && !error && resultados.length === 0) ? stylesListado.errorInput : ""}`}
                    aria-label="Buscar por código postal"
                />
                {/* Se muestra error de validación */}
                {error && <div className={stylesListado.errorMsg}>{error}</div>}

                {/* Leyenda que se muestra si no hay resultados */}
                {cpostal && !error && resultados.length === 0 && 
                (
                    <div className={stylesListado.errorMsg}>
                        * No existen puntos de retiro para el código postal ingresado
                    </div>
                )}
            </Form.Group>  

            {/* Se muestra la lista y titulo cuando hay resultados */}
            {cpostal && !error && resultados.length > 0 &&
            (<div className={stylesFormulario.formulario}>
                <h3 className={stylesListado.subtitulo}>Puntos de retiro disponibles</h3>
                <hr/>
                <ul className={stylesListado.listaRetiro}>
                    {resultados.map((op, i) => (
                        <li key={i}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={op.nombre_sucursal}
                                    checked={seleccionado === op.nombre_sucursal} 
                                    disabled={seleccionado && seleccionado !== op.nombre_sucursal}
                                    onChange={(e) => {
                                        e.target.checked
                                        ? setSeleccionado(op.nombre_sucursal)
                                        : setSeleccionado(null)
                                    }}
                                />
                                {op.nombre_sucursal} - {op.direccion}
                            </label>
                        </li>
                        ))
                    }
                </ul>
            </div>
            )}
        </Form>
    </div>  
  )
}

export default PuntosRetiroList