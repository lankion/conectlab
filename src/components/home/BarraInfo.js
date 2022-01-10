import ImagemInfo from './ImagemInfo';
import TextoInfoTitulo from './TextoInfoTitulo';
import TextoInfoPrincipal from './TextoInfoPrincipal';
import style from './BarraInfo.module.css';
import BotaoGenerico from './BotaoGenerico';
import TextoInfoDescricao from './TextoInfoDescricao';

import user from '../../images/userplus.svg';
import alarm from '../../images/alarm.svg';
import pasta from '../../images/folder.svg';

export default function BarraInfo(){
    return(
    <div>
    <TextoInfoPrincipal>
        Porque usar o ConectLab?
    </TextoInfoPrincipal>
        <div className={style.container}>
            <div className={style.itens}>
                <ImagemInfo image={user} descricao="Icone de usuario"/>
                <TextoInfoTitulo>
                    De Alunos para Alunos
                </TextoInfoTitulo>
                <TextoInfoDescricao>
                    Desenvolvida por alunos da Universidade Federal do Ceará
                </TextoInfoDescricao>
                <BotaoGenerico name='Entrar' destino='escolha'/>
            </div>
            <div className={style.itens}>
                <ImagemInfo image={alarm} descricao="Icone de alarme"/>
                <TextoInfoTitulo>
                    Gratuito e fácil de usar
                </TextoInfoTitulo>
                <TextoInfoDescricao>
                    Teste suas habilidades sobre circuitos elétricos
                </TextoInfoDescricao>
                <BotaoGenerico name='Aprender' destino='login'/>
            </div>
            <div className={style.itens}>
                <ImagemInfo image={pasta} descricao="Icone de pasta"/>
                <TextoInfoTitulo>
                    Compartilhe exercícios
                </TextoInfoTitulo>
                <TextoInfoDescricao>
                    Compartilhe lições com seus colegas ou alunos
                </TextoInfoDescricao>
                <BotaoGenerico name='Ensinar' destino='login'/>
            </div>              
        </div>
    </div>

    );
}
