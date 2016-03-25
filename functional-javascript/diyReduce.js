function reduce(arr, fn) {
	console.log(arr);

	if (arr.length === 1) return arr[0]
	else return fn(arr.shift());
}


module.exports = reduce; 
