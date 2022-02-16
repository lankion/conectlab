import imagem from '../../images/capacitor.svg';
import style from "./Capacitor.module.css";

export default function Capacitor(){
   
    return(
        
        <div className={style.box} draggable="true" >
            <img src={imagem} alt="Figura de um capacitor"/>
            
            <p>CAPACITOR</p>
        </div>
    );
}



  