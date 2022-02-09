import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/connector.svg';
import style from "./Conector.module.css";

export default function Conector(){
    const Conector = draw2d.SVGFigure.extend({
        NAME: "Conector",
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
            return `<svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_932_233)">
            <path d="M46.18 5.45001H26.94V17.73H46.18V5.45001Z" fill="black"/>
            <path d="M64 10.78H46.18V12.39H64V10.78Z" fill="black"/>
            <path d="M20 11.59C20 7.59 22.13 3.33 26.81 3.33H27.62V0H26V1.75C24.9031 1.83832 23.8382 2.16289 22.8785 2.70143C21.9188 3.23998 21.0869 3.97975 20.44 4.87C19.224 6.60928 18.5301 8.65971 18.44 10.78H0V12.4H18.44C18.72 16.78 21.31 21 26.03 21.4V23.15H27.64V19.85H26.83C22.15 19.85 20 15.57 20 11.59Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_932_233">
            <rect width="64" height="23.18" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    const [conector , setConector] = useState();
    const dragEvent ={
        onDragStart: (e, conector) =>{
            e.preventDefault();
            console.log("onDragStart");
            setConector(conector = Conector());
            e.dataTransfer.setData("text/plain", conector);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um conector"/>
            
            <p>CONECTOR</p>
        </div>
    );
}



  