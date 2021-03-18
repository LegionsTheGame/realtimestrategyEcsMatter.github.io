//Spilobjekter
for (var k = 0; k < 3; k++) {
  newArmy(200 * k + 200, 100);
}

//Debug grafik
gridDebug();


//Game loop
app.ticker.add((delta) => {

  for (var j = 0; j < app.stage.children.length; j++) {
    var container = app.stage.children[j];
    //Army: Stuff
    if (container.name == "army") {

      //ARMY: Collision detection
      system_collsionHandling(container);
      //ARMY: Movement
      system_moveArmy(container);
    }
  }

});
