import axios from 'axios'
import cookie from 'react-cookies'
import lodash from 'lodash'
import { apiUrl } from '../environments.js'

const toast = {
    error: err => {
        console.log('error', err)
    }
}

const ErrorMessage = {
  InvalidMFA: 'Invalid authentication code!',
  MissingAuth: 'Missing authentication',
  Internal: 'Internal System Error',
  InvalidTokenFormat: 'Invalid token format',
  ExpiredToken: 'Expired token',
  SessionTimeout: 'Login Session Timeout'
}

const fdiAxios = axios.create({
  baseURL: apiUrl,
  timeout: 5000
})

// Add a request interceptor
fdiAxios.interceptors.request.use(
  function (config) {
    config.headers.common['X-CSRF-Token'] = cookie.load('csrf')
    // set default axios options
    Object.assign(config, {
      withCredentials: true,
      rejectUnauthorized: false,
      requestCert: true,
      agent: false
    })
    return config
  },
  function (error) {
    toast.error(error.message || '')
    return Promise.reject(error)
  }
)

// Add a response interceptor
fdiAxios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response) {
      switch (error.response.data.message) {
        case ErrorMessage.MissingAuth:
          break
        default:
          if (
            [
              ErrorMessage.InvalidTokenFormat,
              ErrorMessage.ExpiredToken
            ].includes(error.response.data.message)
          ) {
            toast.error('Login Session Timeout')
          } else {
            toast.error(lodash.get(error, 'response.data.message', ''))
          }
          break
      }
    } else {
      toast.error(error.message || '')
    }
    return Promise.reject(error)
  }
)

class BaseEntityService {
  constructor (resource) {
    this.resource = resource || ''
  }
  find ({ url = this.resource, query }) {
    return fdiAxios.get(url, { params: query })
  }
  findById ({ url = this.resource, id }) {
    return fdiAxios.get(`${url}/${id}`)
  }
  create ({ url = this.resource, payload }) {
    return fdiAxios.post(url, payload)
  }
  update ({ url = this.resource, id, payload }) {
    return fdiAxios.put(`${url}/${id}`, payload)
  }
  remove ({ url = this.resource, id }) {
    return fdiAxios.delete(`${url}/${id}`)
  }
}

export { fdiAxios }
export default BaseEntityService
