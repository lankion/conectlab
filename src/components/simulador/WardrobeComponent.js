import style from './WardrobeComponent.module.css';
import SpacerDescription from './SpacerDescription';
import Resistor from '../circuits/Resistor';

export default function WardrobeComponent(){
    return(
        <div className={style.componets}>
            <section className={style.ccomponent}>
                <header className={style.titleComponent}>
                    <SpacerDescription description="Componentes"/>
                    <Resistor/>
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