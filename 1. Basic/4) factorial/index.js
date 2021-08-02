function factorial(n) {
  let sum = 1;
  for (let iteration = 1; iteration <= n; iteration++){
      sum *= iteration;
  }
  return sum
}

window.factorial = factorial;

export default factorial;
