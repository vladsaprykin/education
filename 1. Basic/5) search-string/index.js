function searchString(obj) {
    let str = '';
    if (!obj) return
    let keys = Object.keys(obj);
    if (keys != false) {
        str += '?';
    }
    keys.forEach((element, index) => {
        if (obj[element] !== '' && obj[element] !== null && obj[element] !== undefined) {
            str += index !== 0 ? ('&' + element + '=' + obj[element]) : (element + '=' + obj[element])
        }
    });
    return str;

}

window.searchString = searchString;

export default searchString;
