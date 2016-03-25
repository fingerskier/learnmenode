var request = require('request');

var reqStream = request.post('http://localhost:8099');	// HTTP POST request RW stream

process.stdin.pipe(reqStream)

reqStream.pipe(process.stdout);
