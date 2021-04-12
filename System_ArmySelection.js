function armySelector(army, selected_x, selected_y) {

  var selected = false;

  //console.log("TRY TO SELECT ARMY" + army);

  var delta_x = army.x - selected_x;
  var delta_y = army.y - selected_y;

  var dist = Math.sqrt(delta_x * delta_x + delta_y * delta_y);

  if((army.armySize + army.armySize)/2 > dist){
    //  console.log("ARMY IS NOW SELECTED!!!" + army);
    //  army.selected = true;
      selected = true;
  }

  return selected;
}

function drawWayPoint(selected_x, selected_y){

    var circle = new PIXI.Graphics();

    // define outline = stroke
    circle.lineStyle(2, 0x91CF46, 1);

    // draw circle (x, y, radius)
    circle.drawCircle(selected_x, selected_y, 20);

    app.stage.addChild(circle);

}


function addWayPoint(selected_x, selected_y, army) {


    army.wayPoints.push([selected_x,selected_y]);

    drawWayPoint(selected_x, selected_y);

}
