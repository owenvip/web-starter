/*
 * @Descripttion: common util
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
/**
 * remove undefined from nested object
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function removeUndefined(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      removeUndefined(value)
    } else if (typeof value === 'undefined') {
      delete obj[key]
    }
  })
  return obj
}
