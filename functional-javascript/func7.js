/*
*/

function uppercaseArray(items) {
	if (!items.length) return []

	var head = items[0]

	head = head.toUpperCase()

	var tail = items.slice(1)

	return [head].concat(uppercaseArray(tail))
}


function reduce(arr, fn, initial) {
	var I = 0
	var result = initial || 0;

	arr.forEach(function(el) {
		result += fn(result, el, I++, arr)
	})

	return result
}

module.exports = reduce;
