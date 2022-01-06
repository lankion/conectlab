import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

function Logo(){
    return(
        <Link to="/">
            <img src={logo} alt="Nome escrito ConectLab"/>
        </Link>
    );
}

export default Logo;