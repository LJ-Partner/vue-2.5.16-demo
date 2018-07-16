const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const config = {
	mode:"production",
	entry: {
		app:[
			path.resolve(__dirname,'app.js')
		]
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename:'js/[name].js',
		publicPath:'/'
	},
	module: {
		rules:[
			{
				test:/\.vue$/,
				exclude:/(node_modules)/,
				use:{
					loader: 'vue-loader',
					options:{
						loaders: {
            					js: 'babel-loader'
         					 }					
					}
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use:{
					loader: 'babel-loader',
					options:{
						presets: ['es2015','es2016'],
						plugins: ['transform-runtime','transform-object-rest-spread','babel-polyfill']
					}
				}
			},
			{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		        	use: ['css-loader',{
		          		loader:'postcss-loader',
		          		options:{

		          			plugins:[
		          				require('autoprefixer')()
		          			]
		          		}
		          	}]
		        })
		    },
			{
		        test: /\.less$/,
		        use: ExtractTextPlugin.extract({
		        	fallback: 'style-loader',
		          	use: ['css-loader',{
		          		loader:'postcss-loader',
		          		options:{
		          			plugins:[
		          				require('autoprefixer')()
		          			]
		          		}
		          	},'less-loader'],

		        })
		    },
		    {
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=images/[name].[ext]'
					}
				]
			},
	        {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=svg/[name].[ext]' 
					}
				]
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			},
	        {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			},
	        {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			}
		]
	},
	resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
	plugins: [
		new VueLoaderPlugin(),
		//new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: 'css/[name].css'
		}),
		new OptimizeCssAssetsPlugin(),
		new HtmlWebpackPlugin({
            title: 'mini-site1.0',
            filename: path.resolve(__dirname,'dist/index.html'),
            template: path.resolve(__dirname,'index.html'),
            inject: "body",
            hash: true // 为静态资源生成hash值
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])
	],
	devServer: {
        contentBase: path.join(__dirname,'dist'),
        port: 5055,
        compress:true,
		historyApiFallback:true
    }
}
module.exports = config;