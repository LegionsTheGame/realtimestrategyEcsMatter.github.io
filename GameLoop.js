//grid
var collision_grid1 = [];
var collision_grid2 = [];


//array - spilobjekter
var armies = [];

//skabe - spilobjekter
for (var k = 0; k < 200; k++) {
  let a = newArmy(100 * k + 100, 100);
  armies.push(a);

  //  addDbugTextTo(a);
}

//Debug grafik
gridDebug();

//Game loop
app.ticker.add((delta) => {

  collision_grid1 = []; //GRIDSYSTEM  - 1 / 3
  collision_grid2 = [];

  for (var i = 0; i < armies.length; i++) {

    var a = armies[i]; //virker ikke med for-in loop - ved ikke hvorfor ??

    collisionSystem2_update_collision_grid(a, collision_grid1, 0); //GRIDSYSTEM  - 2 / 3
    collisionSystem2_update_collision_grid(a, collision_grid2, grid_offset);

    //collisionSystem1_collsionHandling(a); //meget langsom collision handling

    system_moveArmy(a);

    //updateDebugText(a);
  }

  collisionSystem2_collisionHandling(collision_grid1); //GRIDSYSTEM  - 3 / 3
  collisionSystem2_collisionHandling(collision_grid2);
});
