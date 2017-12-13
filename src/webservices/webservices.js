import axios from 'axios'
import * as constants from './constants'

export function configureAxios() {
    axios.defaults.baseURL  = constants.BASE_RUL
    axios.defaults.headers.post['Content=Type'] = 'application/json'
}