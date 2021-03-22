function newArmy(armyPositionX, armypositionY){

  let direction = [Math.random(),Math.random()];

  let container = new PIXI.Container();

  app.stage.addChild(container);

  PIXI.settings.SORTABLE_CHILDREN = true;

  // Create a new texture
  let texture = PIXI.Texture.from('pics/explorer.png');

  // Create a 5x5 grid of bunnies
  for (let i = 0; i < 16; i++) {
    let bunny = new PIXI.Sprite(texture);
    bunny.offsetX = 0;
    bunny.offsetY = 0;

    bunny.anchor.set(0.5);
    bunny.x = (i % 4) * 10;
    bunny.y = Math.floor(i / 4) * 10;
    container.addChild(bunny);

  }

  // Move container to the center
  container.x = armyPositionX; //app.screen.width / 2;
  container.y = armypositionY; //app.screen.height / 2;

  // Center bunny sprite in local container coordinates
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  return container;
}
