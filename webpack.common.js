const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports =  {
  entry: {
    app: './src/index.tsx'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin([
      {
        from: './public/data/goodgroups/*.*',
        to: 'data/goodgroups/',
        flatten: true
      },
      {
        from: './public/data/about/*.*',
        to: 'data/about/',
        flatten: true
      },
      {
        from: './public/data/forcustomer/*.*',
        to: 'data/forcustomer/',
        flatten: true
      },
      {
        from: './public/data/goods/*.*',
        to: 'data/goods/',
        flatten: true
      },
      {
        from: './public/data/news/*.*',
        to: 'data/news/',
        flatten: true
      },
      {
        from: './public/data/contacts/*.*',
        to: 'data/contacts/',
        flatten: true
      },
      {
        from: './public/data/outlets/*.*',
        to: 'data/outlets/',
        flatten: true
      },
      {
        from: './public/data/noimage/*.*',
        to: 'data/noimage/',
        flatten: true
      },      
      {
        from: './public/data/downloads/*.*',
        to: 'data/downloads/',
        flatten: true
      },     
      {
        from: './public/data/rest/*.*',
        to: 'data/rest',
        flatten: true
      },              
      {
        from: './public/data/upload_binary.php',
        to: 'data/',
        flatten: true
      },
      {
        from: './public/.htaccess',
        to: '',
        flatten: true
      }
    ], {}
    )
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(txt|md)$/,
        use: 'raw-loader' 
      },
      {
        test: /\.(png|jp(e*)g|svg|eot|ttf|woff|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }  
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/bmkk/new'
  },
  stats: {
    assets: false,
    children: false,
    chunks: false,
    modules: false
  },
  node: {
    fs: 'empty'
  }
};