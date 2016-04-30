var React = require('react');
var Router = require('react-router');

var Repos = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired,
	},
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
