import Request from '@otools/request'
import isNil from 'lodash/isNil'
import { appHost } from '@/config'
import auth from './auth'
const NO_AUTH_ERROR = new Error('登录失效，请重新登录')
const UNKNOWN_ERROR = new Error('未知错误')
const request = new Request({
  baseURL: appHost,
  headers: {
    'Content-Type': 'application/json',
  },
  beforeRequest: async (req) => {
    const { headers = {} } = req
    if (typeof headers.Authorization === 'undefined') {
      if (!auth.isLogin) {
        throw NO_AUTH_ERROR
      }
      const authorization = auth.getAuthorization()
      headers.Authorization = authorization
      req.headers = headers
    }
    if (req.headers) {
      Object.keys(req.headers).map((key) => {
        if (req.headers && !req.headers[key]) {
          delete req.headers[key]
        }
      })
    }
    return req
  },
  afterRequest: (res) => {
    const { data, status } = res
    if (status === 401 || status === 403) {
      throw res
    }
    if (status >= 200 && status < 400) {
      // empty response
      if (!data) {
        return res
      }
      // 兼容注册登录
      if (!isNil(data.code)) {
        if (+data.code === 0 || +data.code === 200) {
          res.data = data.data
        } else {
          throw res
        }
      }
    } else {
      if (!data) {
        throw UNKNOWN_ERROR
      }
      const code = +data.code
      if (isNaN(code) || code >= 400 || code < 0) {
        throw res
      }
    }
    return res
  },
})
export default request
