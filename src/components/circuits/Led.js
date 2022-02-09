import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/led.svg';
import style from "./Led.module.css";

export default function Led(){
    const Led = draw2d.SVGFigure.extend({
        NAME: "Led",
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
            <g clip-path="url(#clip0_913_303)">
            <path d="M64 10.7H43.25C43.1348 8.4453 42.3445 6.27728 40.9816 4.47737C39.6187 2.67747 37.7463 1.32882 35.6073 0.606477C33.4683 -0.115863 31.1616 -0.178527 28.9865 0.426617C26.8115 1.03176 24.8686 2.27677 23.41 4.00002C21.8241 5.87779 20.9 8.2251 20.78 10.68H0V11.83H20.75C20.8724 14.7316 22.1111 17.4738 24.2075 19.4836C26.3039 21.4935 29.0958 22.6156 32 22.6156C34.9042 22.6156 37.6961 21.4935 39.7925 19.4836C41.8889 17.4738 43.1276 14.7316 43.25 11.83H64V10.7ZM38.8 3.79002L31.8 10.79L25 4.00002C26.8455 2.21423 29.3026 1.19934 31.8704 1.16218C34.4382 1.12502 36.9236 2.06838 38.82 3.80002L38.8 3.79002ZM24.19 4.79002L31 11.61L24.54 18.07C22.8988 16.2728 21.9626 13.943 21.9037 11.5099C21.8449 9.07678 22.6676 6.70442 24.22 4.83002L24.19 4.79002ZM25.33 18.84L31.78 12.38L38.45 19.05C36.5972 20.5851 34.2569 21.4075 31.8512 21.369C29.4455 21.3305 27.1327 20.4336 25.33 18.84ZM39.33 18.26L32.6 11.61L39.6 4.61002C41.1385 6.3457 42.0258 8.56219 42.11 10.88V11.68C42.0213 14.1615 41.0125 16.5212 39.28 18.3L39.33 18.26Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_913_303">
            <rect width="64" height="22.56" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    const [led , setLed] = useState();
    const dragEvent ={
        onDragStart: (e, led) =>{
            e.preventDefault();
            console.log("onDragStart");
            setLed(led = Led());
            e.dataTransfer.setData("text/plain", led);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um ressitor"/>
            
            <p>LED</p>
        </div>
    );
}



  