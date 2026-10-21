import { Form } from "react-bootstrap";
import { useState } from "react";

function PagoEfectivo() {
  const [medioSeleccionado, setMedioSeleccionado] = useState("");
  const [puntoPago, setPuntoPago] = useState("");
  return (
    <div>
        <div className="mt-3">
          <h6>Seleccioná el punto de pago</h6>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio"
              name="puntoPago"
              label={
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="https://http2.mlstatic.com/frontend-assets/buyingflow-sonic-frontend/svg/bf_v6_pago_facil.svg"
                    alt="Pago Fácil"
                  />
                  <span>Pago Fácil</span>
                </div>
              }
              value="pagoFacil"
              checked={puntoPago === "pagoFacil"}
              onChange={(e) => setPuntoPago(e.target.value)}
            />
            <Form.Check
              type="radio"
              name="puntoPago"
              label={
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="https://http2.mlstatic.com/frontend-assets/buyingflow-sonic-frontend/svg/bf_v6_rapipago.svg"
                    alt="Rapipago"
                  />
                  <span>Rapipago</span>
                </div>
              }
              value="rapipago"
              checked={puntoPago === "rapipago"}
              onChange={(e) => setPuntoPago(e.target.value)}
            />
          </div>
        </div>
    </div>
  )
}

export default PagoEfectivo