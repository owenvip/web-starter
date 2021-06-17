/*
 * @Descripttion: user request
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 15:18:45
 */
import request from '@/utils/request'
import { authHost } from '@/config'

/**
 * 获取用户信息
 *
 * @export
 * @param {string} userId
 * @returns {Promise<User>}
 */
export function fetchUserInfo(userId) {
  return request.get(`${authHost}/api/user`, {
    query: { userId },
  })
}
