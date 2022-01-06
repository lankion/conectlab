import Logo from "../navegacao/Logo";
import LinkLogin from "../navegacao/LinkLogin";
import LinkSimulador from "../navegacao/LinkSimulador";
import Separador from '../navegacao/Separador';
import BotaoCadastro from '../navegacao/BotaoCadastro';
import styles from '../navegacao/BarraNavegacao.module.css';

function BarraNavegacao(){
    return(
        <nav className={styles.navegacao}>
            <Logo/>
            <LinkSimulador/>
            <Separador/>
            <LinkLogin/>
            <BotaoCadastro/>       
        </nav>        
    );
}

export default BarraNavegacao;