import style from './TextoInfoDescricao.module.css';

export default function TextoInfoDescricao(props){
    return(
        <p className={style.info}>
            {props.children}
        </p>
    );
}
