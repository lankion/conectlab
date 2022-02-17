import { useNavigate } from "react-router-dom";
import style from '../home/BotaoSimulador.module.css';

export default function BotaoSimulador(){
    let navigate = useNavigate();
    return(
        <div className={style.alinhamento}>
            <button className={style.forma} onClick={
                () => {
                    navigate('simulador');
                }
            }>
                Comece a simular!
            </button>
        </div>
    );
}


