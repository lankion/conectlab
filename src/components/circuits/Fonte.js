import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/battery.svg';
import style from "./Fonte.module.css";

export default function Fonte(){
    const Fonte = draw2d.SVGFigure.extend({
        NAME: "Fonte",
        VERSION: "0.0.1",
    
        init: function(){
            this._super();
            
            // Criansdo as conexões para a figuras e colocando uma label para alterar o valor
            const inputLocator = new draw2d.layout.locator.InputPortLocator();
            const outputLocator = new draw2d.layout.locator.OutputPortLocator();
    
            this.createPort("hybrid", inputLocator);
            this.createPort("hybrid", outputLocator);
            this.label = new draw2d.shape.basic.Label({
                text: "volts",
                color: "#0d0d0d",
                fontColor: "#0d0d0d",
            });
    
            this.add(this.label, new draw2d.layout.locator.TopLocator(this));
    
            this.label.installEditor( new draw2d.ui.LabelInplaceEditor());
        },
        /**
        *  Called by the simulator for every calculation
        *  loop
        *  @required
        **/
        calculate:function()
        {
        },
        /**
        *  Called if the simulation mode is starting
        *  @required
        **/
        onStart:function()
        {
        },
        /**
        *  Called if the simulation mode is stopping
        *  @required
        **/
        onStop:function()
        {
        },
        getSVG: function(){
            return `<svg width="64" height="25" viewBox="0 0 64 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_913_313)">
            <path d="M64 15.16H34.98V6.71997H33.66V24.92H34.98V16.48H64V15.16Z" fill="black"/>
            <path d="M28.42 15.16H0V16.48H28.42V21.04H29.74V10.59H28.42V15.16Z" fill="black"/>
            <path d="M27.61 2.63H21.09V3.95H27.61V2.63Z" fill="black"/>
            <path d="M38.17 6.72H39.49V3.95H42.13V2.63H39.49V0H38.17V2.63H35.61V3.95H38.17V6.72Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_913_313">
            <rect width="64" height="24.92" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    const [fonte , setFonte] = useState();
    const dragEvent ={
        onDragStart: (e, fonte) =>{
            e.preventDefault();
            console.log("onDragStart");
            setFonte(fonte = Fonte());
            e.dataTransfer.setData("text/plain", fonte);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um fonte"/>
            
            <p>FONTE</p>
        </div>
    );
}



  