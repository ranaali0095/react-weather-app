let React = require('react');

let ErrorModal = React.createClass({

		getDefaultProps: function() {
				return {
						title: 'Error'
				};
		},

		propTypes: {
				title: React.PropTypes.string,
				message: React.PropTypes.string.isRequired
		},
		componentDidMount: function() {
				let modal = new Foundation.Reveal($('#error-modal'));
				modal.open();
		},

		render: function() {
				let {title, message} = this.props;
				return (
						<div id="error-modal" className="reveal tiny text-center"
								 data-reveal="">
								<h4>{title}</h4>
								<p>{message}</p>
								<button className="close-button" data-close=""
												aria-label="Close modal" type="button">
										x
								</button>
						</div>

				);
		}
});

module.exports = ErrorModal;