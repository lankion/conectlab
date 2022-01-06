import styles from './BotaoGenerico.module.css';
function BotaoGenerico(props){
    return(
        <button className={styles.forma}>
            {props.children} 
        </button>
        );
}
export default BotaoGenerico;