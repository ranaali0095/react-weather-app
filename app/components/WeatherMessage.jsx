let React = require('react');

let WeatherMessage = ({temp,location}) => {

		debugger;
		return (
				<div>
						<p>It's it {temp} in {location}</p>
				</div>
		);

};

module.exports = WeatherMessage;