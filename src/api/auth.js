/*
 * @Descripttion: login request
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 15:18:45
 */
import request from '@/utils/request'
import { authHost } from '@/config'

/**
 * 测试用户登录
 *
 * @export
 * @param {Object} params
 * @returns {Promise<string>}
 */
export function userLogin(params) {
  return request.get(`${authHost}/auth.json`, {
    query: { params },
    headers: {
      Authorization: null,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}
