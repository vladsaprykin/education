function fullSum(...args) {
    const arrayArgs = [...args]
    if (!arrayArgs.length) return 0
    const reducer = (accumulator, currentValue) => {
        if (typeof currentValue !== "number"){
            throw new SyntaxError("Wrong arguments type!");
        }
        return accumulator + currentValue
    };
    return arrayArgs.reduce(reducer,0)
}

window.fullSum = fullSum;

export default fullSum;
