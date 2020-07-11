import axios from 'axios'
import TokenExpired from './token_expired'

const headers: { [key: string]: string } = {}

// Countermeasures that cache works in case of IE11
if (window.navigator.userAgent.indexOf('Trident/7') !== -1) {
  headers.Pragma = 'no-cache'
}

const instance = axios.create({
  baseURL: 'api',
  headers,
  validateStatus: status => {
    return status >= 200 && status <= 500
  }
})

instance.interceptors.response.use(response => {
  if (response.status === 401) {
    TokenExpired.show()
  }

  return response
})

export default instance

export interface IAPIError {
  status: number
  type: string
  message: string
}
