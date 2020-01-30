var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    library: "",
    libraryTarget: "commonjs"
  },
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};