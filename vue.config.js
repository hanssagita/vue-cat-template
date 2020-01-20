const path = require('path')
module.exports = {
  devServer: {
    proxy: 'https://localhost:8080'
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets/')
      }
    }
  }
}
