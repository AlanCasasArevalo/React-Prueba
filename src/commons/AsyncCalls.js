import axios from 'axios'

export function fetchHouseList() {
    const fetchURL = '/casas'
    return axios.get(fetchURL)
}