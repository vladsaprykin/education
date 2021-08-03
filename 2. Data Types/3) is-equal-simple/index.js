function isEqual(a, b) {
    if (a === null || b === null || Object.keys(a).length !== Object.keys(b).length || Object.values(a).length !== Object.values(b).length) {
        return false
    }
    function compareArrays(a, b) {
        for (let i = 0; i < a.length; i++)
            if (b.indexOf(a[i]) == -1) {
                return false
            }
        return true
    }
    if (compareArrays(Object.keys(a), Object.keys(b))) {
        return compareArrays(Object.values(a), Object.values(b));
    }
    return false;
}

window.isEqual = isEqual;

export default isEqual;
