const baseUrl = 'https://reactnative.dev/movies.json'

function* getData() {
    const response = yield fetch(baseUrl, {
        method: 'GET'
    })
    const results = yield response.json()
    return results
}

export const Api = {
    getData
}
