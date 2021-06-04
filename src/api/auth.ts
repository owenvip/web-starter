import request from '@/utils/request'
import { authHost } from '@/config'
import { stringify } from 'qs'
import { LoginParam } from '@/interfaces/user'

/**
 * 用户登录
 *
 * @export
 * @param {LoginParam} body
 * @returns {Promise<Token>}
 */
export async function userLogin(body: LoginParam): Promise<{ token: string }> {
  const res = await request.get<{ token: string }>(`${authHost}/auth.json`, {
    body: stringify(body),
    headers: {
      Authorization: null,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res
}
