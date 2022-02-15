import style from "./MenuPrincipal.module.css";
import TextoDashDescricao from "./TextoDashDescricao";
import LinkDash from "./LinkDash";
import TextoUsuario from "./TextoUsuario";
import perfil from "../../images/fotoperfil.svg";
import user from "../../images/user.svg";
import colecao from "../../images/bookmark.svg";
import licao from "../../images/book.svg";
export default function UsuarioDados(props){
    return(
        <div>
            <img src={perfil} alt="Imagem do Usuário"/>
            <TextoUsuario>
            Olá, 
            </TextoUsuario>
            <TextoDashDescricao>
                bem vindo a 
            </TextoDashDescricao>

            <LinkDash image={user} destino="/editar-perfil" escolha={props.selecaoU} texto="Editar Perfil" />

            <LinkDash image={colecao} destino="/colecoes" escolha={props.selecaoC} texto="Sua Coleção" />

            <LinkDash image={licao} destino="/licoes" escolha={props.selecaoL} texto="Lições" />
            

        </div>
    )
}