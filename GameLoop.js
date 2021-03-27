//grid
var collision_grid1 = [];
//var collision_grid2 = [];


//array - spilobjekter
var armies = [];

//skabe - spilobjekter
for (var k = 0; k < 30; k++) {
  for (var l = 0; l < 30; l++) {

    let a = newArmy(250 * l + 100, k * 250);
    armies.push(a);

    //addDbugTextTo(a);
  }
}

//Debug grafik
gridDebug(grid1_size, 0, 1, 0xffffff); //0 er offset og 2 er strokeWidth
//gridDebug(grid2_size, grid_offset,1,0xFF0000); //0 er offset og 2 er strokeWidth


//Game loop
app.ticker.add((delta) => {

  collision_grid1 = []; //GRIDSYSTEM  - 1 / 3

  //  collision_grid2 = [];

  for (var i = 0; i < armies.length; i++) {

    var a = armies[i]; //virker ikke med for-in loop - ved ikke hvorfor ??

    collisionSystem2_update_collision_grid(a, collision_grid1, 0, grid1_size); //GRIDSYSTEM  - 2 / 3
    //collisionSystem2_update_collision_grid(a, collision_grid2, grid_offset, grid2_size);

    //collisionSystem1_collsionHandling(a); //meget langsom collision handling

    //if (i <200) {
      system_moveArmy(a);
    //}
    updateDebugText(a);


  }

  collisionSystem2_collisionHandling(collision_grid1); //GRIDSYSTEM  - 3 / 3
  //collisionSystem2_collisionHandling(collision_grid2);
});
