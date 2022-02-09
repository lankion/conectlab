import style from './WardrobeComponent.module.css';
import SpacerDescription from './SpacerDescription';
import Resistor from '../circuits/Resistor';
import Capacitor from '../circuits/Capacitor';
import Fonte from '../circuits/Fonte';
import Interruptor from '../circuits/Interruptor';
import Led from '../circuits/Led';
import Botao from '../circuits/Botao';
import Conector from '../circuits/Conector';
import Chave from "../circuits/Chave";
import Voltimetro from '../circuits/Voltimetro';
import Amperimetro from '../circuits/Amperimetro';

export default function WardrobeComponent(){
    return(
        <div className={style.componets}>
            <header className={style.titleComponent}>
                    <SpacerDescription description="Componentes"/>  
            </header>
            <section className={style.component}>     
                    <Resistor/>
                    <Capacitor/>
                    <Fonte/>
                    <Interruptor/>   
                    <Led/> 
                    <Botao/>
                    <Conector/>
                    <Chave/>      
            </section>
            <header className={style.titleComponent}>
                    <SpacerDescription description="Instrumentos"/>
            </header>
            <section className={style.component}>
                <Voltimetro/>
                <Amperimetro/>
            </section>  
        </div>
    );
}