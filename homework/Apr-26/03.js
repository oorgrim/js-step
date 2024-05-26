function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function* primesGenerator() {
    let n = 2;
    while (true) {
        if (isPrime(n)) {
            yield n;
        }
        n++;
    }
}

const primeGen = primesGenerator();
for (let i = 0; i < 10; i++) {
    console.log(primeGen.next().value); 
}
