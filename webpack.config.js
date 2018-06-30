const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}

		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};

module.exports = config;
