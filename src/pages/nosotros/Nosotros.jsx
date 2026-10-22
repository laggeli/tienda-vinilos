import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from "./Nosotros.module.css";

function Nosotros() {
  useEffect(() => { document.title = "Lado V | Nosotros"; }, []);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elemento = document.getElementById(hash.replace('#', ''));
      if (elemento) {elemento.scrollIntoView({ behavior: 'smooth' });}
    }}, [hash]);

  const [formData, setFormData] = useState({
    nombre: '',
    email: ''
  });

  const [errores, setErrores] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errores[name]) { setErrores({ ...errores, [name]: '' }); }
  };

  const validar = (dato) => {
    const newErrores = {};

    if (!dato.nombre.trim()) { newErrores.nombre = 'El nombre es obligatorio'; }

    if (!dato.email.trim()) { newErrores.email = 'El correo electrónico es obligatorio'; } 
    else if (!dato.email.includes('@') || !dato.email.includes('.')) {
      newErrores.email = 'El correo electrónico debe tener un formato válido (ejemplo@dominio.com)';
    }

    return newErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validacionDeErrores = validar(formData);
    setErrores(validacionDeErrores);

    if (Object.keys(validacionDeErrores).length === 0) { setSubmitted(true); } 
    else { setSubmitted(false); }
  };

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

        <div id="comunidad-form" className={styles.comunidadBox}>
          {submitted ? (
            <div className={styles.mensajeExito}>
              <h3>¡Bienvenido a nuestra comunidad, {formData.nombre}!</h3>
              <p>Gracias por sumarte. Pronto recibirás novedades y lanzamientos exclusivos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3>¡Unite a nuestra comunidad!</h3>
              <p>Dejanos tus datos para enterarte de novedades y lanzamientos exclusivos.</p>
              
              <div className={styles.formularioComunidad}>
                <FloatingLabel controlId="floatingNombre" label="Nombre *" className="mb-3">
                  <Form.Control type="text" name="nombre" placeholder="Nombre" 
                    value={formData.nombre} onChange={handleChange}
                    className={`${styles.inputControl} ${errores.nombre ? 'is-invalid' : ''}`} 
                  />
                </FloatingLabel>
                {errores.nombre && (
                  <div className={`invalid-feedback d-block mb-2 ${styles.errores}`}>
                    {errores.nombre}
                  </div>
                )}

                <FloatingLabel controlId="floatingEmail" label="Correo electrónico *" className="mb-3">
                  <Form.Control type="email" name="email" placeholder="nombre@gmail.com" 
                    value={formData.email} onChange={handleChange}
                    className={`${styles.inputControl} ${errores.email ? 'is-invalid' : ''}`} 
                  />
                </FloatingLabel>
                {errores.email && (
                  <div className={`invalid-feedback d-block mb-2 ${styles.errores}`}>
                    {errores.email}
                  </div>
                )}

                <button type="submit" className={styles.botonForm}> Suscribirme </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className={styles.cierre}>
        <h2>¿Buscamos tu próximo disco?</h2>
        <p>
          Explorá el catálogo y encontrá ese vinilo que
          todavía tiene un lugar en tu colección.
        </p>
        <NavLink to="/productos" className={styles.boton}> Explorar vinilos </NavLink>
      </section>
    </main>
  );
}

export default Nosotros;