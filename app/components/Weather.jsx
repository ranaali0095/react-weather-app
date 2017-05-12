let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

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
						isLoading: true,
						errorMessage: undefined,
						location: undefined,
						temp: undefined

				});

				openWeatherMap.getTemp(location).then(function(temp) {
						that.setState({
								location: location,
								temp: temp,
								isLoading: false

						});
				}, function(err) {
						that.setState({
								isLoading: false,
								errorMessage: "Please enter valid city name."
						});
				});
		},
		componentDidMount: function() {

				let searchLocation = this.props.location.search;
				let location = searchLocation.split('=')[1];
				if (location && location.length > 0) {
						this.handleSearch(location);
						window.location.hash = '#/';
				}
		},

		componentWillReceiveProps: function(newProps) {
				let searchLocation = newProps.location.search;
				let location = searchLocation.split('=')[1];
				if (location && location.length > 0) {
						this.handleSearch(location);
						window.location.hash = '#/';
				}
		},

		render: function() {
				let {isLoading, location, temp, errorMessage} = this.state;

				function renderMessage() {
						if (isLoading) {
								return <h3 className="text-center">Fetching Weather</h3>;
						} else if (temp && location) {
								return <WeatherMessage temp={temp} location={location}/>;
						}
				}

				function renderError() {
						if (typeof errorMessage === 'string') {
								return (
										<ErrorModal message={errorMessage}/>
								);
						}
				}

				return (
						<div>
								<h1 className="text-center page-title">Weather</h1>
								<WeatherForm onSearch={this.handleSearch}/>
								{renderMessage()}
								{renderError()}
						</div>
				);
		}

});

module.exports = Weather;