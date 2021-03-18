function newArmy(armyPositionX, armypositionY){



  const direction = [Math.random(),Math.random()];

  const container = new PIXI.Container();

  //container name
  container.name = "army";

  app.stage.addChild(container);

  PIXI.settings.SORTABLE_CHILDREN = true;



  // Create a new texture
  const texture = PIXI.Texture.from('explorer.png');

  // Create a 5x5 grid of bunnies
  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.offsetX = 0;
    bunny.offsetY = 0;

    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 23;
    bunny.y = Math.floor(i / 5) * 23;
    container.addChild(bunny);

  }

  //INFO TEXT.....
  let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 24, fill : 0xFFFFFF, align : 'center'});
  container.info = text;
  container.addChild(text);



  // Move container to the center
  container.x = armyPositionX; //app.screen.width / 2;
  container.y = armypositionY; //app.screen.height / 2;

  // Center bunny sprite in local container coordinates
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

}
