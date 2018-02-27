const path = require("path");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../public/js")
  }
};
