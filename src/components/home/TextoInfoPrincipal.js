import style from './TextoInfoPrincipal.module.css';

function TextoInfoPrincipal(props){
    return(
        <h1 className={style.info}>
            {props.children}
        </h1>
    );
}
export default TextoInfoPrincipal;