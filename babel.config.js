module.exports = {
  presets: [
    [
      '@vue/babel-preset-app',
      {
        modules: false, // close this to make tree-shaking work
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-typescript', // 引用Typescript插件
      {
        allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
      },
    ],
  ],
}
