import webpack from "webpack";
import path from "path";

export default {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    publicPath: '/dist/',
    port: 3000,
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
}
