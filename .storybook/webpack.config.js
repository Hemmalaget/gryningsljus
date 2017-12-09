const path = require("path")

module.exports = {
  module: {
    rules: [{ test: /\.(png|jpg|gif)$/, loader: "file-loader", exclude: /node_modules/ }]
  }
}
