var React = require('react');
var Router = require('react-router');

var Notes = React.createClass({
	
	render: function() {
		console.log(this.props);
		return (
			<div >
		      Notes
		      <p>Notes: {this.props.notes}</p>
     		 </div>
		);
	}
});

module.exports = Notes;
