import style from '../home/BarraHero.module.css';
import TextoHero from './TextoHero';
import BotaoSimulador from './BotaoSimulador';

function BarraHero(){
    return(
        <div className={style.alinhamento}>                 
            <TextoHero/>
            <BotaoSimulador/>  
        </div>
    );
}
export default BarraHero;