function largestPrimeFactor(number) {

  for (let i = 2; i <= number / i; i++) {
    while (number % i === 0) {
      number = number/i;
    }
  }
  if(number > 1) {
    return(number);
  }
}

largestPrimeFactor(600851475143);