/**
 * 开发环境
 * @exports
 * @constant
 */
export const DEV = 0
/**
 * 测试环境
 * @exports
 * @constant
 */
export const TEST = 1
/**
 * 预发布环境
 * @exports
 * @constant
 */
export const PRE = 2
/**
 * 生产环境
 * @exports
 * @constant
 */
export const PRO = 3
/**
 * 当前运行环境
 * @exports
 * @constant
 */
export const APP_ENV = +(process.env.APP_ENV || 0)
/**
 * sematic version
 * @constant {string} version
 */
export const version = process.env.APP_VERSION || '1.0.0'
/**
 * 认证服务器地址
 * @constant {string} authHost
 * @exports
 */
export const authHost = (() => {
  if (process.env.AUTH_HOST) {
    return process.env.AUTH_HOST
  } else if (APP_ENV === DEV) {
    return location.origin
  } else if (APP_ENV === TEST) {
    return location.origin
  } else if (APP_ENV === PRE) {
    return location.origin
  } else {
    return location.origin
  }
})()
/**
 * 业务服务器地址
 * @constant {string} appHost
 * @exports
 */
export const appHost = (() => {
  if (process.env.APP_HOST) {
    return process.env.APP_HOST
  } else if (APP_ENV === DEV) {
    return location.origin
  } else if (APP_ENV === TEST) {
    return location.origin
  } else if (APP_ENV === PRE) {
    return location.origin
  } else {
    return location.origin
  }
})()
/**
 * 盐
 * @constant {string} MD5_SALT
 * @exports
 */
export const MD5_SALT = '{67NJfzkj98Ls}'
