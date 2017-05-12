let React = require('react');
let {Link} = require('react-router-dom');

let Examples = (props) => {
		return (
				<div>
						<h1 className="text-center">Example</h1>

						<p>Here are few example location to try out: </p>
						<ol>
								<li>
										<Link to="/?location=lahore">Lahore</Link>
								</li>
								<li>
										<Link to="/?location=Islamabad">Islamabad</Link>
								</li>
								<li>
										<Link to="/?location=Karachi">Karachi</Link>
								</li>
						</ol>
				</div>
		);
};

module.exports = Examples;