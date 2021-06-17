/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 15:18:45
 */
const configs = require('@otools/compile-tools')
const PROD = process.env.NODE_ENV === 'production'
const config = PROD ? configs.prod : configs.dev

config.module.rules.find(({ test }) => test.test('.ts')).use.pop()

module.exports = config
