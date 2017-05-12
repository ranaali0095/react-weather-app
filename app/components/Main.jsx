let React = require('react');
let Nav = require('Nav');

let Main = (props) => {

		return (
				<div>
						<Nav/>
						<div className="row">
								<div className="column medium-6 large-4 small-centered">
										{props.children}

								</div>

						</div>
				</div>

		);

};

module.exports = Main;