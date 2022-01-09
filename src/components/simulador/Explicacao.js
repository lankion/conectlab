import style from './Explicacao.module.css';
function Explicacao(){
    return(
        <p className={style.texto}>
            Clique e arraste o componente para a área de trabalho.
        </p>
    );
}
export default Explicacao;