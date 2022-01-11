import TextoInfo from "./TextoInfo";
import TextoDescricao from "./TextoDescricao";
import { useForm } from 'react-hook-form';
import style from './NovoUsuario.module.css';
import LinkEstilizado from "./LinkEstilizado";
import user from '../../images/user.svg';
import email from '../../images/mail.svg';
import cadeado from '../../images/lock.svg';

export default function NovoUsuario(){
    const { register } = useForm();
    return(
        
        <div>
            <TextoInfo>
                Bem-vindo!
            </TextoInfo>
            <TextoDescricao>
            Precisamos de alguns dados para criar sua conta.
            </TextoDescricao>

            <form className={style.alinhamento}>
                <label>
                    <img src={user} alt="Icone de pessoa"/>
                    NOME
                    <input {...register("primeironome")}>
                    </input>
                </label>

                <label> 
                    <img src={user} alt="Icone de pessoa"/>
                    SOBRENOME
                    <input {...register("sobrenome")}/>
                </label>

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
            
                <label>
                    <input type="checkbox"{...register("aceite")}/>
                    Eu aceito os Termos e Condições
                </label>
                
                <input type="submit" value="Criar conta"/>
                
            </form>
                <LinkEstilizado destino='/login' texto="Já possui conta" estilizado="Entrar"/>
        </div>
        
    );
}