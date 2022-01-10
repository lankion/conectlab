import style from './LinkGenerico.module.css';
import { Link } from 'react-router-dom';
export default function LinkGenerico(props){
    return(
        <Link to={props.destino} className={style.link}>
            {props.descricao}
        </Link>
    );
}