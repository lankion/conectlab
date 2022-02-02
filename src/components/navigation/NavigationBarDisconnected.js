import Logo from "../navigation/Logo";
import Spacer from './Spacer';
import ButtonRegister from './ButtonRegister';
import GenericLink from "./GenericLink";
import style from "./NavigationBar.module.css";
import { Outlet } from "react-router-dom";

export default function NavigationBarDisconnected(){
    return(
        <div>
            <nav className={style.nav}>
                <Logo/>
                <GenericLink path='simulador' description="Simulador"/>
                <Spacer/>
                <GenericLink path='login' description="Entrar"/>
                <ButtonRegister/>     
            </nav>
            <Outlet/>                
        </div>
    );
}
