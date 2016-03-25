module.exports = function(inputWords) {
	var O = {};

	inputWords.reduce(function(prev, curr, I, arr) {
		O[curr] = (O[curr] || 0) + 1;
	}, 0);

	return O
}