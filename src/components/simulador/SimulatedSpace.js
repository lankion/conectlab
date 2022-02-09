import { useEffect, useState } from 'react';
import draw2d from "draw2d";
import style from './SimulatedSpace.module.css';
export default function SimulatedSpace(){
    useEffect(() => {
        const canvas = new draw2d.Canvas("canvas");
    }, []);
    const [circut, setCircut] = useState([]);
    const dragEvents ={
        onDragEnter: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDragEnter");
        },
        onDragLeave: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDragLeave");
        },
        onDragOver: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDragOver");
        },
        onDrop: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDrop");
            e.dataTransfer.getData("text");

        },
    };
    return(
        <div  id="canvas" className={style.container} draggable="true"  {...dragEvents}>
            
        </div>
    );
}
