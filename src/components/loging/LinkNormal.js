import { Link } from 'react-router-dom';
import style from './LinkNormal.module.css';
export default function LinkNormal(props){
    return(
        <Link to={props.destino} className={style.principal}>
            {props.texto}
        </Link>
    );
}