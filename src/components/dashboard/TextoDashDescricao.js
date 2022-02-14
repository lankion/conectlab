import style from "./TextoUsuário.module.css";
export default function TextoDashDescricao(props){
    return(
        <h2 className={style.info}>
            {props.children}
        </h2>
    );
}