import style from "./TextoUsuario.module.css";
export default function TextoUsuario(props){
    return(
        <h2 className={style.info}>
            {props.children}
        </h2>
    );
}