var armies = [];

//Create Spilobjekter
for (var k = 0; k < 60; k++) {
  let a = newArmy(200 * k + 200, 100);
  armies.push(a);
}

//Debug grafik
gridDebug();


//Game loop
app.ticker.add((delta) => {

  for(var i= 0; i < armies.length ; i++){
     var c = armies[i]; //virker ikke med for-in loop ??

      system_collsionHandling_slow(c); //meget langsom collision handling
      system_moveArmy(c);
    }



});
