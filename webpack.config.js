/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-09 00:14:04
 */
const configs = require('@otools/compile-tools')
configs.module.rules.find(({ test }) => test.test('.ts')).use.pop()

module.exports = configs
