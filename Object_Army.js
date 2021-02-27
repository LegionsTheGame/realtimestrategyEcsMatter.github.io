function newArmy(armyPositionX, armypositionY){

  const direction = [Math.random(),Math.random()];

  const container = new PIXI.Container();

  app.stage.addChild(container);

  // Create a new texture
  const texture = PIXI.Texture.from('explorer.png');

  // Create a 5x5 grid of bunnies
  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.offsetX = 0;
    bunny.offsetY = 0;

    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 20;
    bunny.y = Math.floor(i / 5) * 20;
    container.addChild(bunny);
  }

  // Move container to the center
  container.x = armyPositionX; //app.screen.width / 2;
  container.y = armypositionY; //app.screen.height / 2;

  // Center bunny sprite in local container coordinates
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

}
