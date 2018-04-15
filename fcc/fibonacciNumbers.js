function sumFibs(num) {
  var fibonnacciNumber = [1,1];
  var resultSumFibonacciNum = 0;
  for(var i = 0; i < fibonnacciNumber.length; i++){
    var nextFibonacci = fibonnacciNumber[i] + fibonnacciNumber[i+1];
    if(nextFibonacci <= num){
      fibonnacciNumber.push(nextFibonacci);
    }
    if(fibonnacciNumber[i] % 2){
      resultSumFibonacciNum += fibonnacciNumber[i];
    }
  
  }
  return resultSumFibonacciNum;
}

sumFibs(4);