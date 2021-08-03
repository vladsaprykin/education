function arraysSort(arr) {
    function compare(a, b) {
        return Math.max(...a) - Math.max(...b)
    }
    arr.sort(compare);
    return arr.map((elem) => elem)
};

window.arraysSort = arraysSort;

export default arraysSort;
