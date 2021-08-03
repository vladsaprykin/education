function stringToType(str) {
    let num;
    if (str === "true") {
        return true;
    }
    if (str === "false") {
        return false;
    }
    if (str === "null") {
        return null;
    }
    if (str === "undefined") {
        return undefined;
    }
    if (str !== "") {
        num = Number(str);
    }
    if (num || num === 0) {
        return (num);
    }
    return str;
};

window.stringToType = stringToType;

export default stringToType;
