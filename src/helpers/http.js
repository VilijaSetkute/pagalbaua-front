export default {
    post: async (url, data) => {
        const options = {
            method: 'POST',
            headers: {"content-type": "application/json"},
            credentials: "include",
            body: JSON.stringify(data)
        }
        let res = await fetch('http://localhost:4000'+url, options)
        res = await res.json()
        return res
    },
    get: async (url) => {
        const options = {
            method: 'GET',
            headers: {"content-type": "application/json"},
            credentials: "include"
        }
        let res = await fetch('http://localhost:4000'+url, options)
        res = await res.json()
        return res
    },
}