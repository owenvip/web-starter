/*
 * @Descripttion: login request
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 15:18:45
 */
import request from '@/utils/request'
import { authHost } from '@/config'
// import { stringify } from 'qs'

// /**
//  * 用户登录
//  *
//  * @export
//  * @param {LoginParam} body
//  * @returns {Promise<Token>}
//  */
// export async function userLogin(body) {
//   const res = await request.post<{ token }>(`${authHost}/auth.json`, {
//     body: stringify(body),
//     headers: {
//       Authorization: null,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   })
//   return res
// }

/**
 * 测试用户登录
 *
 * @export
 * @param {LoginParam} params
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
