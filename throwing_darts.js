function scoreThrows(radiuses){
  if(radiuses.length === 0){
  return 0;
  }

  var total = 0;
  radiuses.forEach(function(x){
    if(x < 5){
      total +=10;
    } else if (x <= 10) {
      total +=5;
    }
   });

  if(total === 10*radiuses.length){
  total+=100;
  }

  return total;
}