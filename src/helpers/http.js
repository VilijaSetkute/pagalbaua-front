const publicUrl = "http://104.248.192.185:4000"
const localUrl = 'http://localhost:4000'
const production = true
const serverULR = production ? publicUrl : localUrl

export default {
    post: async (url, data) => {
        const options = {
            method: 'POST',
            headers: {"content-type": "application/json"},
            credentials: "include",
            body: JSON.stringify(data)
        }
        let res = await fetch(serverULR + url, options)
        res = await res.json()
        return res
    },
    get: async (url) => {
        const options = {
            method: 'GET',
            headers: {"content-type": "application/json"},
            credentials: "include"
        }
        let res = await fetch(serverULR + url, options)
        res = await res.json()
        return res
    },
}