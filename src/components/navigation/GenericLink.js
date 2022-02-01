import style from './GenericLink.module.css';
import { Link } from 'react-router-dom';
export default function GenericLink(props){
    return(
        <Link to={props.path} className={style.link}>
            {props.description}
        </Link>
    );
}