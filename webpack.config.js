const path = require('path');

module.exports = {
	entry: './src/sgl.ts',
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, ''),
		},
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'sgl.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
