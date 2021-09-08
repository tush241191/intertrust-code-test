import http from 'network/common/http_solar'
import { SolarItem } from './schemas'

export async function getSolars() {

    const url = '2b613f74-7481-4c7c-9301-fea8ab545f1f'

    const { data } = await http.get(url)

    return data
}