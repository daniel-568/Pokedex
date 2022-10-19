const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// take code and transpile it so at end, it spits out finished version of our code
module.exports = {
  // index.js is where to look at first
  entry: "./src/index.js",
  // will output at the end
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      directory: path.join(__dirname, 'build-tools-module'),
      publicPath: 'http://localhost:8080/',
    },
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    // take a look at js, jsx, etc. files and make sure you to resolve them
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  mode: 'development',
  module: {
    rules: [
      {
        // if you have file with jsx, make sure to use babel-loader on it
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};