function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
//		var submittal = submittedUsers.split('');

		console.log(goodUsers);
		console.log(submittedUsers);

		return submittedUsers.every(function(currVal, I, arr) {
			return goodUsers.some(function(curr, idx, allArr) {
				return currVal.name == curr.name;
			});
		});
	}
}

module.exports = checkUsersValid;