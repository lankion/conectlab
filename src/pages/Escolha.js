import NovoUsuario from "../components/cadastro/NovoUsuario";
import Separador from "../components/navegacao/Separador";
import UsuarioLogar from '../components/loging/UsuarioLogar';

function Escolha(){
    return(
        <div>
            <NovoUsuario/>
            <Separador/>
            <UsuarioLogar/>
        </div>
    );
}
export default Escolha;