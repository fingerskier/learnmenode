/*
*/


function duckCount() {
	// var args = [...arguments];
	var args = Array.from(arguments)
	var result = 0;

	args.reduce(function(val, el) {
		if (el.quack) return val + 1
		else return val
	}, result)
}

module.exports = duckCount
