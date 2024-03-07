function sendRequest(url) {
    return fetch(url).then(function (response) {
        return response.json();
    })
}

function sendRequest2(url) {
    return new Promise(function (resolve, reject) {
        return fetch(url).then(function (response) {
            resolve(response.json());
        })
    })
}

module.exports = {
    sendRequest: sendRequest
}