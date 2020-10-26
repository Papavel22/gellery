import axios from 'axios'

const accessKey = 'bb5b762fe9143a6445f0a3d30f47c55329c0ddf450c78b884c5026ee78c5bcef';


export default (params) => {
    return axios.create({
        params:{
            client_id: accessKey,
            ...params
        },
        baseURL: "https://api.unsplash.com/"
    })
}
