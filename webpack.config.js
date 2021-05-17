const configs = require('@otools/compile-tools')
const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  ...(PROD ? configs.prod : configs.dev),
}
