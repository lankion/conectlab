import style from './SpacerDescription.module.css';
export default function SpacerDescription(props){
    return(
        <p className={style.text}>
            {props.description}
        </p>
    );
}
