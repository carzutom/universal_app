const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcRoot = path.resolve(__dirname, 'src');
const appRoot = path.resolve(srcRoot);

module.exports = {
  context: path.resolve(__dirname),
  //cache: true,
  entry: {
    app: './src/client/app.js',
    //vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].bundle.js',
    sourceMapFilename: 'js/[chunkhash].map',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        })
      },
      {test: /\.(jpe?g|png|gif|svg|woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      appRoot,
      'node_modules'
    ]
  },
  stats: "minimal",
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin(
      'css/styles.css', {allChunks: true}
    ),
    new CopyWebpackPlugin([
      {from: './src/assets'}
    ]),
  ]
};
