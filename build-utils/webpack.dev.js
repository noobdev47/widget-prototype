const webpack = require('webpack')
const commonPaths = require('./common-paths')

const port = process.env.PORT || 3000

const config = {
	mode: 'development',
	entry: {
		app: `${commonPaths.appEntry}/index.js`,
	},
	output: {
		filename: '[name].[hash].js',
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		port: port,
		open: true,
		host: 'localhost',
		historyApiFallback: true,
	},
}

module.exports = config