var axios = require('axios'); 

function getRepos(username){
	return axios.get('http://api.github.com/users/' + username + '/repos');
}

function getUesrInfo(username){
	return axios.get('http://api.github.com/users/' + username);
}

var helpers = {
	getGithubInfo: function(username){
		//axios.all() waits for all arrays to come back.
		return axios.all([getRepos(username), getUesrInfo(username)]) 
			.then(function(arr){
				return{
					repos: arr[0].data,
					bio: arr[1].data
				}
			});
	}
};

module.exports = helpers;