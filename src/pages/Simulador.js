import WardrobeComponent from '../components/simulador/WardrobeComponent';
import EspacoSimulador from '../components/simulador/EspacoSimulador';
import style from './Simulador.module.css';
import ToolBar from '../components/simulador/ToolBar';
function Simulador(){
    return(
        <div className={style.alinhamento}>
            <ToolBar/>
            <WardrobeComponent/>          
            <EspacoSimulador/>
        </div>
    );
}
export default Simulador;