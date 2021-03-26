function addDbugTextTo(container){
    //INFO TEXT.....
    let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 18, fill : 0xFFFFFF, align : 'center'});
    container.info = text;
    container.addChild(text);
}

function updateDebugText(container){
  if(container.info)
  container.info.setText(
    "grid1=" + (Math.floor(container.x/grid1_size)*10 + Math.floor(container.y/grid1_size)) + "\r"+
    "grid2=" + (Math.floor((container.x - grid_offset)/grid2_size)*10 + Math.floor((container.y - grid_offset)/grid2_size))
  );
}

function updateDebugTextGrid(container,grid_index){
  if(container.info)
  container.info.setText(
  "index:" + grid_index
  );
}
