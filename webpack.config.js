const path = require('path');

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
         use: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test: /\.(jpg|png|svg)$/,
          loaders: [
              'file-loader?name=[name].[ext]'
          ]
      }
    ]
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  }
};