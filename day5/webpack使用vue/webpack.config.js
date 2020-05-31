const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
  devServer: {
      contentBase: 'index.html',
      inline: true,
      port: 8080
  }
}
