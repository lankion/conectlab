import SeparadorBarra from "./SeparadorBarra";
import Apagar from "./Apagar";
import Desfazer from "./Desfazer";
import Explicacao from "./Explicacao";
import Refazer from "./Refazer";
import Selecionar from "./Selecionar";
import Simular from "./Simular";
import Atualizar from "./Atualizar";
import style from './BarraFerramentas.module.css';

function BarraFerramentas(){
    return(
        <div className={style.container}>
            <Selecionar/>
            <Atualizar/>
            <Apagar/> 
            <SeparadorBarra/>
            <Desfazer/>
            <Refazer/>
            <SeparadorBarra/>
            <Simular/>
            <SeparadorBarra/>
            <Explicacao/>
        </div>
    );
}
export default BarraFerramentas;