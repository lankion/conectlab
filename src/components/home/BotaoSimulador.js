import { useNavigate } from "react-router-dom";
import style from '../home/BotaoSimulador.module.css';

function BotaoSimulador(){
    let navigate = useNavigate();
    return(
        <div className={style.alinhamento}>
            <button className={style.forma} onClick={
                () => {
                    navigate('simulador');
                }
            }>
                Começe a simular
            </button>
        </div>
    );
}
export default BotaoSimulador;

