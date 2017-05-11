let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({

		//set initial state values
		getInitialState: function() {
				return {
						isLoading: false
				};

		},
		handleSearch: function(location) {
				let that = this;
				this.setState({
						isLoading: true

				});

				openWeatherMap.getTemp(location).then(function(temp) {
						that.setState({
								location: location,
								temp: temp,
								isLoading: false
						});
				}, function(err) {
						that.setState({isLoading: false});
						alert(err);
				});
		},
		render: function() {
				let {isLoading, location, temp} = this.state;

				function renderMessage() {
						if (isLoading) {
								return <h5>Fetching Weather</h5>;
						} else if (temp && location) {
								return <WeatherMessage temp={temp} location={location}/>;
						}
				}

				return (
						<div>
								<h1>Weather</h1>
								<WeatherForm onSearch={this.handleSearch}/>
								{renderMessage()}
						</div>
				);
		}

});

module.exports = Weather;