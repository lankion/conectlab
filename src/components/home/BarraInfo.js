import ImagemInfo from './ImagemInfo';
import TextoInfoTitulo from './TextoInfoTitulo';
import TextoInfoPrincipal from './TextoInfoPrincipal';
import style from './BarraInfo.module.css';
import BotaoGenerico from './BotaoGenerico';
import TextoInfoDescricao from './TextoInfoDescricao';

import user from '../../images/userplus.svg';
import alarm from '../../images/alarm.svg';
import pasta from '../../images/folder.svg';

function BarraInfo(){
    return(
    <div>
    <TextoInfoPrincipal>
        Porque usar o ConectLab?
    </TextoInfoPrincipal>
        <div className={style.alinhamento}>
            <div className={style.block}>
                <ImagemInfo image={user}/>
                <TextoInfoTitulo>
                    De Alunos para Alunos
                </TextoInfoTitulo>
                <TextoInfoDescricao>
                    Desenvolvida por alunos da Universidade Federal do Ceará
                </TextoInfoDescricao>
                <BotaoGenerico>
                    Entrar
                </BotaoGenerico>
            </div>
            <div className={style.block}>
                <ImagemInfo image={alarm}/>
                <TextoInfoTitulo>
                    Gratuito e fácil de usar
                </TextoInfoTitulo>
                <TextoInfoDescricao>
                    Teste suas habilidades sobre circuitos elétricos
                </TextoInfoDescricao>
                <BotaoGenerico>
                    Aprender
                </BotaoGenerico>
            </div>
            <div className={style.block}>
                <ImagemInfo image={pasta}/>
                <TextoInfoTitulo>
                    Compartilhe exercícios
                </TextoInfoTitulo>
                <TextoInfoDescricao>
                    Compartilhe lições com seus colegas ou alunos
                </TextoInfoDescricao>
                <BotaoGenerico>
                    Ensinar
                </BotaoGenerico>
            </div>              
        </div>
    </div>

    );
}
export default BarraInfo;