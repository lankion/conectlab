import imagem from '../../images/switch.svg';
import style from "./Interruptor.module.css";

export default function Interruptor(){
    
    return(
        
        <div className={style.box} draggable="true"  >
            <img src={imagem} alt="Figura de um interruptor"/>
            
            <p>INTERRUPTOR</p>
        </div>
    );
}



  