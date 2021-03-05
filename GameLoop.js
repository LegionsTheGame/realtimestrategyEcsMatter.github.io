for (var k = 0; k < 2; k++) {
  newArmy(200 * k + 200, 100);
}

//DETTE ER MIT FØRSTE GAME_LOOP...
app.ticker.add((delta) => {

  for (var j = 0; j < app.stage.children.length; j++) {

    var container = app.stage.children[j];

    system_collsionHandling(container);

    system_moveArmy(container);

  }

});
