import axios from "axios";

const http_weather = axios.create({
    baseURL: 'http://api.weatherstack.com/forecast?access_key=b1a0465fedfe41175917e91457363b10&query=Mumbai',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

http_weather.interceptors.response.use(response => {

    if (response.status === 401) {
        console.log("Unauthorized!")
    }
    return response

}, err => {
    return Promise.reject(err)
})



export default http_weather