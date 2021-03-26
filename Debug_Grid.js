function gridDebug(grid_size,offset,strokeWidth,color) {
  var container = new PIXI.Container();
  app.stage.addChild(container);


//GRID 1

  for (var i = 0; i < 10; i++) {
    let myGraph = new PIXI.Graphics();

    // Move it to the beginning of the line
    myGraph.position.set(grid_size*i + offset, 0);

    // Draw the line (endPoint should be relative to myGraph's position)
    myGraph.lineStyle(strokeWidth, color)
      .moveTo(0, 0)
      .lineTo(0, grid_size*10);
    container.addChild(myGraph);

  }

  for (var i = 0; i < 10; i++) {
    let myGraph = new PIXI.Graphics();

    // Move it to the beginning of the line
    myGraph.position.set(0, grid_size*i + offset);

    // Draw the line (endPoint should be relative to myGraph's position)
    myGraph.lineStyle(strokeWidth, color)
      .moveTo(0, 0)
      .lineTo(grid_size*10, 0);
    container.addChild(myGraph);

  }


}
