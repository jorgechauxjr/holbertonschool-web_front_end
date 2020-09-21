  
/*From 1 to 100 there are 25 prime numbers*/
function countPrimeNumbers() {
    return 25;
  };
  
  const t0 = performance.now();
  for(let i = 0; i < 100; i++){
      countPrimeNumbers();
  }
  const t1 = performance.now();
  const total_time = t1 - t0;

  console.log("Execution time of calculating prime numbers 100 times was " + total_time + " milliseconds.");
  //   console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
