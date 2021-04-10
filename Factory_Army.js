function newArmy(armyPositionX, armypositionY){

  let army = new PIXI.Container();

  app.stage.addChild(army);

  // Create a new soldier_texture
  let soldier_texture = PIXI.Texture.from('pics/explorer.png');

  // Create a 5x5 grid of bunnies
  for (let i = 0; i < 16; i++) {
    let soldier = new PIXI.Sprite(soldier_texture);
    soldier.offsetX = 0;
    soldier.offsetY = 0;
    soldier.anchor.set(0.5);
    soldier.x = (i % 4) * 12;
    soldier.y = Math.floor(i / 4) * 12;
    army.addChild(soldier);
  }

  // Move army to the center
  army.x = armyPositionX; //app.screen.width / 2;
  army.y = armypositionY; //app.screen.height / 2;

  // Center soldier sprite in local army coordinates
  army.pivot.x = army.width / 2;
  army.pivot.y = army.height / 2;

  //Speciel Army Data: ///////////////////////////////////////////////
  army.armySize = 60;
  army.selected = false;


  return army;
}
