import { useNavigate } from 'react-router-dom';
import styles from './BotaoGenerico.module.css';
function BotaoGenerico(props){
    let navigate = useNavigate();
    return(
        <button className={styles.forma} onClick={
            () => {navigate(props.destino)
            }}>
            {props.name} 
        </button>
        );
}
export default BotaoGenerico;