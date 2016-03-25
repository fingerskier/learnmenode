var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
	// if this fx is unspecified then data passes unmodified
	// this.push() produces output
	// next() indicates ready to receive another chunk
	// done finishes the output
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done) {
	// if this fx is unspecified then the stream ends with a null
	done();
}


process.stdin.pipe(stream).pipe(process.stdout);
