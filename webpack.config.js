const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules'
    }, {
      test: /\.scss$/,
      use:  [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          'css-loader',
          options: { sourceMap: true}
        },{
          'sass-loader',
          options: { sourceMap: true}
        }

      ]
    }]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
}
