import Logo from "../navegacao/Logo";
import LinkLogin from "../navegacao/LinkLogin";
import LinkSimulador from "../navegacao/LinkSimulador";
import Separador from '../navegacao/Separador';
import BotaoCadastro from '../navegacao/BotaoCadastro';
import style from '../navegacao/BarraNavegacao.module.css';

function BarraNavegacao(){
    return(
        <nav className={style.container}>
            <Logo/>
            <LinkSimulador/>
            <Separador/>
            <LinkLogin/>
            <BotaoCadastro/>       
        </nav>        
    );
}

export default BarraNavegacao;