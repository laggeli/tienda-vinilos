import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import stylesFormulario from "../../pages/contact/Contact.module.css";
import stylesErrores from "../../components/checkout/Checkout.module.css";

function FacturacionCard() {
  const [error, setError] = useState({});
  const [datosIguales, setDatosIguales] = useState(true);
  const [datosFacturacion, setDatosFacturacion] = useState({
    nombreYApellido: "",
    dniCuit: ""
  });
  
  const validar = (valor, prop) => {
      switch (prop) {  
          case "dniCuit":
            if (!valor.trim()) return "El DNI/CUIT es obligatorio";
            if (isNaN(valor)) return "Debe contener solo números, sin puntos.";
            if (valor.length < 7) return "EL número ingresado debe tener al menos 7  dígitos";
            return "";
          case "nombreYApellido":
            if (!valor.trim()) return "El nombre es obligatorio";
            if (valor.length < 2) return "Debe tener al menos 2 caracteres";
            return "";

        default:
          return "";
      }
  };


  const guardarDatos = (e) => {
      const {name, value} = e.target;
      setDatosFacturacion({
          ...datosFacturacion, 
          [name]: value 
      });
  }

  const handleChange = (e) => {
      //se guarda valor
      guardarDatos(e);
      
      //se valida el valor ingresado
      const valor = e.target.value;
      const prop = e.target.name;
      const mensajeError = validar(valor, prop);
      setError({
          ...error,
          [prop]: mensajeError // guarda el error en la clave del campo
      });
  };
  
  return (
    <Card className={stylesErrores.item}>
      <Card.Body>
        <h5 className={stylesFormulario.subtitulo}>Datos de facturación</h5>
        
        <Form>
          {/* Checkbox para factura A */}
          <Form.Group className="mb-3" controlId="facturaA">
            <Form.Check 
              type="checkbox" 
              label="Necesito factura A" 
            />
          </Form.Group>
          {/* DNI o CUIT */}
          <Form.Group className="mb-3" controlId="dniCuit">
            <Form.Label>DNI o CUIT</Form.Label>
            <Form.Control 
              name="dniCuit"
              type="text" 
              placeholder="Ej. 20123456789" 
              value={datosFacturacion.dniCuit}
              onChange={handleChange}
              className={`${stylesErrores.textoIngresado} 
                ${error.dniCuit ? stylesErrores.errorInput : ""}`}
            />
            {error.dniCuit && (
              <div className={stylesErrores.errorMsg}>{error.dniCuit}</div>
            )}
          </Form.Group>

          {/* Checkbox datos iguales de envio y facturacion */}
          <Form.Group className="mb-3" controlId="datosIguales">
            <Form.Check 
              type="checkbox" 
              label="Mis datos de facturación y entrega son los mismos" 
              checked={datosIguales}
              onChange={(e) => setDatosIguales(e.target.checked)}
            />
          </Form.Group>

          {/* Si NO está tildado, se pide nombre y apellido */}
          {!datosIguales && (
            <Form.Group className="mb-3" controlId="nombreYApellido">
              <Form.Label>Nombre y Apellido *</Form.Label>
              <Form.Control
                type="text"
                name="nombreYApellido"
                value={datosFacturacion.nombreYApellido}
                placeholder="Ej. María Pérez"
                onChange={handleChange}
                className={`${stylesErrores.textoIngresado} 
                ${ error.nombreYApellido ? stylesErrores.errorInput : ""}`}
              />
              {error.nombreYApellido && (
                <div className={stylesErrores.errorMsg}>{error.nombreYApellido}</div>
              )}
            </Form.Group>
          )}
        </Form>
      </Card.Body>
    </Card>
  )
}

export default FacturacionCard