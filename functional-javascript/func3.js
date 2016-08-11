function doubleAll(numbers) {
	return numbers.map(function(curr, I, arr) {
		return curr * 2;
	})
}

module.exports = doubleAll;
