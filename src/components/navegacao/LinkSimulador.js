import styles from '../navegacao/LinkSimulador.module.css';
import { Link } from 'react-router-dom';

function LinkSimulador(){
    return(
        <Link to="simulador" className={styles.link}>
        Simulador
        </Link>   
    );
}
export default LinkSimulador;