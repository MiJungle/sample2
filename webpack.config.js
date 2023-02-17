// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: {
    index: "./js/index.js",
    book: "./js/book.js",
    login: "./js/login.js",
    dp: "./js/dp.js",
    health: "./js/health.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    proxy: {
      "/api": {
        target: "https://devapi.secondwind.co.kr",
        secure: false,
      },
    },
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
      template: "/template/dp.html",
      inject: true,
      chunks: ["index"],
      filename: "template/dp.html",
    }),
    new HtmlWebpackPlugin({
      template: "/template/book.html",
      inject: true,
      chunks: ["index"],
      filename: "template/book.html",
    }),
    new HtmlWebpackPlugin({
      template: "/template/health.html",
      inject: true,
      chunks: ["index"],
      filename: "template/health.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "json", to: "json" }],
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
