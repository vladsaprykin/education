function arraysSort(arr) {
    arr.sort(compare);
    function compare(a, b) {
        return Math.max(...a) - Math.max(...b)
    }
    return arr.map((elem) => elem)
};

window.arraysSort = arraysSort;

export default arraysSort;
