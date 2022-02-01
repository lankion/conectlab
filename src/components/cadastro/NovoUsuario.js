import TextoInfo from "./TextoInfo";
import TextoDescricao from "./TextoDescricao";
import { useForm } from 'react-hook-form';
import style from './NovoUsuario.module.css';
import LinkEstilizado from "./LinkEstilizado";
import user from '../../images/user.svg';
import email from '../../images/mail.svg';
import cadeado from '../../images/lock.svg';

export default function NovoUsuario(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        localStorage.setItem("cadastro", data);
    
    }
    return(
        
        <div>
            <TextoInfo>
                Bem-vindo!
            </TextoInfo>
            <TextoDescricao>
            Precisamos de alguns dados para criar sua conta.
            </TextoDescricao>

            <form onSubmit={handleSubmit(onSubmit)} className={style.alinhamento}>
                <label className={style.text}>
                    <img src={user} alt="Icone de pessoa"/>
                    NOME
                    {errors.primeironome && <span>nome é obrigatorio</span>}
                    <input {...register("firstName")} placeholder="nome" required/>
                </label>

                <label className={style.text}> 
                    <img src={user} alt="Icone de pessoa"/>
                    SOBRENOME
                    {errors.sobrenome && <span>sobrenome é obrigatorio </span>}
                    <input {...register("lastName")} placeholder='sobrenome' required/>
                </label>

                <label className={style.text}> 
                    <img src={email} alt="Icone de email"/>
                    E-MAIL
                    {errors.email && <span>e-mail é obrigatório</span>}
                    <input type="email" {...register("email")} placeholder="nome@email.com" required/>
                </label>
            
                <label className={style.text}>
                    <img src={cadeado} alt="Icone de um cadeado"/>                
                    SENHA
                    {errors.senha && <span>Senha é obrigatória</span>}
                    <input type="password" {...register("password")} placeholder="4 a 8 caracteres" required/>
                </label>
            
                <label>
                    <input type="checkbox"{...register("aceppt")} required/>
                    Eu aceito os Termos e Condições
                </label>
                
                <input type="submit" value="Criar conta"/>
                
            </form>
                <LinkEstilizado destino='/login' texto="Já possui conta" estilizado="Entrar"/>
        </div>
        
    );
}