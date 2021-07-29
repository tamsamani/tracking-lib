const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "./src");
const BUILD_DIR = path.resolve(__dirname, "./dist");

// find and read webpack mode named '--mode[development|production]' passed by command line
const modeIndex = process.argv.findIndex((v) => v.startsWith("--env"));
const mode = modeIndex === -1 ? "production" : process.argv[modeIndex + 1];

// is development mode
const isDev = mode.startsWith("dev");

console.log("Webpack mode: " + (isDev ? "development" : "production"));

// add terser plugin if production mode
const optimization = {
  minimize: !isDev,
  minimizer: isDev ? undefined : [new TerserPlugin({})],
};

// webpack configuration
const webpackConfig = {
  mode: "production",
  entry: APP_DIR + "/index.js",
  output: {
    filename: isDev ? "index.dev.js" : "index.js",
    path: BUILD_DIR,
    clean: !isDev,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization,
};

module.exports = webpackConfig;
