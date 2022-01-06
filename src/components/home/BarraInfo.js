import ImagemInfo from './ImagemInfo';
import TextoInfoTitulo from './TextoInfoTitulo';
import TextoInfoPrincipal from './TextoInfoPrincipal';
import style from './BarraInfo.module.css';
import BotaoGenerico from './BotaoGenerico';
import TextoInfoDescricao from './TextoInfoDescricao';

//import user from '../../images/user.svg';
//import alarm from '../../images/alarm.svg';
//import pasta from '../../imagem/folder.svg';

function BarraInfo(){
    return(
    <div className={style.alinhamento}>
        <TextoInfoPrincipal>
        Porque usar o ConectLab?
        </TextoInfoPrincipal>
        

        <ImagemInfo/>
        <TextoInfoTitulo>
        De Alunos para Alunos  
        </TextoInfoTitulo>
        <TextoInfoDescricao>

        </TextoInfoDescricao>
        <BotaoGenerico>
            
        </BotaoGenerico>

        <ImagemInfo/>
        <TextoInfoPrincipal>
        De Alunos para Alunos  
        </TextoInfoPrincipal>
        <TextoInfoDescricao>
            
        </TextoInfoDescricao>

        <ImagemInfo/>
        <TextoInfoPrincipal>
        De Alunos para Alunos  
        </TextoInfoPrincipal>
        <TextoInfoDescricao>
            
        </TextoInfoDescricao>


    </div>
    );
}
export default BarraInfo;