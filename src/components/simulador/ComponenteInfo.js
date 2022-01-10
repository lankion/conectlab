import style from './ComponenteInfo.module.css';
function ComponenteInfo(props){
    return(
        <p className={style.info}>
           {props.texto}
        </p>
    );
}
export default ComponenteInfo;