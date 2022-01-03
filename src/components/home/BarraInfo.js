import ImagemInfo from "./ImagemInfo";
import TextoInfo from "./TextoInfo";
import BotaoGenerico from "../basic/BotaoGenerico";
//import user from '../../images/user.svg';
//import alarm from '../../images/alarm.svg';
//import pasta from '../../imagem/folder.svg';

function BarraInfo(){
    return(
    <div>
        <ImagemInfo image=''/>       
        <TextoInfo descricao='De Alunos para Alunos'/>
        <BotaoGenerico name='Entrar'/>
        <ImagemInfo image=''/>  
        <TextoInfo descricao='Gratuito e fácil de usar'/>
        <BotaoGenerico name='Aprender'/>
        <ImagemInfo image=''/>  
        <TextoInfo descricao='Compartilhe exercícios'/>
        <BotaoGenerico name='Ensinar'/>
    </div>
    );
}
export default BarraInfo;