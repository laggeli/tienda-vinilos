import { useState, useEffect } from 'react';
import styles from "./Contact.module.css";

export default function FormularioContacto() {
  useEffect(() => { document.title = "Lado V | Contacto"; }, []);
  const [formData, setFormData] = useState({
    nombre: '',
    phone: '',
    email: '',
    comentario: ''
  });

  //guarda los errores
  const [Errores, setErrores] = useState({});

  //controla la comnfirmacion del estado
  const [submitted, setSubmitted] = useState(false);

  // Función dinámica para actualizar cualquier campo del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }
    );

    //limpia el mensaje de error del campo en cuanto el usuario vuelve a escribir
    if (Errores[name]) { setErrores({...Errores, [name]: ''}); }};

  // Función de validación manual campo por campo
  const Validar = (dato) => {
    const newErrores = {};

    // Validar Nombre y Apellido
    if (!dato.nombre.trim()) { newErrores.nombre = 'El nombre y apellido son obligatorios'; }

    // Validar Teléfono
    if (!dato.phone.trim()) { newErrores.phone = 'El número de teléfono es obligatorio'; } 
    else if (isNaN(dato.phone.trim())) { newErrores.phone = 'El teléfono debe contener únicamente números'; } 
    else if (dato.phone.trim().length < 8) { newErrores.phone = 'El número de teléfono debe tener al menos 8 dígitos'; }

    // Validar Email (obligatorio y formato con @ y .)
    if (!dato.email.trim()) {
      newErrores.email = 'El correo electrónico es obligatorio';
    } else if (!dato.email.includes('@') || !dato.email.includes('.')) {
      newErrores.email = 'El correo electrónico debe tener un formato válido (ejemplo@dominio.com)';
    }

    return newErrores;
  };

  // Manejador del evento onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validacionDeErrores = Validar(formData);
    setErrores(validacionDeErrores);

    // Si el objeto de errores está vacío, el formulario es válido
    if (Object.keys(validacionDeErrores).length === 0) {
      setSubmitted(true);
      console.log('Formulario enviado con éxito:', formData);

      // Reinicia los campos del formulario
      setFormData({
        nombre: '',
        phone: '',
        email: '',
        comentario: ''
      });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className={`container mt-4 col-md-8 col-lg-6 ${styles.formulario}`}>
      <h2 className="mb-4 text-center">Formulario de Contacto</h2>

      {/* Cartel de éxito tras el envío sin errores */}
      {submitted && (
        <div className={`alert alert-success alert-dismissible fade show mb-4 ${styles.formText}`} role="alert">
          ¡Formulario enviado con éxito! <br/ >
          Nos pondremos en contacto pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidar>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={`form-control ${Errores.nombre ? 'is-invalid' : ''}`}
            placeholder="Ej. María Pérez"
            value={formData.nombre}
            onChange={handleChange}
          />
          {Errores.nombre && (
            <div className="invalid-feedback d-block">
              {Errores.nombre}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Número de Teléfono *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className={`form-control ${Errores.phone ? 'is-invalid' : ''}`}
            placeholder="Ej. 1112345678"
            value={formData.phone}
            onChange={handleChange}
          />
          {Errores.phone && (
            <div className="invalid-feedback d-block">
              {Errores.phone}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${Errores.email ? 'is-invalid' : ''}`}
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
          />
          {Errores.email && ( <div className="invalid-feedback d-block"> {Errores.email} </div> )}
        </div>

        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">
            Comentario o pregunta
          </label>
          <textarea
            id="comentario"
            name="comentario"
            rows="4"
            className="form-control"
            placeholder="Escribí tu consulta aquí..."
            value={formData.comentario}
            onChange={handleChange}
          > </textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-2"> Enviar Formulario </button>
      </form>
    </div>
  );
}