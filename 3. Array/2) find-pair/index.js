function findPair(arr) {
    const arrSorted = [...arr];
    arrSorted.sort((a, b) => a - b);
    const res = arrSorted.find((el,index)=>{
        if (index === arr.length - 1) return undefined
        const next = arrSorted[index + 1]
        if (el === next) return el
    })
    return (res === undefined) ? null : res
};
window.findPair = findPair;

export default findPair;
