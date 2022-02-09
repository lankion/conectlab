import style from './Simulador.module.css';
import ToolBar from '../components/simulador/ToolBar';
import WardrobeComponent from '../components/simulador/WardrobeComponent';
import SimulatedSpace from '../components/simulador/SimulatedSpace';
import { DragDropContext } from 'react-beautiful-dnd';
export default function Simulador(){
    return(
        <div className={style.alinhamento}>
            <ToolBar/>
            <DragDropContext>
                <WardrobeComponent/>
                <SimulatedSpace/> 
            </DragDropContext>           
        </div>
    );
}
