const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: BUILD_DIR,
    filename: './js/main.js',
    publicPath: '/',
  },
  mode: 'production',
  devtool: 'source-map',
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
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader', options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader', options: {
            sourceMap: true
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  }
};