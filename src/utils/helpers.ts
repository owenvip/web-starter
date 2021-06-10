/*
 * @Descripttion: common util
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { LooseMap } from '@/interfaces/constants'

/**
 * remove undefined from nested object
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function removeUndefined<T extends LooseMap>(obj: T): T {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      removeUndefined(value)
    } else if (typeof value === 'undefined') {
      delete obj[key]
    }
  })
  return obj
}
