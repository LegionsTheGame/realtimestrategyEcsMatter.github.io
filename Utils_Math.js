function rotateVector2D(vec, ang) {
  var cos = Math.cos(ang);
  var sin = Math.sin(ang);
  var newX = Math.round(1000 * (vec[0] * cos - vec[1] * sin)) / 1000;
  var newY = Math.round(1000 * (vec[0] * sin + vec[1] * cos)) / 1000;
  return [newX, newY];
}

function unitVector(vec) {
  var l = getDistance(vec);//Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
  var newX = Math.round(1000 * (vec[0] / l)) / 1000;
  var newY = Math.round(1000 * (vec[1] / l)) / 1000;
  return [newX, newY];
}

function getUnitVector(ang) {
  return [Math.cos(ang), Math.sin(ang)];
}

function getDistance(vec){
  return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}
