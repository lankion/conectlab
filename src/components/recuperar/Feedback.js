import TextoDescricao from "../../components/cadastro/TextoDescricao";
import TextoRedefinir from "../../components/recuperar/TextoRedefinir";
import image from "../../images/checked.svg";
import { Link } from "react-router-dom";
import style from './Feedback.module.css';
export default function Feedback(){
    return(
        <div className={style.alinhamento}>
            <TextoRedefinir>
            Redefinir senha
            </TextoRedefinir>
            <img src={image} alt="Check box verde"/>
            <TextoDescricao>
            Tudo feito! Enviamos um e-mail com sua nova senha.
            </TextoDescricao>
            <Link to="/login">
                <button type="button" className={style.container}>
                    Entrar
                </button>
            </Link>
            
        </div>
    );
}