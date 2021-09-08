import axios from "axios";

const http_solar = axios.create({
    baseURL: 'https://run.mocky.io/v3',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

http_solar.interceptors.response.use(response => {

    if (response.status === 401) {
        console.log("Unauthorized!")
    }
    return response

}, err => {
    return Promise.reject(err)
})



export default http_solar