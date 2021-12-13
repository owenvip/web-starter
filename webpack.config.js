/*
 * @Description:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-12-13 09:53:43
 */
const configs = require('@otools/compile-tools')
const Components = require('unplugin-vue-components/webpack')
const ElementPlus = require('unplugin-element-plus/webpack').default
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

configs.plugins.push(
  ElementPlus({
    useSource: false,
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  })
)

// proxy list
configs.devServer.proxy = {
  '/api': {
    target: 'https://apiserver.com',
    secure: false,
    changeOrigin: true,
  },
}

module.exports = configs
