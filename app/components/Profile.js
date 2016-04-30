var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState() {
      return {
          notes:[1,2,3],

          bio: {
          	name: "Joseph Ortiz"
          },

          repos:['a','b','c']  
      };
  	},
  	componentDidMount() {
  		this.ref = new Firebase("https://gh-notetaker-jortiz.firebaseio.com");
  		var childRef = this.ref.child(this.props.params.username);
  		this.bindAsArray(childRef, 'notes'); //binds the ref and the name of the state we want to bind too.
  	},
  	componentWillUnmount() {
  		this.unbind('notes'); //Via Reactfire, we unbind the state listneer 	
  	},
	render: function() {
		console.log(this.props);
		return (
			<div className="row">
		      	<div className="col-md-4">
		      		<UserProfile username={this.props.params.username} bio={this.state.bio}/>
		      	</div>
		      	<div className="col-md-4">
		      		<Repos username={this.props.params.username} repos={this.state.repos}/>
		      	</div>
		      	<div className="col-md-4">
		      		<Notes username={this.props.params.username} notes={this.state.notes}/>
		      	</div>
     		 </div>
		);
	}
});

module.exports = Profile;