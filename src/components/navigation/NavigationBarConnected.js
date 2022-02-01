import Logo from '../navigation/Logo';
import Spacer from './Spacer';
import GenericLink from './GenericLink';
import UserLink from './UserLink';
import style from "./NavigationBar.module.css";

export default function NavigationBarConnected(){
    return(
        <nav className={style}>
            <Logo/>
            <GenericLink path="simulador" description="Simulador"/>
            <Spacer/>
            <UserLink path="perfil" normal="Olá," user="Nome !" />
        </nav>
    );
}