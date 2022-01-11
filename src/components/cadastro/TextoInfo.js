import style from './TextoInfo.module.css';
export default function TextoInfo(props){
    return(
        <h1 className={style.info}>
            {props.children}
        </h1>
    );
}