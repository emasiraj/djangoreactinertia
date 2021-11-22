const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./catalog/static/react/app.js",
  output: {
    publicPath: '/static/static/react/dist/',
    path: path.resolve(__dirname, "./catalog/static/react/dist"),
    filename: "iraj.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
};