// Imports: Dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// require('@babel/register');

// Webpack Configuration
const config = {
  // Entry
  entry: {
    calculator: [
      './src/calculator.js',
    // deepFreeze: './src/deep-freeze.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // images and html
      {
        // test: /.\.(png|svg|jpg|gif|jshaml|html)$/,
        test: /.\.(png|svg|jpg|gif|jshaml)$/,
        use: ['file-loader'],
      },
    ],
  },
  // Plugins
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      title: 'CalculatorApp',
      // Load a custom template (lodash by default)
      template: './src/index.html',
      // filename: 'index.[contenthash].html',
      // hash: true,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  // OPTIONAL
  // Reload On File Change
  // watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map',
};

// Exports
module.exports = config;
