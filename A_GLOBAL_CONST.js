//GAME OBJECTS ////////////////////////////////////////////////////////////////////
//array - spilobjekter
var armies = [];


//COLLISION SYSTEM ////////////////////////////////////////////////////////////////
//Gammel ide, med to forskellige collision grids - istedet anvender jeg nu et grid hvor et "objekt"
//kan være i to "felter" på samme tid.
var collision_grid1 = [];

const grid1_size  = 100;


//MOUSE EVENT SYSTEM /////////////////////////////////////////////////////////////////
//attempt to follow - touch events
let mx        = 100;
let my        = 100;
let touchDown = false;


//SELECTION SYSTEM /////////////////////////////////////////////////////////////////

var wayCirclePoints = []; //grafiske cirkler i pixijs

                    //?positionen af cirklerne gemmes i den enkelte "army"

var selected_army;
