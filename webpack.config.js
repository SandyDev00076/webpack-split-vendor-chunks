const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "[name].bundle.js",
    // need to keep it this way to create more than one bundle
    path: path.resolve(__dirname, "public"),
  },
  // in order to split the vendor files, we are going to use
  // a built-in plugin --> SplitChunksPlugin
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  devServer: {
    port: 9000,
  },
};
