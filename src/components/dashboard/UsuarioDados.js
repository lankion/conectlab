import { useForm } from 'react-hook-form';
import style from "./UsuarioDados.module.css";
import { Link } from "react-router-dom";
export default function UsuarioDados(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)};
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={style.alinhamento}>          
                NOME COMPLETO
                <label className={style.text}>
                    Alterar Nome
                    {errors.primeironome && <span>nome é obrigatorio</span>}
                    <input type="text" {...register("completeName")} placeholder="Nome Completo" required className={style.iconN}/>
                </label>
                E-MAIL
                <label className={style.text}> 
                    Alterar e-mail
                    {errors.email && <span>e-mail é obrigatório</span>}
                    <input type="email" {...register("email")} placeholder="seunome@email.com" required className={style.iconE}/>
                </label>
                SENHA
                <label className={style.text}>               
                    Senha Atual
                    {errors.senha && <span>Senha é obrigatória</span>}
                    <input type="password" {...register("passwordOld")} placeholder="4 a 8 caracteres" required className={style.iconP}/>
                </label> 

                <label className={style.text}>               
                    Nova Senha
                    {errors.senha && <span>Senha é obrigatória</span>}
                    <input type="password" {...register("passwordNew")} placeholder="4 a 8 caracteres" required className={style.iconP}/>
                </label>                
                <input type="submit" value="Deletar Usuário"/>
                <input type="submit" value="Salvar Alterações"/>
            </form>
        </div>
    )
}