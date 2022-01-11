import style from './TextoDescricao.module.css';
export default function TextoDescricao(props){
    return(
        <p className={style.descricao}>
            {props.children}
        </p>
    );
}