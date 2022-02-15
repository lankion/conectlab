import { Link } from "react-router-dom";
import style from './LinkDash.module.css';
export default function LinkDash(props){
    return(
        <div>
            <img src={style.image} alt="icones do dashboard"/>
            <Link to={props.destino} className={style.props.escolha}>
                {props.texto}
            </Link>
        </div>
    )
}