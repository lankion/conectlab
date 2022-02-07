import draw2d from "draw2d";
export default function Test(){
    const Resistor = draw2d.SVGFigure.extend({
        NAME: "Resistor",
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
        getSVG: function(){
            return `<svg width="64" height="10" viewBox="0 0 64 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_913_323)">
            <path d="M48.19 4V0H16.26V4H0V5.1H16.26V9.29H48.19V5.1H64V4H48.19ZM47 8.14H17.41V1.14H47V8.14Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_913_323">
            <rect width="64" height="9.29" fill="white"/>
            </clipPath>
            </defs>
            </svg>`;
    
        },
    });
    return(
        <div>
            Test
        </div>
    );
}