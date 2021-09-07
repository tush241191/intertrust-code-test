import http from 'network/common/http_solar'
import { Solar } from './schemas'

export async function getSolars() {

    const url = 'e9349bbc-5e7c-45a3-b8bf-e730311a07c6'

    const { data } = await http.get<{
        solars: Solar[]
    }>(url)

    return data
}