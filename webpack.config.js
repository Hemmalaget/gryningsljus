const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./app/index.html",
  filename: "index.html",
  inject: "body"
})

module.exports = {
  mode: "production",
  entry: "./app/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: "file-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
