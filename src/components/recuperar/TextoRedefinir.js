import style from "./TextoRedefinir.module.css";
export default function TextoRedefinir(props){
    return(
        <h2 className={style.info}>
            {props.children}
        </h2>
    );
}