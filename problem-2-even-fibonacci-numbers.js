function fiboEvenSum(n) {
  var sum = 0;
  var arr = [1, 2];
  for (var i = 2 ; i < n+1; i++){
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  for (var j = 0; j < arr.length-1; j++){
    if (arr[j] % 2 === 0){
      sum += arr[j]
    }
  }
  return sum;
}

fiboEvenSum(10);
