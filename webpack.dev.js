const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'DATA_ROOT': JSON.stringify('/data/'),
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  output: {
    publicPath: '/'
  }
});
