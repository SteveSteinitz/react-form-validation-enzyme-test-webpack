// Created by steinitz on 06 Jul 2016

import webpack from 'webpack';
import path from 'path';

const ExtractTextPlugin = require('extract-text-webpack-plugin'); // http://stackoverflow.com/questions/32211231/webpack-sass-loader-no-output-css-file

export default {
	debug: true,

	// devtool: 'cheap-module-eval-source-map', // special source map for development, but doesn't allow webstorm debug
	// devtool: DEBUG ? 'source-map' : false,
	devtool: 'eval-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
		'./src/styles/styles.sass', // SJS
		'./src/index' // must be last
	],
	target: 'web', // alternatively, 'node'
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('[name].css')
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{
				test: /\.sass/,
				loader: "style!css!autoprefixer!sass"
			},
			{test: /(\.css)$/, loaders: ['style', 'css']},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
			// for bootstrap
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
		]
	}
};
