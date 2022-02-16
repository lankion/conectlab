import imagem from '../../images/voltmeter.svg';
import style from "./Voltimetro.module.css";

export default function Voltimetro(){
    
    return(
        
        <div className={style.box} draggable="true">
            <img src={imagem} alt="Figura de um voltimetro"/>
            
            <p>VOLTIMETRO</p>
        </div>
    );
}



  