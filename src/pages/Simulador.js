import style from './Simulador.module.css';
import ToolBar from '../components/simulador/ToolBar';
import WardrobeComponent from '../components/simulador/WardrobeComponent';
import SimulatedSpace from '../components/simulador/SimulatedSpace';
export default function Simulador(){
    return(
        <div className={style.alinhamento}>
            <ToolBar/>
            <WardrobeComponent/>
            <SimulatedSpace/>         
        </div>
    );
}
