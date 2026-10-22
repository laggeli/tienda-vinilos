import { NavLink } from "react-router";
import { preguntas } from "../../data/questions.js";
import styles from "./FrequentQuestions.module.css";

function FrequentCuestions() {
  return (
    <main className={styles.faq}>
      <header className={styles.encabezado}>
        <span className={styles.etiqueta}>ESTAMOS PARA AYUDARTE</span>
        <h1>Preguntas frecuentes</h1>
        <p>
          Reunimos las consultas más habituales para que
          encuentres la información que necesitás antes
          de elegir tu próximo vinilo.
        </p>
      </header>

      <div className={styles.contenido}>
        {preguntas.map((grupo, indice) => {
          const ids = ["compras", "envios", "pagos"];

          return (
            <section className={styles.grupo} id={ids[indice]} key={grupo.categoria} >
              <h2>{grupo.categoria} </h2>
              {grupo.items.map((item) => (
                <details className={styles.pregunta} key={item.pregunta}>
                  <summary>{item.pregunta}</summary>
                  <p>{item.respuesta} </p>
                </details>
              ))}
            </section>
          );
        })}
      </div>

      <section className={styles.contacto}>
        <h2>¿No encontraste tu respuesta?</h2>
        <p> Si todavía tenés dudas, escribinos y contanos en qué podemos ayudarte. </p>
        <NavLink to="/contacto" className={styles.boton}> Contactanos </NavLink>
      </section>
    </main>
  );
}

export default FrequentCuestions;