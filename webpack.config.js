const path = require('path');

// include the js minification plugin (uglify-js has vulnerabilities - so this plugin is used instead)
const TerserPlugin = require('terser-webpack-plugin');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

//include a plugin to clean the dist folder on each build to keep it clean
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    // anotherentry: './src/anotherentry.js', // add other entries here if you need to break up your bundles
  },
  output: {
    filename: '[name].bundle.js', // name is the value to the left of the colon in the entries list above
    path: path.resolve(__dirname, 'dist'), // adds the bundled files into a dist directory
  },
  module: {
    rules: [
      // perform js babelization on all .js files, except anything in node_modules
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // compile all SASS files to .css
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      // this handles the images that the SASS file makes references to; it copies them into the dist directory
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // setting to false avoids issues (e.g. with BrowserSync)
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: './main.min.css'
    })
  ],
  optimization: {
    minimizer: [
      // enable the js minification plugin
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};