function factorial(n) {
    let sum = 1;
    do {
        sum *= n;
        n--;
    } while (n > 0)
    return sum
}

window.factorial = factorial;

export default factorial;
