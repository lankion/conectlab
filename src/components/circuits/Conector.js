import imagem from '../../images/connector.svg';
import style from "./Conector.module.css";

export default function Conector(){
    
    return(
        
        <div className={style.box} draggable="true" >
            <img src={imagem} alt="Figura de um conector"/>
            
            <p>CONECTOR</p>
        </div>
    );
}



  