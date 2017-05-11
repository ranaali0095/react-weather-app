let React = require('react');
let {NavLink} = require('react-router-dom');

let Nav = (props) => {

		return (
				<div>
						<h2>Nav Component</h2>

						<NavLink
								to="/"
								exact
								activeClassName="selected"
								activeStyle={{
										fontWeight: 'bold'
								}}>
								Get The Weather
						</NavLink>

						<NavLink
								to="/about"
								activeClassName="selected"
								activeStyle={{
										fontWeight: 'bold'
								}}>
								About
						</NavLink>

						<NavLink
								to="/examples"
								activeStyle={{
										fontWeight: 'bold'
								}}>
								Examples
						</NavLink>
				</div>
		);
};

module.exports = Nav;