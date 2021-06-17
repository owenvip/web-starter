/*
 * @Descripttion: auth util
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 15:18:45
 */
export class Auth {
  static TOKEN_KEY = 'TOKEN'

  token = ''

  exptime

  constructor() {
    this.token = localStorage.getItem(Auth.TOKEN_KEY) || ''
    if (this.token) {
      this.exptime = Number(this.token.split('-')[1])
    }
  }

  get isLogin() {
    if (!this.token) {
      return false
    }
    if (!this.exptime) {
      return false
    }
    const exp = (this.exptime - 1 * 60) * 1000
    if (Date.now() > exp) {
      return false
    }
    return true
  }

  setToken = (token) => {
    const now = Date.now()
    this.exptime = now
    this.token = token
    if (token) {
      localStorage.setItem(Auth.TOKEN_KEY, `${token}-${now}`)
    }
  }

  getToken = () => this.token
}

const auth = new Auth()

export default auth
