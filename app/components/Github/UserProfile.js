var React = require('react');
var Router = require('react-router');

var UserProfile = React.createClass({
	
	render: function() {
		console.log(this.props);
		return (
			<div >
		      <p>UserProfile</p>
		      <p>Username:{this.props.username}</p>
		      <p>Bio:{this.props.bio.name}</p>
     		 </div>
		);
	}
});

module.exports = UserProfile;
