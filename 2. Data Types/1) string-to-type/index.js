function stringToType(str) {
    let num;
    switch (str) {
        case 'true':
            return true;
        case 'false':
            return false;
        case 'null':
            return null;
        case 'undefined':
            return undefined;
        default:
            if (str !== ""){
                num = Number(str);
                if (num || num === 0) {
                    return (num);
                }
            }
            return str
    }
};

window.stringToType = stringToType;

export default stringToType;
