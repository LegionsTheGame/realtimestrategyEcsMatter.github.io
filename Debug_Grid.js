function gridDebug() {
  var container = new PIXI.Container();
  app.stage.addChild(container);



  for (var i = 0; i < 10; i++) {
    let myGraph = new PIXI.Graphics();

    // Move it to the beginning of the line
    myGraph.position.set(grid1_field_width*i, 0);

    // Draw the line (endPoint should be relative to myGraph's position)
    myGraph.lineStyle(2, 0xffffff)
      .moveTo(0, 0)
      .lineTo(0, 1000);
    container.addChild(myGraph);

  }

  for (var i = 0; i < 10; i++) {
    let myGraph = new PIXI.Graphics();

    // Move it to the beginning of the line
    myGraph.position.set(0, grid1_field_height*i);

    // Draw the line (endPoint should be relative to myGraph's position)
    myGraph.lineStyle(2, 0xffffff)
      .moveTo(0, 0)
      .lineTo(1000, 0);
    container.addChild(myGraph);

  }


}
