function arraysSort(arr) {
    function compare(a, b) {
        return Math.max(...a) - Math.max(...b)
    }
    const arrSorted = [...arr].sort(compare);
    return arrSorted
};

window.arraysSort = arraysSort;

export default arraysSort;
