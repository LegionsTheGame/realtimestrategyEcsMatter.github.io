
function collisionSystem2_update_collision_grid(army, collision_grid,offset, grid_size) {

  var col = Math.floor((army.x - offset) / grid_size); //størrelsen af en enhed er som et "punkt"
  var row = Math.floor((army.y - offset) / grid_size);

  if (col > 10 || row > 10) return; //grid 10x10 : kun detection indenfor dettte område

  var index = col * 10 + row; // grid index tælles fra venstre mod højre

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
          if(army1 != army2){
            if(circle_collision_detect(army1,army2))
              move_away(army1,army2);
          }

        }
      }


    }
  }
}
