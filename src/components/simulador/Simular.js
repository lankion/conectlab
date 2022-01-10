import simular from '../../images/play.svg';
import style from './Simular.module.css';
function Simular(){
    return(
        <div className={style.container}>
            <img src={simular} alt="Icone de Simular" className={style.icone}/>
            <p className={style.text}>Simular</p>
        </div>
    );
}
export default Simular;