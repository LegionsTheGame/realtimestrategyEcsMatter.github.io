function system_moveArmy(container) {

  if(container.info)
  container.info.setText(
  "x:" + container.x.toFixed(0)+"\r"+
  "y="+ container.y.toFixed(0) +"\r"+
  "XNR=" +Math.floor(container.x/100)+"\r"+
  "YNR=" +Math.floor(container.y/100)
  );



  //Dette er de enkelte "bunnies" der bevæger sig!!
  for (var i = 0; i < container.children.length; i++) {

    var c = container.children[i];

    if(c==container.info)continue; //Ikke bevæge teksten

    var xo = Math.random() - Math.random();
    var yo = Math.random() - Math.random();

    c.x = c.x - c.offsetX + xo;
    c.y = c.y - c.offsetY + yo;
    c.offsetX = xo;
    c.offsetY = yo;
  }



  //mousePosition = app.renderer.plugins.interaction.mouse.global;
  //  var a = Math.atan2(mousePosition.y - container.y, mousePosition.x - container.x);

  var a = Math.atan2(my - container.y, mx - container.x);
  this.d = getUnitVector(a);

  //container.rotation -= 0.01; //just testing

    container.x += this.d[0];
    container.y += this.d[1];
}

//attempt to follow - touch events
let mx = 100;
let my = 100;
app.renderer.plugins.interaction.on( 'pointerdown', ( event ) => { mx = event.data.global.x; my = event.data.global.y; console.log( event.data.global ); } );
