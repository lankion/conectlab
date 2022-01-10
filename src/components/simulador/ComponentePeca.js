import style from './ComponentePeca.module.css';
function ComponentePeca(props){
    return(
        <div className={style.item}>
            <img src={props.imagem} alt={props.descricao}/>
        </div>
    );
}
export default ComponentePeca;