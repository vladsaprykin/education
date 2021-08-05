function reverseStr(str) {
    if (!str) str = this;
    return str.split('').reverse().join(``)
}
String.prototype.reverse = reverseStr;