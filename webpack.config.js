/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 15:18:45
 */
const configs = require('@otools/compile-tools')
configs.module.rules.find(({ test }) => test.test('.ts')).use.pop()

module.exports = configs
