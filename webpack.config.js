// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: {
    index: "./js/index.js",
    book: "./js/health.json.js",
    login: "./js/login.js",
    dp: "./js/dp.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "/template/login.html",
      inject: true,
      chunks: ["index"],
      filename: "template/login.html",
    }),
    new HtmlWebpackPlugin({
      template: "/template/health.json.html",
      inject: true,
      chunks: ["index"],
      filename: "template/health.json.html",
    }),
    new HtmlWebpackPlugin({
      template: "/template/dp.html",
      inject: true,
      chunks: ["index"],
      filename: "template/dp.html",
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

// module.exports = {
//   plugins: [new MiniCssExtractPlugin()],
// };
module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      })
    );
  } else {
    config.mode = "development";
  }
  return config;
};
