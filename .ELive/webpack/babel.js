module.exports = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
              },
            },
          ],
        },
      ],
    },
  };
};
