const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'react_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
