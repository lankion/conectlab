import { Link } from "react-router-dom";
import style from './LinkEstilizado.module.css';
export default function LinkEstilizado(props){
    return(
        <p className={style.principal}>
            {props.texto}
            <Link to={props.destino} className={style.link}>
            &nbsp;{props.estilizado}
            </Link>
        </p>
    );
}