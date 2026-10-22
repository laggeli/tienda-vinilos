import FormularioDeEnvio from "./FormularioDeEnvio";
import TipoDeEntrega from "./TipoDeEntrega";
function TiposEnvioList({ total }) {
  return (
    <div>
        <TipoDeEntrega total={total}/>
        <FormularioDeEnvio/>
    </div>
  )
}

export default TiposEnvioList