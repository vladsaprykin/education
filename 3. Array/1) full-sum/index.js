function fullSum(...args) {
    let arrayArgs = [...args]
    if (arrayArgs.length === 0) {
        return 0
    }
    let sum = 0;
    arrayArgs.forEach(item => {
        if (typeof item !== "number") {
            throw new SyntaxError("Wrong arguments type!");
        }
        sum += item;
    })
    return sum;
}

window.fullSum = fullSum;

export default fullSum;
