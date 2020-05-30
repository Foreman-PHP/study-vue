const  path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 只负责将css 文件进行加载
        // style-loader 负责将样式添加到 DOM 中,
        // 使用多个 loader 时 webpack 是从右向左
        use: ['style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于 limit 的时候 会将图片编译成 base64 字符串的形式,
              // 当加载图片 大于 limit 的时候 需要file-loader 模块进行加载
              limit: 10240
            }
          }
        ]
      }
    ]
  }
}
