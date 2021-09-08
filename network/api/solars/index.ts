import http from 'network/common/http_solar'
import { Solar } from './schemas'

export async function getSolars() {

    const url = 'c9326581-f06e-4887-8528-11957b862b27'

    const { data } = await http.get<{
        solars: Solar[]
    }>(url)

    return data
}