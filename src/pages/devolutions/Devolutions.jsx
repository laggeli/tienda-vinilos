import { NavLink } from "react-router";
import styles from "./Devolutions.module.css";

function Devolutions() {
  return (
    <main className={styles.devoluciones}>
      <header className={styles.encabezado}>
        <span className={styles.etiqueta}>SOPORTE</span>
        <h1>Cambios y devoluciones</h1>
        <p>
          Queremos que disfrutes tu compra. En esta sección
          encontrarás información sobre cómo realizar una
          consulta si tu pedido presenta algún inconveniente.
        </p>
      </header>

      <div className={styles.tarjeta}>
        <section className={styles.seccion}>
          <span className={styles.numero}>1</span>
          <div>
            <h2>¿En qué casos puedo pedir una devolución?</h2>
            <p>
              Si recibiste un producto equivocado, el vinilo
              presenta algún daño o tu pedido llegó en
              condiciones diferentes a las esperadas, podés
              comunicarte con nosotros para informar lo ocurrido.
            </p>
            <p>
              Revisaremos cada caso para orientarte sobre los
              pasos a seguir.
            </p>
          </div>
        </section>

        <section className={styles.seccion}>
          <span className={styles.numero}>2</span>
          <div>
            <h2>¿Cómo inicio una solicitud?</h2>
            <p>
              Para realizar una consulta, te recomendamos
              tener a mano la información de tu compra y
              describir el inconveniente con el mayor detalle
              posible.
            </p>
            <ul>
              <li>Nombre y apellido.</li>
              <li>Número de pedido.</li>
              <li>Descripción del problema.</li>
              <li>Fotos del producto o embalaje.</li>
            </ul>
            <p>
              Podés enviarnos la consulta desde nuestro
              formulario de contacto.
            </p>
          </div>
        </section>

        <section className={styles.seccion}>
          <span className={styles.numero}>3</span>
          <div>
            <h2>¿Qué pasa si el vinilo llegó roto?</h2>
            <p>
              Si el producto presenta daños al recibirlo,
              conservá el disco y su embalaje y contactanos
              para explicarnos qué ocurrió.
            </p>
            <p>
              Te indicaremos cómo continuar una vez que
              revisemos la información de tu caso.
            </p>
          </div>
        </section>

        <section className={styles.seccion}>
          <span className={styles.numero}>4</span>
          <div>
            <h2>¿Cuándo voy a recibir una respuesta?</h2>
            <p>
              El tiempo de respuesta dependerá del volumen
              de consultas y de la información necesaria para
              evaluar cada solicitud. Si necesitás asistencia,
              incluí todos los datos relevantes en tu mensaje.
            </p>
          </div>
        </section>

        <div className={styles.acciones}>
          <NavLink to="/contacto" className={styles.boton}> Realizar una consulta </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Devolutions;