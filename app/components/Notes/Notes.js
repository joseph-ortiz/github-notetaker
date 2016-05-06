var React = require('react');
import NotesList from './NotesList'
var AddNote = require('./AddNote');

var Notes = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		notes: React.PropTypes.array.isRequired,
		addNote: React.PropTypes.func.isRequired

	},
	render: function() {
		console.log("Notes:" + this.props.notes);
		return (
			<div >
		      <h3>Notes for {this.props.username}</h3>
		      <AddNote username={this.props.username} addNote={this.props.addNote} />
		      <NotesList notes={this.props.notes}/>
     		 </div>
		);
	}
});

module.exports = Notes;
