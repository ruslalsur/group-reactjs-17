const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
   entry: path.join(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
   },
   resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
         components: path.join(__dirname, 'src', 'components'),
         config: path.join(__dirname, 'src', 'config'),
         actions: path.join(__dirname, 'src', 'actions'),
         reducers: path.join(__dirname, 'src', 'reducers'),
         containers: path.join(__dirname, 'src', 'containers'),
         middlewares: path.join(__dirname, 'src', 'middlewares')
      },
   },

   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                  plugins: ['@babel/plugin-proposal-class-properties'],
               }
            }
         },
         {
            test: /\.s?c?a?ss$/i,
            use: [
               'style-loader',
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ]
         }
      ]
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, 'src', 'index.html'),
         filename: 'index.html'
      }),

      new MiniCssExtractPlugin({
         filename: 'app.css'
      }),

      new CopyPlugin({
         patterns: [{
               from: path.join(__dirname, 'src', 'assets', 'icons'),
               to: path.join(__dirname, 'dist', 'icons')
            },
            {
               from: path.join(__dirname, 'src', 'sw.js'),
               to: path.join(__dirname, 'dist')
            },
            {
               from: path.join(__dirname, 'src', 'manifest.json'),
               to: path.join(__dirname, 'dist')
            }
         ]
      })
   ],

   devServer: {
      historyApiFallback: true,
   },

   devtool: 'eval-source-map'
}
