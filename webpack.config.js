const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img',
        toType: 'dir'
      }
    ]),
    new UglifyJsPlugin({
      cache: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader', options: { sourceMap: true, outputStyle: 'compressed' },
          }
        ]
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader',
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[path][name].[ext]',
          //     publicPath: 'dist/',
          //     context: path.resolve(__dirname, "./src/img"),
          //     outputPath: 'img'
          //   }
          // }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 4200,
    open: true,
    stats: 'errors-only',
  },
  devtool: 'source-map'
};
