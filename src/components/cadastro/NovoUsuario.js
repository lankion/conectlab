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
            <p>
                <TextoDescricao>
                Precisamos de alguns dados
            para criar sua conta.
                </TextoDescricao>
           
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className={style.alinhamento}>              
                <div class="nomeSobrenome">            
                     <label className={style.text}>
                     NOME
                      {errors.primeironome && <span>nome é obrigatorio</span>}
                     <input {...register("firstName")} placeholder="nome" required/>
                  </label>   
                <label className={style.text}> 
                     SOBRENOME
                     {errors.sobrenome && <span>sobrenome é obrigatorio </span>}
                     <input {...register("lastName")} placeholder='sobrenome' required/>
                </label>
                </div>
                <label className={style.text}> 
                    E-MAIL                 
                     {errors.email && <span>e-mail é obrigatório</span>}
                     <input type="email" {...register("email")} 
                      placeholder="nome@email.com" required/>                   
                </label>      
                <label className={style.text}>            
                    SENHA
                    {errors.senha && <span>Senha é obrigatória</span>}
                    <input type="password" {...register("password")} placeholder="4 a 8 caracteres" required/>
                </label>
                <label className={style.container}>
                     <label for="checkboxTermos">Eu aceito os Termos e Condições</label>                  
                     <input type="checkbox"{...register("aceppt")} id="checkboxTermos" name="checkboxTermos" required/>
                </label>
                <input type="submit" value="Criar conta"/>
                <LinkEstilizado destino='/login' texto="Já possui conta?" estilizado=" Entrar"/>
            </form>
        </div> );
}