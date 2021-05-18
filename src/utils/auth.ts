import { decodeJWTToken, getSearchParams } from './helpers'
import { TokenPayload } from '@/interfaces/token'

interface AuthParams {
  token?: string
  isSSO?: '1' | '0'
  [x: string]: any
}

export class Auth {
  public static TOKEN_KEY = 'TOKEN'

  private token = ''

  private authType = 'Bearer'

  public tokenPayload?: TokenPayload

  public diff = 0

  public sso = false

  constructor() {
    const { token, isSSO } = getSearchParams<AuthParams>()

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

  private parseToken = (token: string) => {
    if (token) {
      const arr = token.split(' ')
      if (arr.length === 2) {
        this.authType = arr[0]
        token = arr[1]
      }
    }
    this.token = token
  }

  public get isLogin(): boolean {
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

  public setToken = (token: string) => {
    localStorage.setItem(Auth.TOKEN_KEY, token)
    this.parseToken(token)
    this.tokenPayload = decodeJWTToken(token)
    this.diff = 0
  }

  public getToken = () => [this.authType, this.token].join(' ')

  public getAuthorization = (): string => {
    return this.token ? [this.authType, this.token].join(' ') : ''
  }
}

const auth = new Auth()

export default auth
