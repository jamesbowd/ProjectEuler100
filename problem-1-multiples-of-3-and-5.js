//For numbers between 0 and number, if they are divisiable by 3 or 5 add to sum then return sum

function multiplesOf3and5(number) {
  var sum = 0;

  for (var i = 0; i < number; i++){
    if (i % 3 === 0) {
      sum += i;
    }
    else if (i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

multiplesOf3and5(1000);
