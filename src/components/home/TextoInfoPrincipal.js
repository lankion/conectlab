import style from './TextoInfoPrincipal.module.css';

export default function TextoInfoPrincipal(props){
    return(
        <h1 className={style.info}>
            {props.children}
        </h1>
    );
}
