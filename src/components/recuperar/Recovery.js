import TextoRedefinir from "../recuperar/TextoRedefinir";
import TextoDescricao from "../cadastro/TextoDescricao";
import LinkEstilizado from "../cadastro/LinkEstilizado";
import { useForm } from 'react-hook-form';
import style from './Recovery.module.css';

export default function Recovery(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <TextoRedefinir>
                Redefinir senha
            </TextoRedefinir>
            <TextoDescricao>
            Digite seu endereço de e-mail para
            escolher uma nova senha.
            </TextoDescricao>
        <form className={style.alinhamento} onSubmit={handleSubmit(onSubmit)}>
            <label> 
                E-MAIL
                {errors.email && <span>email é obrigatorio</span>}
                <input type="email" {...register("email")} placeholder="seunome@email.com" required className={style.iconE}/>
                <input type="submit" value="Enviar link de redefinição"/>
             </label>
             <LinkEstilizado destino="/feedback" texto="De volta a" estilizado="Entrar"/>
        </form>
        </div>

    );
};
