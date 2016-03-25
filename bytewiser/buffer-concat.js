var A = [];
var B = new Buffer('');

process.stdin.on('data', function(buf) {
	A.push(buf);
});

process.stdin.on('end', function() {
	var B = Buffer.concat(A);
	
	console.log(B);
});
