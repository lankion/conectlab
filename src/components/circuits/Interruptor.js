import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/switch.svg';
import style from "./Interruptor.module.css";

export default function Interruptor(){
    const Interruptor = draw2d.SVGFigure.extend({
        NAME: "Interruptor",
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
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.7 27.03"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_3" data-name="Camada 3"><line class="cls-1" x1="40.29" y1="13.53" x2="55.7" y2="13.53"/><line class="cls-1" y1="13.53" x2="15.05" y2="13.53"/><path d="M27.85,1.66l12,12-12,12-12-12,12-12m0-1.41L14.46,13.64,27.85,27,41.24,13.64,27.85.25Z"/><rect x="13.68" width="27.78" height="1"/><rect x="19.07" y="9.39" width="17.89" height="1"/><rect x="18.2" y="16.34" width="18.98" height="1"/></g></g></svg>`;
    
        },
    });
    const [interruptor , setInterruptor] = useState();
    const dragEvent ={
        onDragStart: (e, interruptor) =>{
            e.preventDefault();
            console.log("onDragStart");
            setInterruptor(interruptor = Interruptor());
            e.dataTransfer.setData("text/plain", interruptor);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um interruptor"/>
            
            <p>INTERRUPTOR</p>
        </div>
    );
}



  