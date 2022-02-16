import imagem from '../../images/battery.svg';
import style from "./Fonte.module.css";

export default function Fonte(){
    
    return(
        
        <div className={style.box} draggable="true" >
            <img src={imagem} alt="Figura de um fonte"/>
            
            <p>FONTE</p>
        </div>
    );
}



  