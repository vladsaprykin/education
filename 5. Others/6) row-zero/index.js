function rowZero(str) {
    const arrZeros = str.match(/0*/gm);
    const filtered  = arrZeros.filter(Boolean)
    if (!filtered.length) return 0
    const arrLengths = filtered.map( (item) =>{
        return item.length
    })
    return Math.max(...arrLengths)
}

window.rowZero = rowZero;

export default rowZero;
