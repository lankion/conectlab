import salvar from '../../images/save.svg';
import style from './Salvar.module.css';
function Salvar(){
    return(
        <div className={style.container}>
            <img src={salvar} alt="Icone de Salvar" className={style.icone}/>
            <p className={style.text}>Salvar</p>
        </div>
    );
}
export default Salvar;