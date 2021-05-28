module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // close this to make tree-shaking work
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
}
