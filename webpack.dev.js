const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 9092,
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'PUBLIC_ROOT': JSON.stringify('/'),
      'DATA_ROOT': JSON.stringify('/data/'),
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  output: {
    publicPath: '/'
  }
});


// resolve: {
//   alias: {
//     '@mydata_root': path.resolve(__dirname, '/data/')
//   }
// },