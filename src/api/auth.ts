import { ReqBody } from '@otools/request'
import request from '@/utils/request'
import { authHost } from '@/config'
import { stringify } from 'qs'

/**
 * 用户登录
 *
 * @export
 * @param {LoginParam} body
 * @returns {Promise<Token>}
 */
export async function userLogin(body: ReqBody) {
  const res = await request.post(`${authHost}/auth/api/sysmgr/sso/login`, {
    body: stringify(body),
    headers: {
      Authorization: null,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res
}
