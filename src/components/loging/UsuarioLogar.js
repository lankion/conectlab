import TextoInfo from "../cadastro/TextoInfo.js";
import TextoDescricao from "../cadastro/TextoDescricao";
import { useForm } from 'react-hook-form';
import style from './UsuarioLogar.module.css';
import LinkEstilizado from "../cadastro/LinkEstilizado";
import email from '../../images/mail.svg';
import cadeado from '../../images/lock.svg';
import LinkNormal from "./LinkNormal.js";

export default function NovoUsuario(){
    const { register } = useForm();
    return(
        
        <div>
            <TextoInfo>
            Bem-vindo de volta!
            </TextoInfo>
            <TextoDescricao>
            Faça login em sua conta aqui.
            </TextoDescricao>

            <form className={style.alinhamento}>
               
                <label> 
                    <img src={email} alt="Icone de email"/>
                    E-MAIL
                    <input type="email" {...register("email")}/>
                </label>
            
                <label>
                    <img src={cadeado} alt="Icone de um cadeado"/>                
                    SENHA
                    <input type="password" {...register("senha")}/>
                </label>
            
                <input type="submit" value="Entrar"/>
                
            </form>
                <LinkNormal destino='/recuperar' texto='Esqueceu sua senha'/>
                <LinkEstilizado destino='/cadastro' texto="Novo por aqui" estilizado="Inscrever-se"/>
        </div>
        
    );
}