function collisionSystem2_update_collision_grid(army, collision_grid, offset, grid_size) {

  //ONLY ADDED TO ONE FIELD
/*  var col = Math.floor((army.x - offset) / grid_size); //størrelsen af en enhed er som et "punkt"
  var row = Math.floor((army.y - offset) / grid_size);

  if (col > 10 || row > 10) return; //grid 10x10 : kun detection indenfor dettte område

  var index = col * 10 + row; // grid index tælles fra venstre mod højre
  collisionSystem2_addGamObject(collision_grid, index, army);*/

  //MULTIPLE ADD
  //MÅSKE HURTIGERE MED HARCODED BOUNDS ?!?!?!!?!?
  //var bounds = army.getBounds();
  var col1 = Math.floor((army.x - army_bounds / 2 - offset) / grid_size);

  if(col1 > 18 ) return;

  var col2 = Math.floor((army.x + army_bounds / 2 - offset) / grid_size);
  var row1 = Math.floor((army.y - army_bounds / 2 - offset) / grid_size);

  if(row1 > 10 ) return;

  var row2 = Math.floor((army.y + army_bounds / 2 - offset) / grid_size);

  var index1 = col1 * 10 + row1;
  var index2 = col2 * 10 + row1;
  var index3 = col1 * 10 + row2;
  var index4 = col2 * 10 + row2;

  collisionSystem2_addGamObject(collision_grid, index1, army);
  if (index2 != index1)
    collisionSystem2_addGamObject(collision_grid, index2, army);
  if (index3 != index2 && index3 != index1)
    collisionSystem2_addGamObject(collision_grid, index3, army);
  if (index4 != index3 && index4 != index2 && index4 != index1)
    collisionSystem2_addGamObject(collision_grid, index4, army);
}


function collisionSystem2_addGamObject(collision_grid, index, army) {
  if (!collision_grid[index]) {
    collision_grid[index] = [army];
  } else {
    collision_grid[index].push(army);
  }
}


function collisionSystem2_collisionHandling(collision_grid) {

  for (var i = 0; i < collision_grid.length; i++) {
    var fieldList = collision_grid[i];
    if (collision_grid[i]) {

      for (var j = 0; j < fieldList.length; j++) {

        var army1 = fieldList[j];
        //  updateDebugTextGrid(army1, i); //debug text : What index in te grid???

        for (var k = 0; k < fieldList.length; k++) {
          var army2 = fieldList[k];
          if (army1 != army2) {
            if (circle_collision_detect2(army1, army2))
              move_away2(army1, army2);
          }

        }
      }


    }
  }
}
