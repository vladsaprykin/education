function findPair(arr) {
    const res = [];
    const arrSorted = arr;
    arrSorted.sort((a, b) => a - b);
    const findEl = arrSorted.find((el)=>{
        if (res.includes(el)) return el
        res.push(el)
    })
    return (findEl === undefined) ?  null : findEl
};
window.findPair = findPair;

export default findPair;
