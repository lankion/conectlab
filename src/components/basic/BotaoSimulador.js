import circuito from '../../images/circuit.svg';

function BotaoSimulador(){
    return(
        <button>
            <img src={circuito} alt= "Figura de um circuito em vetorial"/>
            Simulador
        </button>
    );
}

export default BotaoSimulador;