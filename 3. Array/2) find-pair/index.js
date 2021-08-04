function findPair(arr) {
    const arr2 = arr.splice(Math.ceil(arr.length/2))
    const duplicates = arr.filter(function(val) {
        return arr2.indexOf(val) != -1;
    });
    return (!duplicates.length) ? null : duplicates[0]
};

window.findPair = findPair;

export default findPair;
