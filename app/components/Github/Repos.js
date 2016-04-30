var React = require('react');
var Router = require('react-router');

var Repos = React.createClass({
	
	render: function() {
		console.log(this.props);
		return (
			<div >
		      <p>Repos</p>
		      <p>Repos: {this.props.repos}</p>
     		 </div>
		);
	}
});

module.exports = Repos;
