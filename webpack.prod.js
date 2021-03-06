const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'exploration-demo.min.js'
  },
  plugins: [
    new CompressionPlugin({ test: /\.js/ })
  ]
});
