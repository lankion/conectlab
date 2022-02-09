import TextoInfo from "../cadastro/TextoInfo.js";
import TextoDescricao from "../cadastro/TextoDescricao";
import { useForm } from 'react-hook-form';
import style from './UsuarioLogar.module.css';
import LinkEstilizado from "../cadastro/LinkEstilizado";
import email from '../../images/mail.svg';
import cadeado from '../../images/lock.svg';
import LinkNormal from "./LinkNormal.js";

export default function NovoUsuario(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return(
        
        <div>
            <TextoInfo>
            Bem-vindo de volta!
            </TextoInfo>
            <TextoDescricao>
            Faça login em sua conta aqui.
            </TextoDescricao>

            <form className={style.alinhamento} onSubmit={handleSubmit(onSubmit)}>
               
                <label> 
                    <img src={email} alt="Icone de email"/>
                    E-MAIL
                    {errors.email && <span>email é obrigatorio</span>}
                    <input type="email" {...register("email")} placeholder="nome@email.com" required/>
                </label>
            
                <label>
                    <img src={cadeado} alt="Icone de um cadeado"/>                
                    SENHA
                    {errors.senha && <span>senha é obrigatorio</span>}
                    <input type="password" {...register("senha")} placeholder="4 a 8 caracteres" required/>
                </label>
            
                <input type="submit" value="Entrar"/>
                
            </form>
            <div className={style.alinhamento}>
                <LinkNormal destino='/recuperar' texto='Esqueceu sua senha'/>
                <LinkEstilizado destino='/cadastro' texto="Novo por aqui?   " estilizado=" Inscrever-se"/>
            </div>
        </div>
        
    );
}