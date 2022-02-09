import style from './WardrobeComponent.module.css';
import SpacerDescription from './SpacerDescription';
import Resistor from '../circuits/Resistor';

export default function WardrobeComponent(){
    return(
        <div className={style.componets}>
            <section className={style.component}>
                <header className={style.titleComponent}>
                    <SpacerDescription description="Componentes"/>  
                </header>
                <Resistor/>
                <Resistor/>
                <Resistor/>
                <Resistor/>
                <Resistor/>
                <Resistor/>
                
            </section>
            <section className={style.component}>
                <header className={style.titleComponent}>
                    <SpacerDescription description="Instrumentos"/>
                </header>
                <Resistor/>
                <Resistor/>
            </section>  
        </div>
    );
}