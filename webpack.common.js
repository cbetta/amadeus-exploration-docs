const path = require('path');

module.exports = {
  // input
  entry: path.resolve(__dirname, 'src', 'index.js'),

  // output
  output: {
    library: 'exploration',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  // transformations
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
