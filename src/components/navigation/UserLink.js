import { Link } from "react-router-dom";
import style from './UserLink.module.css';
export default function UserLink(props){
    return(
        <p className={style.normal}>
            {props.normal}
        <Link to={props.path} className={style.link}>
            {props.user}
        </Link>
        </p>
    );
}