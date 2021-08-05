class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        if (item === undefined) return
        this.stack.push(item)
        return this
    }

    pop() {
        if (!this.stack.length) throw new Error('Stack is empty!')
        this.stack.pop();
        return this
    }

    isEmpty() {
        if (!this.stack.length) return true
        return false
    }

    print() {
        return `[${this.stack.join(', ')}]`
    }

    get size() {
        return this.stack.length
    }
}

window.Stack = Stack;

export default Stack;
