var webpack = require( 'webpack' );
var webpackUglifyJsPlugin = require( 'webpack-uglify-js-plugin' );

module.exports = {
	entry: './js/src/index.js',
	output: {
		path: './js/dist',
		filename: 'index.min.js'
	},
	//devtool: 'cheap-module-source-map',
	//devtool: 'eval',
  	module: {
	    loaders: [
			{
				test: /.js?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: [ 'es2015', 'stage-0' ],
					plugins: [
						[ 'transform-react-jsx', {
							'pragma': 'html' // default pragma is React.createElement
	    				}],
    					["jsx-pragmatic", { "module": "snabbdom/h", "import": "h" }]
    				]
				}
				
			}
		]
	},
	plugins: [
		/*
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify( 'production' )
			}
		}),
		*/
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})
	]
};