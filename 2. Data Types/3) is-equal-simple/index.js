function isEqual(a, b) {
    if (a === null || b === null) {
        return false
    }

    if (typeof a === 'object' && typeof b === 'object') {
        if (Object.keys(a).length === 0 && Object.keys(b).length === 0) {
            return true
        }

        for (let key in a) {
            if (Object.keys(a).length !== Object.keys(b).length || !Object.keys(b).includes(key) || a[key] !== b[key]) {
                return false;
            }
        }
    }
    return true;
}

window.isEqual = isEqual;

export default isEqual;
