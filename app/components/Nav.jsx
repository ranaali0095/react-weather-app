let React = require('react');
let {NavLink} = require('react-router-dom');

let Nav = React.createClass({

		onSearch: function(e) {
				e.preventDefault();
		},
		render: function() {

				return (
						<div className="top-bar">
								<div className="top-bar-left">
										<ul className="menu">
												<li className="menu-text"> React Weather</li>

												<li>
														<NavLink
																to="/"
																exact
																activeClassName="selected"
																activeStyle={{
																		fontWeight: 'bold'
																}}>
																Get The Weather
														</NavLink>
												</li>

												<li>
														<NavLink
																to="/about"
																activeClassName="selected"
																activeStyle={{
																		fontWeight: 'bold'
																}}>
																About
														</NavLink>
												</li>

												<li>
														<NavLink
																to="/examples"
																activeStyle={{
																		fontWeight: 'bold'
																}}>
																Examples
														</NavLink>
												</li>
										</ul>
								</div>
								<div className="top-bar-right">
										<form onSubmit={this.onSearch}>
												<ul className="menu">
														<li>
																<input type="search"
																			 placeholder="Search weather by city"/>
														</li>
														<li>
																<input type="submit" className="button" value="Get Weather"/>
														</li>
												</ul>
										</form>
								</div>
						</div>
				);
		}

});

module.exports = Nav;