import imagem from '../../images/led.svg';
import style from "./Led.module.css";

export default function Led(){
    
    return(
        
        <div className={style.box} draggable="true" >
            <img src={imagem} alt="Figura de um ressitor"/>
            
            <p>LED</p>
        </div>
    );
}



  