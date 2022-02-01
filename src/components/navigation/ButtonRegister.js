import pessoa from '../../images/user.svg';
import style from '../navigation/ButtonRegister.module.css';
import { useNavigate } from 'react-router-dom';

export default function ButtonRegister(){
    let navigate = useNavigate();
    return(
        <div className={style.alinhamento}>
            <button className={style.forma} onClick={
                () => {
                    navigate('cadastro');
                }
            }>
                <img src={pessoa} alt="Imagem vetorizada de uma pessoa" className={style.icone}/>
                Inscrever-se
            </button>
        </div>
    );
}
