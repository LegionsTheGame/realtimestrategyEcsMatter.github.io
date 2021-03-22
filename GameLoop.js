//array - spilobjekter
var armies = [];

//skabe - spilobjekter
for (var k = 0; k < 100; k++) {
  let a = newArmy(200 * k + 200, 100);
  armies.push(a);

  addDbugTextTo(a);
}

//Debug grafik
gridDebug();

//Game loop
app.ticker.add((delta) => {

  collisionSystem2_init_collision_grid();

  for(var i= 0; i < armies.length ; i++){

      var a = armies[i];                     //virker ikke med for-in loop - ved ikke hvorfor ??

      collisionSystem2_update_collision_grid(a);

      //collisionSystem1_collsionHandling(a);    //meget langsom collision handling

      system_moveArmy(a);

      //updateDebugText(a);
    }

    collisionSystem2_collisionHandling();

});
