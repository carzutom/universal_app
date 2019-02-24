const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.bundle.js',
    publicPath: '/'
  },
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {
        test: /\.less/,
        use: [
          {loader: 'css-loader'},
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {test: /\.(jpe?g|png|gif|svg|woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
    ]
  },
  externals: [webpackNodeExternals()],
};
