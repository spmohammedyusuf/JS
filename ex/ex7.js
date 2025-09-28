function fact(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    console.log("Step " + i + ": fact = " + fact);
  }
}

fact(5);
