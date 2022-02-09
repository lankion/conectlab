import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/capacitor.svg';
import style from "./Capacitor.module.css";

export default function Capacitor(){
    const Capacitor = draw2d.SVGFigure.extend({
        NAME: "Capacitor",
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
            return `<svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_913_318)">
            <path d="M64 15.19H36.01V0H34.85V31.78H36.01V16.36H64V15.19Z" fill="black"/>
            <path d="M27.07 15.3L0.01 15.19L0 16.36L27.07 16.47V31.78H28.24V0H27.07V15.3Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_913_318">
            <rect width="64" height="31.78" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    const [capacitor , setCapacitor] = useState();
    const dragEvent ={
        onDragStart: (e, capacitor) =>{
            e.preventDefault();
            console.log("onDragStart");
            setCapacitor(capacitor = Capacitor());
            e.dataTransfer.setData("text/plain", capacitor);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um capacitor"/>
            
            <p>CAPACITOR</p>
        </div>
    );
}



  