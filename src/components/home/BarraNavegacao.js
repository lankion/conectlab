import Logo from "../basic/Logo";
import BotaoLogin from "../basic/BotaoLogin";
import BotaoSimulador from "../basic/BotaoSimulador";
import { Link } from "react-router-dom";

function BarraNavegacao(){
    return(
        <nav>
            <Link to="/">
                <Logo/>
            </Link>
            <Link to="/simulador">
                <BotaoSimulador/>
            </Link>
            <Link to="/login">
                <BotaoLogin/>
            </Link>
            
        </nav>        
    );
}

export default BarraNavegacao;