function addWayPoint(selected_x, selected_y, army) {
    army.wayPoints.push([selected_x,selected_y]);
    drawOnlyArmyPoints(army);
}


function drawOnlyArmyPoints(army){
          for (var i = 0; i < wayCirclePoints.length; i++) {
            app.stage.removeChild(wayCirclePoints[i]);
          }

          for(var i = 0; i < army.wayPoints.length; i++){
              var p = army.wayPoints[i];
              drawWayPoint(p[0],p[1],army);
          }
}


function drawWayPoint(selected_x, selected_y, army){
    var circle = new PIXI.Graphics();

    // define outline = stroke
    circle.lineStyle(2, 0x91CF46, 1);

    console.log("select to draw " + selected_x + "," + selected_y);

    circle.drawCircle(selected_x, selected_y, 20);

    app.stage.addChild(circle);

    //ALL WAYPOINTS SHOWN: Så de hurtigt kan slettes igen
    wayCirclePoints.push(circle);
}


function armySelector(army, selected_x, selected_y) {

  var selected = false;

  var delta_x = army.x - selected_x;
  var delta_y = army.y - selected_y;

  var dist = Math.sqrt(delta_x * delta_x + delta_y * delta_y);

  if((army.armySize + army.armySize)/2 > dist){
      selected = true;
  }

  return selected;
}
