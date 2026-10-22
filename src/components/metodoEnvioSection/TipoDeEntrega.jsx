import { Form } from "react-bootstrap";
import { useState } from "react";
import { opcionesEnvio } from "../../data/opciones-envio.js";
import styles from "./TipoDeEntrega.module.css";

function TipoDeEntrega({total}) {
  console.log("Valor recibido en total:", total, "Tipo:", typeof total);
  const [seleccionado, setSeleccionado] = useState(null);
  const [fechaEstimada, setFechaEstimada] = useState("");
  const mostrarGratis = Number(total) >= 100000; 

  const calcularRangoEnvio = (diasMax) => {
    const hoy = new Date();
    const inicio = new Date(hoy);
    inicio.setDate(hoy.getDate() + 1); 
    const fin = new Date(hoy);
    fin.setDate(hoy.getDate() + diasMax);

    const formato = (d) =>
      d.toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

    return `Llega entre: ${formato(inicio)} y ${formato(fin)}`;
  };

  const handleSeleccion = (op) => {
    // permite destildar
    const nuevoSeleccionado = seleccionado === op.id ? null : op.id;
    setSeleccionado(nuevoSeleccionado);
    // al destildar, limpia la fecha
    setFechaEstimada(nuevoSeleccionado ? calcularRangoEnvio(op.diasMax) : "");
  };

  return (
    <div className={styles.contenedor}>
      <h5 className={styles.titulo}>Envío a domicilio</h5>
      {opcionesEnvio.map((op) => (
        <Form.Group
        key={op.id}
        className={`${styles.opcion} ${
            seleccionado === op.id ? styles.activo : ""
        }`}
        >
            <Form.Check
            type="checkbox"
            id={op.id}
            label={
                <div className={styles.leyenda}>
                    <strong className={styles.nombre}>{op.nombre}</strong>

                    {seleccionado === op.id && (
                    <div className={styles.fecha}>{fechaEstimada}</div>
                    )}

                    <div>
                    {mostrarGratis ? (
                        <div className={styles.gratisPos}>
                        <span className={styles.precioAnterior}>
                            ${op.precio.toLocaleString("es-AR")}
                        </span>
                        <span className={styles.gratis}>Gratis</span>
                        </div>
                    ) : (
                        <div className={styles.precio}>
                        ${op.precio.toLocaleString("es-AR")}
                        </div>
                    )}
                    </div>
                </div>
            }
            checked={seleccionado === op.id}
            disabled={seleccionado && seleccionado !== op.id}
            onChange={() => handleSeleccion(op)}
            />
        </Form.Group>
      ))}
    </div>
  );
}

export default TipoDeEntrega;
