function baseExpect(a) {
    const toBe = (b) => {
        return a === b
    }
    toBe.not = (b) => {
        return a !== b
    }
    return {
        toBe: toBe
    }

}

window.baseExpect = baseExpect;

export default baseExpect;
