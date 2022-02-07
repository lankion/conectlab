import { useEffect } from 'react';
import draw2d from "draw2d";
import style from './SimulatedSpace.module.css';
export default function SimulatedSpace(){
    useEffect(() => {
        const canvas = new draw2d.Canvas("canvas");
    }, []);
    return(
        <div  id="canvas" className={style.container}>
        </div>
    );
}
