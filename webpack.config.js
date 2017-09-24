const path = require("path");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: { filename: "bundle.js", path: path.resolve(__dirname, "public") },
  resolve: { extensions: [".jsx", ".js"] },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  }
};
