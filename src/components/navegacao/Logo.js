import logo from '../../images/logo.svg';
import style from './Logo.module.css';
import {Link} from 'react-router-dom';

function Logo(){
    return(
        <Link to="/" className={style.item}>
            <img src={logo} alt="Nome escrito ConectLab"/>
        </Link>
    );
}

export default Logo;