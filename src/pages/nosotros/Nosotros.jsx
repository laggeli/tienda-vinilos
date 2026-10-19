import styles from "./Nosotros.module.css";

function Nosotros() {
  return (
    <main className={styles.nosotros}>
      <header className={styles.encabezado}>
        <span className={styles.etiqueta}>VINILOS CON HISTORIA</span>
        <h1>La música merece algo más que un play.</h1>
        <p>
          Somos Lado V, un espacio para descubrir discos,
          reencontrarse con clásicos y coleccionar música
          que vale la pena volver a escuchar.
        </p>
      </header>

      <section className={styles.historia}>
        <div className={styles.texto}>
          <span className={styles.numero}>01 - NUESTRA HISTORIA</span>
          <h2>Nacimos del amor por la música.</h2>

          <p>
            Lado V nació de una idea sencilla: recuperar la
            emoción de escuchar un álbum de principio a fin.
            De elegir un disco, mirar su arte, poner la púa
            y dejar que la música haga lo suyo.
          </p>

          <p>
            Creamos esta tienda para quienes disfrutan tanto
            de una canción como de todo lo que la rodea.
            Para quienes buscan ese álbum que marcó una época,
            quieren ampliar su colección o están por descubrir
            su primer vinilo.
          </p>
        </div>

        <div className={styles.destacado}>
          <span className={styles.comilla}>“</span>
          <p>
            Cada disco tiene una historia.
            Nos encanta ayudarte a encontrar la tuya.
          </p>
          <span className={styles.firma}>EL ESPÍRITU DE LADO V</span>
        </div>
      </section>

      <section className={styles.propuesta}>
        <span className={styles.numero}>02 - LO QUE NOS MUEVE</span>
        <h2>Mucho más que una colección.</h2>

        <div className={styles.valores}>
          <article className={styles.valor}>
            <h3>Clásicos y descubrimientos</h3>
            <p>
              Un catálogo pensado para recorrer distintos
              géneros, épocas y artistas, y encontrar algo
              nuevo en cada escucha.
            </p>
          </article>

          <article className={styles.valor}>
            <h3>La experiencia de escuchar</h3>
            <p>
              Creemos en tomarse un momento, darle play al
              ritual analógico y disfrutar la música sin apuro.
            </p>
          </article>

          <article className={styles.valor}>
            <h3>Una comunidad musical</h3>
            <p>
              Queremos conectar a personas que comparten
              canciones, recomiendan discos y viven la música
              a su manera.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.cierre}>
        <h2>¿Buscamos tu próximo disco?</h2>
        <p>
          Explorá el catálogo y encontrá ese vinilo que
          todavía tiene un lugar en tu colección.
        </p>
        <a href="/productos" className={styles.boton}> Explorar vinilos </a>
      </section>
    </main>
  );
}

export default Nosotros;