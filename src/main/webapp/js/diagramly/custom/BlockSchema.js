/* Component library */
var customGeometryService = function () {
  return {
    drawLine: function (startCell, endCell) {
      var lineGeometry = new mxGeometry();
      lineGeometry.relative = true;
      //lineGeometry.targetPoint = new mxPoint(10, 10)

      var likw = new mxCell("",
          lineGeometry,
          "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;"
      )
      likw.edge = 1;
      if (startCell) {
        likw.setTerminal(startCell, true);
      }
      if (endCell) {
        likw.setTerminal(endCell, false);
      }

      return likw;
    },
    startPoint: function (x, y) {
      var newElement = new mxCell("",
          new mxGeometry(x, y, 40, 40),
          "shape=mxgraph.bpmn.shape;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=ellipsePerimeter;outlineConnect=0;outline=standard;symbol=general;"
      );
      newElement.vertex = 1;
      return newElement;
    },
    /**
     * x, y, text
     */
    userTask: function (props) {
      var userTask = new mxCell(props.text,
          new mxGeometry(props.x, props.y, 80, 80),
          "shape=mxgraph.flowchart.process;rounded=1;html=1;whiteSpace=wrap;"
      );

      userTask.vertex = 1;
      return userTask;
    }
  }
};

var customGeometry = customGeometryService();

// example
var jsonExample = {

};



/* draw window */
var BlockSchemaWindow = function (editor) {
  console.log("@debug... createEditor")
  var theGraph = editor.graph;


  return {
    drawExample: function () {

      var startPoint = customGeometry.startPoint(40, 40);
      var block = customGeometry.userTask({x: 120, y: 20, text: "Task" });

      theGraph.addCell(customGeometry.drawLine(startPoint, block));
      theGraph.addCell(startPoint);
      theGraph.addCell(block);
    }

  }


}