function findPair(arr) {
    arr.sort((a, b) => a - b)
    arr = arr.map((value, index) => {
        if (index === arr.length - 1) return
        const next = arr[index + 1]
        if (value === next) return value
    }).filter(Boolean)
    if (!arr.length) return null
    return arr[0]
};
window.findPair = findPair;

export default findPair;
