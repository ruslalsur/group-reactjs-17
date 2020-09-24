const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        components: path.join(__dirname, 'src', 'components')
      }
    },

    devtool: 'eval-source-map',

    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          }
        ]
      },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ],
}