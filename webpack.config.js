const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "./src");
const BUILD_DIR = path.resolve(__dirname, "./dist");

// find and read webpack mode named '--mode[development|production]' passed by command line
const modeIndex = process.argv.findIndex((v) => v.startsWith("--env"));
const mode = modeIndex === -1 ? "production" : process.argv[modeIndex + 1];

// is development mode
const isDev = mode.startsWith("dev");
const version = require("./package.json").version;

console.log("Webpack mode: " + (isDev ? "development" : "production"));

// webpack configuration
const webpackConfig = {
	mode: "production",
	// target: "es5",
	entry: {
		index: APP_DIR + "/core.js",
		loadScript: APP_DIR + "/loadScript.js",
	},
	output: {
		filename: `${version}/[name].js`,
		path: BUILD_DIR,
		clean: true,
		// chunkFormat: "array-push",
		chunkFilename: (pathData) => {
			// console.log(pathData);
			return pathData.chunk.name === "index" ? `${version}/[name].js` : version + "/[name].js";
		},
		library: "TF",
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({})],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
		],
	},
};

module.exports = webpackConfig;
