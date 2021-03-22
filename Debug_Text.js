function addDbugTextTo(container){
    //INFO TEXT.....
    let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 18, fill : 0xFFFFFF, align : 'center'});
    container.info = text;
    container.addChild(text);
}

function updateDebugText(container){
  if(container.info)
  container.info.setText(
  "x:" + container.x.toFixed(0)+"\r"+
  "y="+ container.y.toFixed(0) +"\r"+
  "XNR=" +Math.floor(container.x/100)+"\r"+
  "YNR=" +Math.floor(container.y/100)
  );
}

function updateDebugTextGrid(container,grid_index){
  if(container.info)
  container.info.setText(
  "index:" + grid_index 
  );
}
