var split = require('split');
var through = require('through2');

var stream = through(write, end);
var I = false;

function write(buffer, encoding, next) {
	// if this fx is unspecified then data passes unmodified
	// this.push() produces output
	// next() indicates ready to receive another chunk
	// done finishes the output
	if (I) this.push(buffer.toString().toUpperCase()) + '\n'
	else this.push(buffer.toString().toLowerCase()) + '\n';

	next();

	I = !I;
}

function end(done) {
	// if this fx is unspecified then the stream ends with a null
	done();
}


process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
