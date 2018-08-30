const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'PUBLIC_ROOT': JSON.stringify('/bmkk/new/'),
      'DATA_ROOT': JSON.stringify('/bmkk/new/data/'),
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
  ],
  performance: {
    hints: false
  }, 
  output: {
    publicPath: '/bmkk/new/'
  },
});

// resolve: {
//   alias: {
//     '@mydata_root': path.resolve(__dirname, '/bmkk/new/data/')
//   }
// },