import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/button.svg';
import style from "./Botao.module.css";

export default function Botao(){
    const Botao = draw2d.SVGFigure.extend({
        NAME: "Botao",
        VERSION: "0.0.1",
    
        init: function(){
            this._super();
            
            // Criando as conexões para a figuras e colocando uma label para alterar o valor
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
            return `<svg width="64" height="28" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_913_298)">
            <path d="M22.35 26.64H0V27.81H22.35V26.64Z" fill="black"/>
            <path d="M42.72 26.64L32.41 20.77V14.44H31.24V20.1L18.36 12.76L17.78 13.78L42.27 27.74L42.56 27.23V27.82H64V26.64H42.72Z" fill="black"/>
            <path d="M27.38 1.17H31.24V8.99H32.41V1.17H36.47V5.95H37.64V0H26.21V5.95H27.38V1.17Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_913_298">
            <rect width="64" height="27.82" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    const [botao , setBotao] = useState();
    const dragEvent ={
        onDragStart: (e, botao) =>{
            e.preventDefault();
            console.log("onDragStart");
            setBotao(botao = Botao());
            e.dataTransfer.setData("text/plain", botao);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um botão"/>
            
            <p>BOTÃO</p>
        </div>
    );
}



  