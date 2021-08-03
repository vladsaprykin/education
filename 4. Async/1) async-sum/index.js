function asyncSum(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) === "number" && typeof (b) === "number") {
                resolve(a + b);
            }
            reject(new Error("error"));
        }, 1000);
    });
    promise
        .then(
            result => {
                return result
            },
            error => {
                return error
            }
        );
    return promise
}

window.asyncSum = asyncSum;

export default asyncSum;
