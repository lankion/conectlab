import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/ammeter.svg';
import style from "./Amperimetro.module.css";

export default function Amperimetro(){
    const Amperimetro = draw2d.SVGFigure.extend({
        NAME: "Amperimetro",
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
            return `<svg width="64" height="23" viewBox="0 0 64 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_932_318)">
            <path d="M64 10.7H43.25C43.1276 7.79837 41.8889 5.05624 39.7925 3.04639C37.6961 1.03655 34.9042 -0.0855713 32 -0.0855713C29.0958 -0.0855713 26.3039 1.03655 24.2075 3.04639C22.1111 5.05624 20.8724 7.79837 20.75 10.7H0V11.85H20.75C20.8724 14.7516 22.1111 17.4937 24.2075 19.5036C26.3039 21.5134 29.0958 22.6355 32 22.6355C34.9042 22.6355 37.6961 21.5134 39.7925 19.5036C41.8889 17.4937 43.1276 14.7516 43.25 11.85H64V10.7ZM32 21.41C29.9965 21.41 28.0379 20.8159 26.3721 19.7028C24.7062 18.5897 23.4078 17.0076 22.6411 15.1566C21.8744 13.3055 21.6738 11.2687 22.0646 9.30372C22.4555 7.33869 23.4203 5.5337 24.837 4.11699C26.2537 2.70028 28.0587 1.7355 30.0237 1.34463C31.9888 0.953758 34.0256 1.15437 35.8766 1.92108C37.7276 2.6878 39.3097 3.98619 40.4228 5.65206C41.5359 7.31793 42.13 9.27646 42.13 11.28C42.1274 13.9658 41.0592 16.5409 39.1601 18.44C37.2609 20.3392 34.6858 21.4073 32 21.41Z" fill="black"/>
            <path d="M33.1 5.90995C33.0878 5.82872 33.0532 5.75251 33 5.68995C32.9189 5.623 32.8147 5.59067 32.71 5.59995H31.77C31.6657 5.59459 31.5629 5.62649 31.48 5.68995C31.4144 5.75134 31.3632 5.82647 31.33 5.90995L27.91 14.83C27.9053 14.8798 27.9053 14.9301 27.91 14.98C27.9105 15.0514 27.9392 15.1197 27.99 15.17C28.0136 15.1974 28.0428 15.2195 28.0755 15.235C28.1082 15.2505 28.1438 15.259 28.18 15.26H28.89C28.9356 15.2631 28.9814 15.2567 29.0244 15.2412C29.0675 15.2257 29.1068 15.2015 29.14 15.17C29.1842 15.13 29.2155 15.0778 29.23 15.02L29.99 13.02H34.51L35.27 15.02C35.2965 15.0766 35.3339 15.1276 35.38 15.17C35.4108 15.2017 35.4484 15.2263 35.4899 15.2419C35.5314 15.2574 35.5758 15.2636 35.62 15.26H36.32C36.392 15.2533 36.4594 15.2216 36.5105 15.1705C36.5616 15.1194 36.5933 15.052 36.6 14.98C36.6086 14.9303 36.6086 14.8796 36.6 14.83L33.1 5.90995ZM30.33 11.91L32.19 6.99995L34.05 11.9L30.33 11.91Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_932_318">
            <rect width="64" height="22.56" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    const [amperimetro , setAmperimetro] = useState();
    const dragEvent ={
        onDragStart: (e, amperimetro) =>{
            e.preventDefault();
            console.log("onDragStart");
            setAmperimetro(amperimetro = Amperimetro());
            e.dataTransfer.setData("text/plain", amperimetro);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um amperimetro"/>
            
            <p>AMPERIMETRO</p>
        </div>
    );
}



  