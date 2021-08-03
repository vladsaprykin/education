function findPair(arr) {
    for (let item = 0; item < arr.length; item++){
        let temp = arr[item];
        if (item === arr.length - 1){
            continue
        }
        for (let pair = 1; pair < arr.length; pair++){
            if (item === pair) {
                continue
            }
            if (temp === arr[pair]){
                return temp
            }
        }
    }
    return null
};

window.findPair = findPair;

export default findPair;
