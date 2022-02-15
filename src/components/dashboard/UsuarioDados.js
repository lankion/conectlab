import style from "./UsuarioDados.module.css";
import TextoDashDescricao from "./TextoDashDescricao";
import LinkDash from "./LinkDash";
import TextoUsuario from "./TextoUsuario";
import perfil from "../../images/fotoperfil.svg";
import user from "../../images/user.svg";
import colecao from "../../images/save.svg";
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

            <LinkDash image={user} destino="/editar-perfil" escolha={props.selecao} texto="Editar Perfil" />

            <LinkDash image={colecao} destino="/colecoes" escolha={props.selecao} texto="Sua Coleção" />

            <LinkDash image={licao} destino="/licoes" escolha={props.selecao} texto="Lições" />
            

        </div>
    )
}