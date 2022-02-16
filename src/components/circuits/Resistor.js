import imagem from '../../images/resistor.svg';
import style from "./Resistor.module.css";

export default function Resistor(){
   
    return(
        
        <div className={style.box} draggable="true"  >
            <img src={imagem} alt="Figura de um ressitor"/>
            
            <p>RESISTOR</p>
        </div>
    );
}



  