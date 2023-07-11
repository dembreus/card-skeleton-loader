const path = require("path");
const htmlWebpack = require("./plugins");

module.exports = {
  entry: "./src/index.ts",
  plugins: htmlWebpack.plugins,
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: ["**/dist/**/*.js", "**/node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
