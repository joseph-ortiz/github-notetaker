import React from 'react'
var Router = require('react-router');
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
import getGithubInfo from '../utils/helpers'

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
  		this.ref = new Firebase("https://gh-notetaker-jortiz.firebaseio.com/");
      this.init(this.props.params.username);
  	},
    componentWillReceiveProps: function(nextProps){
      console.log("The next props are " + nextProps);
      this.unbind('notes'); //Via Reactfire, we unbind the state listneer   
      this.init(nextProps.params.username);
    },
  	componentWillUnmount: function() {
  		this.unbind('notes'); //Via Reactfire, we unbind the state listneer 	
  	},
  	handleAddNote: function(newNote){
  		this.ref.child(this.props.params.username).child(this.state.notes.length + 1).set(newNote)
  	},
    init: function(username){
     var childRef = this.ref.child(username);
      this.bindAsArray(childRef, 'notes'); //binds the ref and the name of the state we want to bind too.

      getGithubInfo(username)
        .then(function(data){
          this.setState({
            bio: data.bio,
            repos: data.repos
          })
        }.bind(this))
         
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
		      		<Notes 
		      		username={this.props.params.username} 
		      		notes={this.state.notes} 
		      		addNote={this.handleAddNote} />
		      	</div>
     		 </div>
		);
	}
});

module.exports = Profile;
