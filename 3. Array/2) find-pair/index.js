function findPair(arr) {
    for (let i = 0; i < arr.length; i++){
        const item = arr[i];
        if (i === arr.length - 1){
            continue
        }
        for (let pair = 1; pair < arr.length; pair++){
            if (i === pair) {
                continue
            }
            if (item === arr[pair]){
                return item
            }
        }
    }
    return null
};

window.findPair = findPair;

export default findPair;
