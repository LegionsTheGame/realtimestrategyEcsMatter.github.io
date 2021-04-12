//COLLISION SYSTEM ////////////////////////////////////////////////////////////////

//Gammel ide, med to forskellige collision grids - istedet anvender jeg nu et grid hvor et "objekt"
//kan være i to "felter" på samme tid.
//

//const grid2_size  = 120;
//const grid_offset = 0;

const grid1_size  = 100;

// const army_bounds = 60;

//MOUSE EVENT SYSTEM /////////////////////////////////////////////////////////////////

//attempt to follow - touch events
let mx        = 100;
let my        = 100;
let touchDown = false;

//SELECTION SYSTEM /////////////////////////////////////////////////////////////////
var wayPoints = [];

var selected_army;
