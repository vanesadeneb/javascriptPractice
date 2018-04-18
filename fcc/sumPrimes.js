function sumPrimes(num) {
  var sieve = [], i, j, primes = [];
  var resultSum = 0;
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            resultSum += i;
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    return resultSum;
}

sumPrimes(10);