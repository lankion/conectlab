import styles from '../home/TextoHero.module.css';
function TextoHero(){
    return(
        <div className={styles.alinhamento}>
            <h1>
            Exercite práticas de laboratório em casa
            </h1>
            <p>
            Teste suas habilidades sobre circuitos elétricos! 
            </p>
        </div>
    );
}
export default TextoHero;