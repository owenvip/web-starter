module.exports = {
  presets: [
    [
      '@babel/preset-env', // 添加preset-env预设做语法转换，preset-env能将最新的语法转换为ecmascript5的写法
      {
        corejs: 3, // corejs版本，core-js@3废弃了babel-polyfill，实现了完全无污染的API转译
        useBuiltIns: 'usage', // 不需要手动在代码里写import‘@babel/polyfilll’，打包时会自动根据实际代码的使用情况，结合 .browserslistrc 引入代码里实际会用到 polyfilll部分模块
      },
    ],
  ],
  plugins: [
    // 插件，使用插件去对js做对应的功能
    '@vue/babel-plugin-jsx', // Vue 3 Babel JSX 插件, 如果要在vue3中使用render函数，必须使用这个插件，而不是@vue/babel-preset-jsx，这个坑我踩了几天，不然会出现h is not defined的错误。https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md
    // @babel/plugin-proposal-decorators 和 @babel/plugin-proposal-class-properties 让项目中可以使用装饰器写法，但是Vue3中一般也不使用了
    [
      '@babel/plugin-proposal-decorators',
      {
        // 装饰器插件
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-class-properties', // 类属性插件
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        useESModules: false,
        regenerator: true,
        absoluteRuntime: './node_modules',
      },
    ],
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
}
