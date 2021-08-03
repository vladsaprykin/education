function queryToObject(query) {
  const stringToType = (str) => {
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
          const num = Number(str);
          if (num || num === 0) {
            return (num);
          }
        }
        return str
    }
  }
  const object = {};
  if (!query && query === '?') return object
  const arrayQuery = query.split(/[?&]/gm);
  arrayQuery.shift();
  arrayQuery.forEach(item => {
    const tempArray = item.split('=');
    object[tempArray[0]] = stringToType(tempArray[1]);
  })
  return object
};

window.queryToObject = queryToObject;

export default queryToObject;
