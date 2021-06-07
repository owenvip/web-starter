export class Auth {
  public static TOKEN_KEY = 'TOKEN'

  private token = ''

  public exptime?: number

  constructor() {
    this.token = localStorage.getItem(Auth.TOKEN_KEY) || ''
    if (this.token) {
      this.exptime = Number(this.token.split('-')[1])
    }
  }

  public get isLogin(): boolean {
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

  public setToken = (token: string) => {
    const now = Date.now()
    this.exptime = now
    this.token = token
    if (token) {
      localStorage.setItem(Auth.TOKEN_KEY, `${token}-${now}`)
    }
  }

  public getToken = () => this.token
}

const auth = new Auth()

export default auth
