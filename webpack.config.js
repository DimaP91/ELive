const paths = require('./config/paths');

module.exports = {
  entry: paths.appIndexJs,
  output: {
    filename: 'main.js',
    path: paths.root
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  }
};