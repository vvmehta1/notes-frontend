const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: "/"
  },

  /*
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  */

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        ]
      }
    ]
  }
}

module.exports = config;