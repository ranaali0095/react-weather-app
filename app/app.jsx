let ReactDOM = require('react-dom');
let React = require('react');
let Main = require('Main');
let Weather = require('Weather');
let About = require('About');
let Examples = require('Examples');

let {Route, Link, HashRouter, Switch} = require(
		'react-router-dom');

ReactDOM.render(
		<HashRouter>

				<Main>
						<Switch>
								<Route path="/" component={Weather}/>
								<Route path="/about" component={About}/>
								<Route path="/examples" component={Examples}/>
						</Switch>
				</Main>
		</HashRouter>,

		document.getElementById('app')
);