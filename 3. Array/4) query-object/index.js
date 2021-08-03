function queryToObject(query) {
  const stringToType = (str) => {
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
  }
  if (!query) return {}
  if (query === '?') return {}
  let object = {};
  let arrayQuery = query.split(/[?&]/gm);
  arrayQuery.shift();
  arrayQuery.forEach(item => {
    let tempArray = item.split('=');
    object[tempArray[0]] = stringToType(tempArray[1]);
  })
  return object
};

window.queryToObject = queryToObject;

export default queryToObject;
