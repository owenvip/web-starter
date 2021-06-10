/*
 * @Descripttion: user types
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-10 15:57:14
 */
export interface LoginParam {
  account: string
  password: string
}

export interface User {
  account: string
  id: string
  name: string
}
