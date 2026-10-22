import { useState } from "react";
import FormularioDeEnvio from "./FormularioDeEnvio";
import TipoDeEntrega from "./TipoDeEntrega";

function TiposEnvioList({ total, tipoEnvioCambia}) {
  const [metodoEnvio, setMetodoEnvio] = useState(null);
  const [precioEnvio, setPrecioEnvio] = useState(0);

  return (
    <div>
        <TipoDeEntrega 
          total={total} 
          tipoEnvioCambia={(info) => {
            console.log("Método:", info.metodo, "Precio:", info.precio);
            setMetodoEnvio(info.metodo);
            setPrecioEnvio(info.precio);
            if (tipoEnvioCambia) tipoEnvioCambia(info); // avisamos al padre
          }} 
      />
        <FormularioDeEnvio/>
    </div>
  )
}

export default TiposEnvioList