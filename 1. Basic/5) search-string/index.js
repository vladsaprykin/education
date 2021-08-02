        function searchString(obj) {
            let query = '';
            if (obj) {
                let keys = Object.keys(obj);
                keys.forEach((element, index) => {
                    if (index === 0) {
                        query += '?';
                    }
                    if (obj[element] !== '' && obj[element] !== null && obj[element] !== undefined) {
                        if (index < keys.length && index !== 0) {
                            query += '&';
                        }
                        query += element + '=' + obj[element]
                    }
                });
                return query;
            }
        }

window.searchString = searchString;

export default searchString;
