import webpack from "webpack";
import path from "path";

export default {
  entry: "./src/index.jsx",

  // for v1
  /*
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
  */
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: 'babel-loader',
            /*
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            },
            */
          }
        ]
      },
      {
        test: /\.(css|styl)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
    /*
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
    */
  },
}
