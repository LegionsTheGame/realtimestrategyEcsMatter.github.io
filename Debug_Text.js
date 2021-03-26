function addDbugTextTo(container){
    //INFO TEXT.....
    let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 18, fill : 0xFFFFFF, align : 'center'});
    container.info = text;
    container.addChild(text);
}

function updateDebugText(container){
  if(container.info){
    var bounds  = container.getBounds();

    var col1    = Math.floor((container.x - bounds.width/2 - grid_offset)/grid1_size);
    var col2    = Math.floor((container.x + bounds.width/2 - grid_offset)/grid1_size);
    var row1    = Math.floor((container.y - bounds.height/2 - grid_offset)/grid1_size);
    var row2    = Math.floor((container.y + bounds.height/2 - grid_offset)/grid1_size);

    var index1  = col1*10 + row1;
    var index2  = col2*10 + row1;
    var index3  = col1*10 + row2;
    var index4  = col2*10 + row2;

  container.info.setText(
    index1 + " " +index2 + "\r " +index3 + " " + index4
    //"grid1=" + (Math.floor(container.x/grid1_size)*10 + Math.floor(container.y/grid1_size)) //+ "\r"+


  //  "grid2=" + (Math.floor((container.x - grid_offset)/grid2_size)*10 + Math.floor((container.y - grid_offset)/grid2_size))
  );
}
}

function updateDebugTextGrid(container,grid_index){
  if(container.info)
  container.info.setText(
  "index:" + grid_index
  );
}
