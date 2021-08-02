        function searchString(obj) {
            let str = '';
            if (obj) {
                let keys = Object.keys(obj);
                keys.forEach((element, index) => {
                    if (index === 0) {
                        str += '?';
                    }
                    if (obj[element] !== '' && obj[element] !== null && obj[element] !== undefined) {
                        if (index < keys.length && index !== 0) {
                            str += '&';
                        }
                        str += element + '=' + obj[element]
                    }
                });
                return str;
            }
        }

window.searchString = searchString;

export default searchString;
