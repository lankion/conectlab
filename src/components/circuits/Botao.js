import imagem from '../../images/button.svg';
import style from "./Botao.module.css";

export default function Botao(){
   
    return(
        
        <div className={style.box} draggable="true" >
            <img src={imagem} alt="Figura de um botão"/>
            
            <p>BOTÃO</p>
        </div>
    );
}



  