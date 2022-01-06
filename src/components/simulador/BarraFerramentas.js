import SeparadorBarra from "./SeparadorBarra";
import Apagar from "./Apagar";
import Desfazer from "./Desfazer";
import Explicacao from "./Explicacao";
import Refazer from "./Refazer";
import Selecionar from "./Selecionar";
import Simular from "./Simular";

function BarraFerramentas(){
    return(
        <>
            <Selecionar/>
            <Desfazer/>
            <SeparadorBarra/>
            <Apagar/>
            <Refazer/>
            <SeparadorBarra/>
            <Simular/>
            <Explicacao/>
        </>
    );
}
export default BarraFerramentas;