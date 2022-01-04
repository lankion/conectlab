import ImagemInfo from "./ImagemInfo";
import TextoInfo from "./TextoInfo";
import BotaoGenerico from "../basic/BotaoGenerico";
//import user from '../../images/user.svg';
//import alarm from '../../images/alarm.svg';
//import pasta from '../../imagem/folder.svg';

function BarraInfo(){
    return(
    <div>
        <TextoInfo>Porque usar o ConectLab?</TextoInfo>
        <ImagemInfo image=''/>       
        <TextoInfo>De Alunos para Alunos</TextoInfo>
        <BotaoGenerico name='Entrar'/>
        <ImagemInfo image=''/>  
        <TextoInfo>Gratuito e fácil de usar</TextoInfo> 
        <BotaoGenerico name='Aprender'/>
        <ImagemInfo image=''/>  
        <TextoInfo>Compartilhe exercícios</TextoInfo>
        <BotaoGenerico name='Ensinar'/>
    </div>
    );
}
export default BarraInfo;