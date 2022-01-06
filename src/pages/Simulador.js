import ComponenteGeral from '../components/simulador/ComponenteGeral';
import EspacoSimulador from '../components/simulador/EspacoSimulador';
import BarraFerramentas from '../components/simulador/BarraFerramentas';
import style from './Simulador.module.css';
function Simulador(){
    return(
        <div className={style.alinhamento}>
            <ComponenteGeral/>
            <BarraFerramentas/>
            <EspacoSimulador/>
        </div>
    );
}
export default Simulador;