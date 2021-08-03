function isEqual(a, b) {
    if (a === null || b === null ) return false;

    const keysA = Object.keys(a).sort();
    const keysB = Object.keys(b).sort();

    if (keysA.length !== keysB.length) return false;

    return !keysA.find((item,i)=> item !== keysB[i] || a[item] !== b[item])
}

window.isEqual = isEqual;

export default isEqual;
