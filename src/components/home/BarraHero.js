import style from '../home/BarraHero.module.css';
import TextoHero from './TextoHero';
import BotaoSimulador from './BotaoSimulador';

export default function BarraHero(){
    return( <div className={style.alinhamento}>   
        <TextoHero/>
        <BotaoSimulador/>  
       </div>
     );
}
