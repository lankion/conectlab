import imagem from '../../images/key.svg';
import style from "./Chave.module.css";

export default function Chave(){
   
    return(
        
        <div className={style.box} draggable="true" >
            <img src={imagem} alt="Figura de um chave"/>
            
            <p>CHAVE</p>
        </div>
    );
}



  