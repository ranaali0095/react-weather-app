let React = require('react');

let WeatherForm = React.createClass({

		onFormSubmit: function(e) {
				e.preventDefault();

				let location = this.refs.location.value;

				if (location.length > 0) {
						this.refs.location.value = '';
						this.props.onSearch(location);
				}
		},
		render: function() {

				return (
						<div>
								<form onSubmit={this.onFormSubmit}>
										<div>
												<input type="text" ref="location" placeholder="Search weather By city"/>
											</div>
										<div>
												<button className="button expanded hollow">Submit</button>
										</div>
								</form>
						</div>
				);
		}
});

module.exports = WeatherForm;