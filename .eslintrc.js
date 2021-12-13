/*
 * @Description:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-12-13 09:57:04
 */
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 6,
  },
  env: {
    browser: true,
  },
  extends: '@otools/eslint-config-otool',
}
