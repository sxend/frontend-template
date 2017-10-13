const path = require('path');
const webpack = require('webpack');

module.exports = function(env, argv) {
  return [{
    entry: './src/main/typescript/index.ts',
    output: {
      path: path.resolve(__dirname, 'target'),
      filename: 'app.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      loaders: [{
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }]
    },
    plugins: [
      new webpack.ProvidePlugin({
          Promise: 'es6-promise'
      }),
    ]
  }];
};
