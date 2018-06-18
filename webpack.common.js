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
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: { singleton: true, sourceMap: false }
          },
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1, sourceMap: false }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              ctx: { autoprefixer: { browsers: 'last 2 versions' } }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: false }
          }
        ]
      },
    ]
  }
};
