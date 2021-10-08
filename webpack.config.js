const path = require('path');
const buildDir = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  return {
    entry: './src/js/main.js',
    output: {
      path: buildDir,
      filename: './js/main.js'
    },
    devtool: 'source-map',
    optimization: {
      minimize: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            // fallback to style-loader in development
            options.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin()
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, './dist'),
      },
      compress: true,
      port: 9000,
    },
    resolve: {
      extensions: ['.js'],
    }
  }
};