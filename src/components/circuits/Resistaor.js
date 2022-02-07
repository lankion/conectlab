Resistor = draw2d.SVGFigure.extend({
    NAME: "Resistor",
  
    init: function () {
      this._super();
      var inputLocator = new draw2d.layout.locator.InputPortLocator();
      var outputLocator = new draw2d.layout.locator.OutputPortLocator();
  
      this.createPort("hybrid", inputLocator);
      this.createPort("hybrid", outputLocator);
      this.label = new draw2d.shape.basic.Label({
        text: "Value",
        color: "#0d0d0d",
        fontColor: "#0d0d0d",
      });
  
      // add the new decoration to the connection with a position locator.
      //
      this.add(this.label, new draw2d.layout.locator.TopLocator(this));
  
      this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
  
      // labels are added via JSON document.
    },
  
    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes: function () {
      var memento = this._super();
  
      // add all decorations to the memento
      //
      memento.labels = [];
      this.children.each(function (i, e) {
        var labelJSON = e.figure.getPersistentAttributes();
        labelJSON.locator = e.locator.NAME;
        memento.labels.push(labelJSON);
      });
  
      return memento;
    },
  
    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes: function (memento) {
      this._super(memento);
  
      // remove all decorations created in the constructor of this element
      //
      this.resetChildren();
  
      // and add all children of the JSON document.
      //
      $.each(
        memento.labels,
        $.proxy(function (i, json) {
          // create the figure stored in the JSON
          var figure = eval("new " + json.type + "()");
  
          // apply all attributes
          figure.attr(json);
  
          // instantiate the locator
          var locator = eval("new " + json.locator + "()");
  
          // add the new figure as child to this figure
          this.add(figure, locator);
        }, this)
      );
    },
    onDoubleClick: function () {
      this.setRotationAngle((this.getRotationAngle() + 90) % 360);
    },
    getSVG: function () {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> +
      '<line x1="0" y1="5" x2="20" y2="5" stroke="black"/>'+
      '<line x1="20" y1="5" x2="25" y2="0" stroke="black"/>'+
      '<line x1="25" y1="0" x2="30" y2="10" stroke="black"/>'+
      '<line x1="30" y1="10" x2="35" y2="0" stroke="black"/>'+
      '<line x1="35" y1="0" x2="40" y2="10" stroke="black"/>'+
      '<line x1="40" y1="10" x2="45" y2="0" stroke="black"/>'+
      '<line x1="45" y1="0" x2="50" y2="10" stroke="black"/>'+
      '<line x1="50" y1="10" x2="55" y2="0" stroke="black"/>'+
      '<line x1="55" y1="0" x2="60" y2="5" stroke="black"/>'+
      '<line x1="60" y1="5" x2="80" y2="5" stroke="black"/>'+
        </svg>`;
    },
  });












// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_digital_display_Led = CircuitFigure.extend({

   NAME: "circuit_digital_display_Led",
   VERSION: "2.0.343_1136",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:30,height:32},attr), setter, getter);
     var port;
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.3333333333333335, y: 51.5625 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 30;
      this.originalHeight= 32;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L30,0 L30,32 L0,32");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15,"ry":16,"cx":15,"cy":16,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // Line
       shape = this.canvas.paper.path('M5.522100000000137 5.682400000001508L15.138100000001941,16.496800000000803L24.754100000001927,27.31119999999919');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M25.94430000000102 5.062700000001314L5.283199999999852,27.963700000000244');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
circuit_digital_display_Led = circuit_digital_display_Led.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    
    calculate: function()
    {
        var port = this.getInputPort(0);
        if(port.hasChangedValue()){
            this.layerAttr("circle",{fill: port.getBooleanValue()?"#C21B7A":"#f0f0f0"});
        }
    }
});

import draw2d from "draw2d";
var Resistor = draw2d.SVGFigure.extend({
    NAME: "Resistor",
    VERSION: "0.0.1",

    init: function(){
        this._super();
        
        // Criansdo as conexões para a figuras e colocando uma label para alterar o valor
        var inputLocator = new draw2d.layout.locator.InputPortLocator();
        var outputLocator = new draw2d.layout.locator.OutputPortLocator();

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
export default Resistor;