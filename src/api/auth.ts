import request from '@/utils/request'
import { authHost } from '@/config'
import { stringify } from 'qs'

export interface LoginParam {
  account: string
  password: string
}

/**
 * 用户登录
 *
 * @export
 * @param {LoginParam} body
 * @returns {Promise<Token>}
 */
export async function userLogin(body: LoginParam): Promise<{ token: string }> {
  const res = await request.post<{ token: string }>(
    `${authHost}/auth/api/sysmgr/sso/login`,
    {
      body: stringify(body),
      headers: {
        Authorization: null,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  return res
}
