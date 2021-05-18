import request from '@/utils/request'
import { authHost } from '@/config'
/**
 * 获取用户信息
 *
 * @export
 * @param {string} userId
 * @returns {Promise<User>}
 */
export function fetchUserInfo(userId: string) {
  return request.get(`${authHost}/auth/api/sysmgr/user/info`, {
    query: { userId },
  })
}
