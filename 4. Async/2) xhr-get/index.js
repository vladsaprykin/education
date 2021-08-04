function xhrGet(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';
    return new Promise(function (resolve, reject) {
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            reject(xhr.response);
        };
        xhr.send();
    });
}

window.xhrGet = xhrGet;

export default xhrGet;
