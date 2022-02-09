import { useState } from "react";
import draw2d from "draw2d";
import imagem from '../../images/voltmeter.svg';
import style from "./Voltimetro.module.css";

export default function Voltimetro(){
    const Voltimetro = draw2d.SVGFigure.extend({
        NAME: "Voltimetro",
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
            <g clip-path="url(#clip0_932_328)">
            <path d="M64 10.7H43.25C43.1276 7.79837 41.8889 5.05624 39.7925 3.04639C37.6961 1.03655 34.9042 -0.0855713 32 -0.0855713C29.0958 -0.0855713 26.3039 1.03655 24.2075 3.04639C22.1111 5.05624 20.8724 7.79837 20.75 10.7H0V11.85H20.75C20.8724 14.7516 22.1111 17.4937 24.2075 19.5036C26.3039 21.5134 29.0958 22.6355 32 22.6355C34.9042 22.6355 37.6961 21.5134 39.7925 19.5036C41.8889 17.4937 43.1276 14.7516 43.25 11.85H64V10.7ZM32 21.41C29.9965 21.41 28.0379 20.8159 26.3721 19.7028C24.7062 18.5897 23.4078 17.0076 22.6411 15.1566C21.8744 13.3055 21.6738 11.2687 22.0646 9.30372C22.4555 7.33869 23.4203 5.5337 24.837 4.11699C26.2537 2.70028 28.0587 1.7355 30.0237 1.34463C31.9888 0.953758 34.0256 1.15437 35.8766 1.92108C37.7276 2.6878 39.3097 3.98619 40.4228 5.65206C41.5359 7.31793 42.13 9.27646 42.13 11.28C42.1274 13.9658 41.0592 16.5409 39.1601 18.44C37.2609 20.3392 34.6858 21.4073 32 21.41Z" fill="black"/>
            <path d="M35.65 6.74993H34.93C34.8844 6.74678 34.8386 6.75316 34.7956 6.76865C34.7525 6.78415 34.7132 6.80842 34.68 6.83993C34.6379 6.88928 34.601 6.9429 34.57 6.99993L31.87 14.8199L29.18 6.99993C29.1484 6.94081 29.1079 6.88685 29.06 6.83993C29.0269 6.80842 28.9875 6.78415 28.9445 6.76865C28.9014 6.75316 28.8557 6.74678 28.81 6.74993H28.09C28.0537 6.75023 28.0179 6.75844 27.9851 6.77398C27.9523 6.78953 27.9233 6.81203 27.9 6.83993C27.8734 6.86366 27.8524 6.89303 27.8386 6.9259C27.8247 6.95876 27.8184 6.9943 27.82 7.02993C27.8103 7.07946 27.8103 7.1304 27.82 7.17993L30.9 16.0499C30.9373 16.1503 30.9992 16.2397 31.08 16.3099C31.1761 16.3784 31.2921 16.4136 31.41 16.4099H32.3C32.4124 16.4181 32.524 16.3865 32.6154 16.3207C32.7068 16.2549 32.7722 16.1591 32.8 16.0499L35.89 7.17993C35.8995 7.13037 35.8995 7.07948 35.89 7.02993C35.8897 6.99362 35.8815 6.95782 35.866 6.92501C35.8504 6.89219 35.8279 6.86316 35.8 6.83993C35.7609 6.79468 35.7084 6.76314 35.65 6.74993Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_932_328">
            <rect width="64" height="22.56" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    const [voltimetro , setVoltimetro] = useState();
    const dragEvent ={
        onDragStart: (e, voltimetro) =>{
            e.preventDefault();
            console.log("onDragStart");
            setVoltimetro(voltimetro = Voltimetro());
            e.dataTransfer.setData("text/plain", voltimetro);
        }
    };
    return(
        
        <div className={style.box} draggable="true" {...dragEvent} >
            <img src={imagem} alt="Figura de um voltimetro"/>
            
            <p>VOLTIMETRO</p>
        </div>
    );
}



  