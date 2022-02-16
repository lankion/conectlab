import imagem from '../../images/ammeter.svg';
import style from "./Amperimetro.module.css";

export default function Amperimetro(){
    
    return(
        
        <div className={style.box} draggable="true">
            <img src={imagem} alt="Figura de um amperimetro"/>
            
            <p>AMPERIMETRO</p>
        </div>
    );
}



  