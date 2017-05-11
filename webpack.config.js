let path = require('path');

module.exports = {
		entry: './app/app.jsx',
		output: {
				path: path.resolve(__dirname, './public'),
				filename: "bundle.js"
		},
		resolve: {

				alias: {
						Main: path.resolve(__dirname, 'app/components/Main.jsx'),
						Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
						Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
						WeatherForm: path.resolve(__dirname,
								'app/components/WeatherForm.jsx'),
						WeatherMessage: path.resolve(__dirname,
								'app/components/WeatherMessage.jsx'),
						openWeatherMap: path.resolve(__dirname,
								'app/api/openWeatherMap.jsx'),
						About: path.resolve(__dirname, 'app/components/About.jsx'),
						Examples: path.resolve(__dirname, 'app/components/Examples.jsx')

				},
				extensions: ['.js', '.jsx']
		},
		module: {
				loaders: [
						{
								loader: 'babel-loader',
								query: {
										presets: ['react', 'es2015']
								},
								test: /\.jsx?$/,
								exclude: /(node_modules|bower_components)/
						}
				]
		},
		devtool: 'cheap-module-eval-source-map'
};