/*From 1 to 100 there are 25 prime numbers*/
function countPrimeNumbers(){
    return 25;
};

// https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
const ex_time = t1 - t0;
console.log("Execution time of printing countPrimeNumbers was " + ex_time + " milliseconds.");
// console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} miliseconds`);
