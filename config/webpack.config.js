const paths = require('./paths');

module.exports = {
  entry: paths.appIndexJs,
  output: {
    filename: 'main.js',
    path: paths.root
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
    ]
  }
};