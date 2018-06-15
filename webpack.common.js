const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    library: 'exploration',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
