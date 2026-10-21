import { Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./PagoTarjeta.module.css"
import stylesErrores from "../../pages/checkout/Checkout.module.css";

function PagoTarjeta() {
    const [medioSeleccionado, setMedioSeleccionado] = useState("");
  const [error, setError] = useState({});
  const [datosTarjeta, setDatosTarjeta] = useState({
    nCard: "",
    vencimiento: "",
    cvv: "",
    titular: ""
  });

  const validar = (valor, prop) => {
    switch (prop) {
      case "nCard":
        if (!valor.trim()) return "El número de tarjeta es obligatorio";
        if (isNaN(valor)) return "Debe contener solo números";
        if (valor.length < 13) return "Debe tener al menos 13 dígitos";
        return "";
      case "vencimiento":
        if (!valor.trim()) return "La fecha es obligatoria";
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(valor)) return "Formato válido: MM/AA";
        return "";
      case "cvv":
        if (!valor.trim()) return "El CVV es obligatorio";
        if (isNaN(valor)) return "Debe contener solo números";
        if (valor.length !== 3) return "Debe tener 3 dígitos";
        return "";
      case "titular":
        if (!valor.trim()) return "El nombre del titular es obligatorio";
        if (valor.length < 2) return "Debe tener al menos 2 caracteres";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosTarjeta({ ...datosTarjeta, [name]: value });
    setError({ ...error, [name]: validar(value, name) });
  };
  return (
    <div>
        <div className={`d-flex gap-3 ${styles.checkMedios}`}>
        <Form.Check
          type="checkbox"
          label="Débito"
          checked={medioSeleccionado === "nuevaDebito"}
          onChange={() =>
            setMedioSeleccionado(
              medioSeleccionado === "nuevaDebito" ? "" : "nuevaDebito"
            )
          }
        />
        <Form.Check
          type="checkbox"
          label="Crédito"
          checked={medioSeleccionado === "nuevaCredito"}
          onChange={() =>
            setMedioSeleccionado(
              medioSeleccionado === "nuevaCredito" ? "" : "nuevaCredito"
            )
          }
        />
      </div>
      {(medioSeleccionado === "nuevaDebito" ||
        medioSeleccionado === "nuevaCredito") && (
        <div className="mt-3">
          <h6>Datos de la tarjeta</h6>
          <Form.Group className={stylesErrores.desplegable} controlId="nCard">
            <Form.Label>Número de tarjeta</Form.Label>
            <Form.Control
              type="text"
              name="nCard"
              value={datosTarjeta.nCard}
              onChange={handleChange}
              placeholder="Ingrese un número de tarjeta"
              autoComplete="off"
              className={`${stylesErrores.textoIngresado} 
                        ${error.nCard ? stylesErrores.errorInput : ""}`}
            />
            {error.nCard && <div className={stylesErrores.errorMsg}>{error.nCard}</div>}
          </Form.Group>
          <Form.Group className="mb-2" controlId="vencimiento">
            <Form.Label>Fecha de vencimiento</Form.Label>
            <Form.Control
              type="datetime"
              name="vencimiento"
              value={datosTarjeta.vencimiento}
              onChange={handleChange}
              placeholder="MM/AA"
              className={`${stylesErrores.vencimiento} 
                        ${error.vencimiento ? stylesErrores.errorInput : ""}`}
            />
            {error.vencimiento && <div className={stylesErrores.errorMsg}>{error.vencimiento}</div>}
          </Form.Group>
          <Form.Group className="mb-2" controlId="cvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              name="cvv"
              value={datosTarjeta.cvv}
              onChange={handleChange}
              placeholder="Ej. 123"
              className={`${stylesErrores.cvv} 
                        ${error.cvv ? stylesErrores.errorInput : ""}`}
            />
            {error.cvv && <div className={stylesErrores.errorMsg}>{error.cvv}</div>}
          </Form.Group>
          <Form.Group className="mb-2" controlId="titular">
            <Form.Label>Nombre del titular</Form.Label>
            <Form.Control
              type="text"
              name="titular"
              value={datosTarjeta.titular}
              onChange={handleChange}
              placeholder="Ej. María Pérez"
              className={`${stylesErrores.titular} 
                        ${error.titular ? stylesErrores.errorInput : ""}`}
            />
            {error.titular && <div className={stylesErrores.errorMsg}>{error.titular}</div>}
          </Form.Group>
        </div>
      )}
    </div>
  )
}

export default PagoTarjeta