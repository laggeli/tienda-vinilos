import { Form } from 'react-bootstrap';
import { useState } from "react";
import ComboProvincias from "./ComboProvincias";
import stylesErrores from "./FormularioDeEnvio.module.css";
import stylesFormulario from "../../pages/contact/Contact.module.css";
import styles from "../../components/checkout/Checkout.module.css";
function FormularioDeEnvio() {
    const [error, setError] = useState({});
    const [datosEnvio, setDatosEnvio] = useState({
        nombreYApellido:"",
        telefono:"",
        email:"",
        calle:"",
        numero:"",
        dpto:"",
        ciudad:"",
        cp:"",
        provincia:""
    })
    
    const validar = (valor, prop) => {
        switch (prop) {
            case "nombreYApellido":
                if (!valor.trim()) return "El nombre es obligatorio";
                if (valor.length < 2) return "El nombre debe tener al menos 2 caracteres";
                return "";

            case "calle":
                if (!valor.trim()) return "La calle es obligatoria";
                if (valor.length < 5) return "La calle debe tener al menos 5 caracteres";
                return "";

            case "ciudad":
                if (!valor.trim()) return "La ciudad es obligatoria";
                if (valor.length < 5) return "La ciudad debe tener al menos 5 caracteres";
                return "";

            case "telefono":
                if (!valor.trim()) return "El teléfono es obligatorio";
                if (isNaN(valor)) return "El teléfono debe contener solo números";
                if (valor.length < 8) return "El teléfono debe tener al menos 8 dígitos";
                return "";

            case "email":
                if (!valor.trim()) {
                    return "El correo electrónico es obligatorio";
                } 
                const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!patronEmail.test(valor)) {
                    return "El correo electrónico debe tener un formato válido (ejemplo@dominio.com)";
                }
                return "";

            case "numero":
                if (!valor.trim()) return "El número es obligatorio";
                if (isNaN(valor)) return "Debe ingresar solo números";
                return "";

            case "cp":
                if (!valor.trim()) return "El código postal es obligatorio";
                if (isNaN(valor)) return "El código postal debe contener solo números";
                if (valor.length < 4) return "El código postal debe tener 4 dígitos";
                return "";

            case "provincia":
                if (!valor.trim()) return "Debe seleccionar una provincia";
                return "";

            default:
            return "";
        }
    };


    const guardarDatos = (e) => {
        const {name, value} = e.target;
        setDatosEnvio({
            ...datosEnvio, //se copia estado previo
            [name]: value //se actualiza propiedad con el mismo name
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
    <div className={`mt-4 ${styles.item}`}>
        <div>
            <h5>Datos de Entrega</h5>
        </div>
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre y Apellido *</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={datosEnvio.nombreYApellido}
                        placeholder="Ej. María Pérez"
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.nombreYApellido ? stylesErrores.errorInput : ""
                            }`}
                        required
                    />
                    {error.nombreYApellido && <div className={stylesErrores.errorMsg}>{error.nombreYApellido}</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Número de Teléfono *</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        value={datosEnvio.tel}
                        placeholder="Ej. 1112345678"
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.telefono ? stylesErrores.errorInput : ""
                            }`}
                        required
                    />
                    {error.telefono && <div className={stylesErrores.errorMsg}>{error.telefono}</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>E-mail *</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={datosEnvio.email}
                        placeholder="ejemplo@correo.com"
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.email ? stylesErrores.errorInput : ""
                            }`}
                        required
                    />
                    {error.email && <div className={stylesErrores.errorMsg}>{error.email}</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Calle *</Form.Label>
                    <Form.Control
                        type="text"
                        name="calle"
                        value={datosEnvio.calle}
                        placeholder="Ej: Av. Rivadavia"
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.calle ? stylesErrores.errorInput : ""
                            }`}
                        required
                    />
                    {error.calle && <div className={stylesErrores.errorMsg}>{error.calle}</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Número *</Form.Label>
                    <Form.Control
                        type="text"
                        name="numero"
                        value={datosEnvio.numero}
                        placeholder="Ej: 23564"
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.numero ? stylesErrores.errorInput : ""
                            }`}
                        required
                    />
                    {error.numero && <div className={stylesErrores.errorMsg}>{error.numero}</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Piso</Form.Label>
                    <Form.Control
                        type="text"
                        name="piso"
                        value={datosEnvio.piso}
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.piso ? stylesErrores.errorInput : ""
                            }`}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dpto.</Form.Label>
                    <Form.Control
                        type="text"
                        name="dpto"
                        value={datosEnvio.dpto}
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.dpto ? stylesErrores.errorInput : ""
                            }`}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ciudad *</Form.Label>
                    <Form.Control
                        type="text"
                        name="ciudad"
                        value={datosEnvio.ciudad}
                        placeholder="Ej: Morón"
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.ciudad ? stylesErrores.errorInput : ""
                            }`}
                        required
                    />
                    {error.ciudad && <div className={stylesErrores.errorMsg}>{error.ciudad}</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>C.P. *</Form.Label>
                    <Form.Control
                        type="text"
                        name="cp"
                        value={datosEnvio.cp}
                        placeholder="Ej: 1708"
                        onChange={handleChange}
                        className={`${stylesErrores.textoIngresado} ${
                            error.cp ? stylesErrores.errorInput : ""
                            }`}
                        required
                    />
                    {error.cp && <div className={stylesErrores.errorMsg}>{error.cp}</div>}
                </Form.Group>
                <ComboProvincias
                    value={datosEnvio.provincia}
                    onChange={handleChange}
                    error={error.provincia}
                />
            </Form>
        </div>
    </div>
    
    
  )
}

export default FormularioDeEnvio