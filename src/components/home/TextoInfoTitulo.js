import style from './TextoInfoTitulo.module.css';
export default function TextoInfoTitulo(props){
    return(
        <p className={style.info}>
            {props.children}
        </p>
    );
}
