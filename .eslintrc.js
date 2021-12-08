/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-12-01 18:42:08
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
