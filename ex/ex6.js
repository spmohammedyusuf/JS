function fact(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    // console.log();
    console.log("fact of " + n + " = " + fact);
  }
}

fact(3);
