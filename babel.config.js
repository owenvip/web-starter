/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        corejs: 3,
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        useESModules: false,
        regenerator: true,
      },
    ],
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        },
      },
    ],
  ],
}
