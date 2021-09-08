import http from 'network/common/http'

export async function getWeather() {

    const url = '2bb38d72-8499-4f24-be5c-e1cbf8daa979'

    const { data } = await http.get(url)

    return data
}