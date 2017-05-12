let React = require('react');
let {NavLink} = require('react-router-dom');

let Nav = React.createClass({

		onSearch: function(e) {
				e.preventDefault();
				let location = this.refs.location.value;
				let encodedLocation = encodeURIComponent(location);

				if (location.length > 0) {
						this.refs.location.value = '';
						window.location.hash = '#/?location=' + encodedLocation;
				}

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
																to="/examples"
																activeStyle={{
																		fontWeight: 'bold'
																}}>
																Examples
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

										</ul>
								</div>
								<div className="top-bar-right">
										<form onSubmit={this.onSearch}>
												<ul className="menu">
														<li>
																<input type="search"
																			 placeholder="Search weather by city name."
																			 ref="location"/>
														</li>
														<li>
																<input type="submit" className="button"
																			 value="Get Weather"/>
														</li>
												</ul>
										</form>
								</div>
						</div>
				);
		}

});

module.exports = Nav;