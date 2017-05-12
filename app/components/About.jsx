let React = require('react');

let About = (props) => {

		return (
				<div>
						<h1 className="text-center">About</h1>
						<p>This is a weather application build on React.</p>

						<p>
								Here are some some of tools I used:
						</p>
						<ul>
								<li>
										<a href="https://facebook.github.io/react"> React </a>
										 Javascript framework used.
								</li>
								<li>
										<a href="http://openweathermap.org">Open Weather Map</a> - I
										used Open weather Map to search for weather data by city
										name.
								</li>
						</ul>
				</div>
		);

};

module.exports = About;