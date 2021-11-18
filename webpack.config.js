const path = require('path');
const { library } = require('webpack');

module.exports = {
	entry: './src/sgl.ts',
	mode: 'production',
	target: 'web',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, "./dist/"), // string
		filename: "sgl.js", // string
		library: "SGL", // string,
		libraryTarget: "umd", // universal module definition
		globalObject: "this", // string
		libraryExport: "default" // string
	},
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
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript']
					}
				},
				exclude: [
					'/node_modules/',
					'/tools/',
					'/dist/'
				],
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
