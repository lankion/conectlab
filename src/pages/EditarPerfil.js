import MenuPrincipal from "../components/dashboard/MenuPrincipal";
import UsuarioDados from "../components/dashboard/UsuarioDados";
export default function EditarPerfil(){
    return(
        <div>
           <MenuPrincipal selecaoU="a" selecaoC="b" selecaoL="c"/>
           <UsuarioDados/> 
        </div>
    );
}