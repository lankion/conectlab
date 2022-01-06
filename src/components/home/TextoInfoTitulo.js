import style from './TextoInfoTitulo.module.css';
function TextoInfoTitulo(props){
    return(
        <p className={style.info}>
            {props.children}
        </p>
    );
}
export default TextoInfoTitulo;