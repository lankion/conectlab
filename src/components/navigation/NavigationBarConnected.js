import Logo from '../navigation/Logo';
import Spacer from './Spacer';
import GenericLink from './GenericLink';
import UserLink from './UserLink';
import style from "./NavigationBar.module.css";
import { Outlet } from 'react-router-dom';

export default function NavigationBarConnected(){
    return(
        <div>
            <nav className={style}>
                <Logo/>
                <GenericLink path="simulador" description="Simulador"/>
                <Spacer/>
                <UserLink path="perfil" normal="Olá," user="Nome !" />
            </nav>
        <Outlet/>
        </div>  
    );
}