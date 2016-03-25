var duper = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
	// spawn the process
	// join the stdin and stdout into a duplex stream
	// return the stream
	var ps = spawn(cmd, args);

	return duper(ps.stdin, ps.stdout);
}