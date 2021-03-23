function collisionSystem1_collsionHandling(container1) {
  for (var j = 0; j < app.stage.children.length; j++) { //NOT FINISHED : shold only be all containers
    var container2 = app.stage.children[j];
    if (container2 == container1) return; //{                //Prevent "self collision"
    if (circle_collision_detect(container1.getBounds(), container2.getBounds())) {
      //COLISION DETECTED

      move_away(container1, container2);

    }
  }
}

function move_away(container1, container2) {
  var bounds1 = container1.getBounds();
  var bounds2 = container2.getBounds();
  var a_center_x = bounds1.x + bounds1.width / 2;
  var a_center_y = bounds1.y + bounds1.height / 2;
  var b_center_x = bounds2.x + bounds2.width / 2;
  var b_center_y = bounds2.y + bounds2.height / 2;
  //var delta_x = a_center_x - b_center_x;
  //var delta_y = a_center_y - b_center_y;
  var delta   =  [a_center_x - b_center_x, a_center_y - b_center_y];
  var delta_l =  getDistance(delta);
  var unit1   =  unitVector(delta);
  var moveDist = 0.5*(( bounds1.width + bounds1.height + bounds2.width + bounds2.height)/4 - delta_l);
  container1.x += unit1[0] * moveDist;
  container1.y += unit1[1] * moveDist;
  container2.x -= unit1[0] * moveDist;
  container2.y -= unit1[1] * moveDist;
}

function circle_collision_detect(bounds1, bounds2) {
  var a_center_x = bounds1.x + bounds1.width / 2;
  var a_center_y = bounds1.y + bounds1.height / 2;
  var b_center_x = bounds2.x + bounds2.width / 2;
  var b_center_y = bounds2.y + bounds2.height / 2;
  var delta_x = a_center_x - b_center_x;
  var delta_y = a_center_y - b_center_y;
  var min_dist = (bounds1.width + bounds1.height + bounds2.width + bounds2.height) / 4;
  var dist = Math.sqrt(delta_x * delta_x + delta_y * delta_y);
  return min_dist > dist; //Overlap of surrounding circle
}
