import request from '@/utils/request'
import { authHost } from '@/config'
import { User } from '@/interfaces/user'

/**
 * 获取用户信息
 *
 * @export
 * @param {string} userId
 * @returns {Promise<User>}
 */
export function fetchUserInfo(userId: string): Promise<User> {
  return request.get(`${authHost}/user.json`, {
    query: { userId },
  })
}
