import styles from '../navegacao/LinkLogin.module.css';
import { Link } from 'react-router-dom';

function LinkLogin(){
    return(
        <Link to='login' className={styles.link}>
            Entrar
        </Link>       
    );
}
export default LinkLogin;