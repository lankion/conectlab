import TextoInfo from "./TextoInfo";
import TextoDescricao from "./TextoDescricao";
import { useForm } from 'react-hook-form';
import style from './NovoUsuario.module.css';
import LinkEstilizado from "./LinkEstilizado";
import { Link } from "react-router-dom";

export default function NovoUsuario(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:3001/user/new", {
            method: "POST",
            body : JSON.stringify({ data })
        });
    console.log(data);
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
                    NOME COMPLETO
                    {errors.primeironome && <span>nome é obrigatório</span>}
                    <input type="text" {...register("completeName")} placeholder="Nome Completo" required className={style.iconN}/>
                </label>

                <label className={style.text}> 
                    E-MAIL
                    {errors.email && <span>e-mail é obrigatório</span>}
                    <input type="email" {...register("email")} placeholder="seunome@email.com" required className={style.iconE}/>
                </label>
            
                <label className={style.text}>               
                    SENHA
                    {errors.senha && <span>Senha é obrigatória</span>}
                    <input type="password" {...register("password")} placeholder="4 a 8 caracteres" required className={style.iconP}/>
                </label>
            
                <label className={style.container}>
                     <label >Eu aceito os <Link to="termos" className={style.termos}>Termos e Condições</Link>. </label>                  
                     <input type="checkbox"{...register("aceppt")}  required/>
                </label>
                
                <input type="submit" value="Criar conta"/>
            
            <LinkEstilizado destino='/login' texto="Já possui conta?" estilizado="Entrar"/>  
            </form>
               
        </div>
        
    );
}