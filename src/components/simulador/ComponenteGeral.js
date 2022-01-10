import ComponenteTitulo from './ComponenteTitulo';
import ComponentePeca from './ComponentePeca';
import ComponenteInfo from './ComponenteInfo';
import style from './ComponenteGeral.module.css';
import resistor from '../../images/resistor.svg';
import capacitor from '../../images/capacitor.svg';
import bateria from '../../images/bateria.svg';
import interruptor from '../../images/switch.svg';
import led from '../../images/led.svg';
import botao from '../../images/button.svg';

function ComponenteGeral(){
    return(
        <div className={style.alinhamento}>
            <ComponenteTitulo/>
            <div className={style.itemE}>
                <ComponentePeca imagem={resistor} descricao="Imagem de resistor"/>
                <ComponenteInfo texto="Resistor"/>

                <ComponentePeca imagem={bateria} descricao="Imagem de bateria"/>
                <ComponenteInfo texto="Bateria"/>

                <ComponentePeca imagem={led} descricao="Imagem de led"/>
                <ComponenteInfo texto="Led"/>
            </div>
           <div className={style.itemD}>
                <ComponentePeca imagem={capacitor} descricao="Imagem de capacitor"/>
                <ComponenteInfo texto="Capacitor"/>

                <ComponentePeca imagem={interruptor} descricao="Imagem de interruptor"/>
                <ComponenteInfo texto="Interruptor"/>

                <ComponentePeca imagem={botao} descricao="Imagem de botao"/>
                <ComponenteInfo texto="Botao"/>
           </div>      
        </div>
    );
}
export default ComponenteGeral;