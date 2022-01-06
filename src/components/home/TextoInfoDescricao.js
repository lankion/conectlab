import style from './TextoInfoDescricao.module.css';

function TextoInfoDescricao(props){
    return(
        <p className={style.info}>
            {props.children}
        </p>
    );
}
export default TextoInfoDescricao;