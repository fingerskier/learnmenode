var filePath = process.argv[2];

var fs = require('fs');

fs.readFile(filePath, function(err, buf) {
	for (var prev=0, curr=0, L=buf.length; curr < L; ++curr) {
		if (buf[curr] === 0x0A) {
			console.log(new Buffer(buf.slice(prev, curr)));
			prev = curr + 1;
		}
	}

	console.log(new Buffer(buf.slice(prev, buf.length - 1)));
});
