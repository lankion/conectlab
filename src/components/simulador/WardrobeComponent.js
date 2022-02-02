//import ComponentePeca from './ComponentePeca';
//import ComponenteInfo from './ComponenteInfo';
import style from './WardrobeComponent.module.css';
//import resistor from '../../images/resistor.svg';
//import capacitor from '../../images/capacitor.svg';
//import bateria from '../../images/bateria.svg';
//import interruptor from '../../images/switch.svg';
//import led from '../../images/led.svg';
//import botao from '../../images/button.svg';
import SpacerDescription from './SpacerDescription';

export default function WardrobeComponent(){
    return(
        <div className={style.componets}>
            <section className={style.ccomponent}>
                <header className={style.titleComponent}>
                    <SpacerDescription description="Componentes"/>
                </header>
            </section>
            <section className={style.ccomponent}>
                <header className={style.titleComponent}>
                    <SpacerDescription description="Instrumentos"/>
                </header>
            </section>  
        </div>
    );
}