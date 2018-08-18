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