var React = require('react');
var Router = require('react-router');

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
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
