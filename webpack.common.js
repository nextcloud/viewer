const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const packageJson = require('./package.json')
const appName = packageJson.name
const appVersion = JSON.stringify(packageJson.version)

module.exports = {
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/js/',
		filename: `${appName}.js`,
		chunkFilename: 'chunks/[name]-[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(js|vue)$/,
				use: 'eslint-loader',
				exclude: /node_modules/,
				enforce: 'pre'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff2?)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new StyleLintPlugin(),
		new webpack.DefinePlugin({ appVersion })
	],
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'src/assets/'),
			Components: path.resolve(__dirname, 'src/components/'),
			Mixins: path.resolve(__dirname, 'src/mixins/'),
			Models: path.resolve(__dirname, 'src/models/'),
			Services: path.resolve(__dirname, 'src/services/'),
			Views: path.resolve(__dirname, 'src/views/')
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
}
