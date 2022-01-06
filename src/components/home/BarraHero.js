import style from '../home/BarraHero.module.css';
import TextoHero from './TextoHero';
import BotaoSimulador from './BotaoSimulador';
import ImagemHero from './ImagemHero';

function BarraHero(){
    return(
        <div className={style.alinhamento}>  
             <TextoHero/>
            <BotaoSimulador/>
            <ImagemHero/>
        </div>
    );
}
export default BarraHero;