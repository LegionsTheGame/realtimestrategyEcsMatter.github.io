let collision_grid = [];

function collisionSystem2_init_collision_grid(){
  collision_grid = [];
}

function collisionSystem2_update_collision_grid(army){

  var col   = Math.floor(army.x/100);
  var row   = Math.floor(army.y/100);

  if(col>10 || row> 10 ) return;   //grid 10x10 : kun detection indenfor dettte område

  var index = col*10+row;       // grid index tælles fra venstre mod højre

  if(!collision_grid[index]){
    collision_grid[index] = [army];
  }else{
    collision_grid[index].push(army);
  }
}

function collisionSystem2_collisionHandling(){
  console.log(collision_grid);
  for(var i=0; i< collision_grid.length; i++){
    var fieldList = collision_grid[i];
    if(collision_grid[i]){

      for(var j=0; j < fieldList.length; j++){
          var army = fieldList[j];
          updateDebugTextGrid(army,i);    //debug text : What index in te grid???
      }
    }
  }

}
