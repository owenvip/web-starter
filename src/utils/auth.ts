import { decodeJWTToken, getSearchParams } from './helpers'
export class Auth {
  constructor() {
    this.token = ''
    this.authType = 'Bearer'
    this.diff = 0
    this.sso = false
    this.parseToken = (token) => {
      if (token) {
        const arr = token.split(' ')
        if (arr.length === 2) {
          this.authType = arr[0]
          token = arr[1]
        }
      }
      this.token = token
    }
    this.setToken = (token) => {
      localStorage.setItem(Auth.TOKEN_KEY, token)
      this.parseToken(token)
      this.tokenPayload = decodeJWTToken(token)
      this.diff = 0
    }
    this.getToken = () => [this.authType, this.token].join(' ')
    this.getAuthorization = () => {
      return this.token ? [this.authType, this.token].join(' ') : ''
    }
    const { token, isSSO } = getSearchParams()
    if (token) {
      // 处理以下三种情况
      // 1. token=Bearer {token}
      // 2. token={token}
      // 3. token=[Bearer {token}, {token}]
      const temp = Array.isArray(token) ? token[token.length - 1] : token
      localStorage.setItem(Auth.TOKEN_KEY, temp)
      if (isSSO) {
        this.sso = +isSSO === 1
      } else {
        this.sso = true
      }
    }
    const temp = localStorage.getItem(Auth.TOKEN_KEY) || ''
    this.parseToken(temp)
    if (this.token) {
      this.tokenPayload = decodeJWTToken(this.token)
    }
  }

  get isLogin() {
    if (!this.token) {
      return false
    }
    if (!this.tokenPayload) {
      return false
    }
    const { exp } = this.tokenPayload
    const expTime = (exp - 1 * 60) * 1000
    const now = Date.now()
    if (now + this.diff > expTime) {
      return false
    }
    return true
  }
}
Auth.TOKEN_KEY = 'TOKEN'
const auth = new Auth()
export default auth
