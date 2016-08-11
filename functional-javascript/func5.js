/*
	var validate = checkUsersValid(whitelist);

	validate(userList);
*/

var goodUsers = [{id:1},{id:2},{id:3}];

function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(stranger, I, arr) {
			return goodUsers.some(function(goodie, I, arr) {
				return goodie.id = stranger.id;
			});
		});
	}
}

module.exports = checkUsersValid;
