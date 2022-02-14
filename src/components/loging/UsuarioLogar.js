import TextoInfo from "../cadastro/TextoInfo.js";
import TextoDescricao from "../cadastro/TextoDescricao";
import { useForm } from 'react-hook-form';
import style from './UsuarioLogar.module.css';
import LinkEstilizado from "../cadastro/LinkEstilizado";
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
            Faça login em sua conta, aqui!
            </TextoDescricao>
           

            <form className={style.alinhamento} onSubmit={handleSubmit(onSubmit)}>
               
                <label> 
                    E-MAIL
                    {errors.email && <span>e-mail é obrigatório</span>}
                    <input type="email" {...register("email")} placeholder="seunome@email.com" required className={style.iconE}/>
                </label>
            
                <label>              
                    SENHA
                    {errors.senha && <span>senha é obrigatória</span>}
                    <input type="password" {...register("senha")} placeholder="4 a 8 caracteres" required className={style.iconP} />
                </label>
            
                <input type="submit" value="Entrar"/>
                <LinkNormal destino='/recuperar' texto='Esqueceu sua senha?'/>
                <LinkEstilizado destino='/cadastro' texto="Novo por aqui?" estilizado="Inscrever-se"/>
            </form>
                        
        </div>
        
    );
}