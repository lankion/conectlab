import Logo from "../basic/Logo";
import BotaoLogin from "../basic/BotaoLogin";
import BotaoSimulador from "../basic/BotaoSimulador";

function BarraNavegacao(){
    return(
        <nav>
            <Logo/>
            <BotaoSimulador/>
            <BotaoLogin/>
        </nav>        
    );
}

export default BarraNavegacao;