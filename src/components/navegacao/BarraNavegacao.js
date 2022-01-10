import Logo from "../navegacao/Logo";
import Separador from '../navegacao/Separador';
import BotaoCadastro from '../navegacao/BotaoCadastro';
import style from '../navegacao/BarraNavegacao.module.css';
import LinkGenerico from "./LinkGenerico";

export default function BarraNavegacao(){
    return(
        <nav className={style.container}>
            <Logo/>
            <LinkGenerico destino='simulador' descricao="Simulador"/>
            <Separador/>
            <LinkGenerico destino='login' descricao="Entrar"/>
            <BotaoCadastro/>       
        </nav>        
    );
}
