import axios from 'axios'

function getRepos(username){
	return axios.get(`http://api.github.com/users/${username}/repos`);
}

function getUesrInfo(username){
	return axios.get(`http://api.github.com/users/${username}`);
}

export default function	getGithubInfo(username){
		//axios.all() waits for all arrays to come back.
		return axios.all([getRepos(username), getUesrInfo(username)]) 
			.then((arr) => ({repos: arr[0].data, bio: arr[1].data }));
}