import SeparadorBarra from "./SeparadorBarra";
import Apagar from "./Apagar";
import Desfazer from "./Desfazer";
import Explicacao from "./Explicacao";
import Refazer from "./Refazer";
import Selecionar from "./Selecionar";
import Simular from "./Simular";
import Salvar from './Salvar';
import Atualizar from "./Atualizar";
import style from './ToolBar.module.css';

export default function ToolBar(){
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
            <Salvar/>
            <SeparadorBarra/>
            <Explicacao/>
        </div>
    );
}