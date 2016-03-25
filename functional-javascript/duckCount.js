function duckCount() {
	var args = Array.prototype.slice.call(arguments);
	var num = 0;

	args.reduce(function(prev, curr, I, arr) {
		Object.prototype.hasOwnProperty.call(curr, 'quack') ? 1 : 0;
	}, {})
}

module.exports = duckCount;
