function isEqual(a, b) {
    if (a === null || b === null) {
        return false
    }
    if (!Object.keys(a).length && !Object.keys(b).length) {
        return true
    }
    for (let key in a) {
        console.log(key)
        if (Object.keys(a).length !== Object.keys(b).length || !Object.keys(b).includes(key) || a[key] !== b[key]) {
            return false
        }
    }
    return true;
}

window.isEqual = isEqual;

export default isEqual;
